const restify = require("restify");
const mongoose = require("mongoose");
const config = require("./config");

// Create server
const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
  mongoose.connect(
    config.MONGODB_URI,
    { useNewUrlParser: true }
  );
});

const db = mongoose.connection;

db.on("error", err => console.log(err));

db.once("open", () => {
  require("./routes/users")(server);
  console.log(`MONGODB started on ${config.MONGODB_URI}`);
});
