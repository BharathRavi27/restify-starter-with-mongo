const errors = require("restify-errors");
// restify-errors is a middleware managed by restify for easy error handeling.
const User = require("../models/User");

module.exports = server => {
  // Get users
  server.get("/users", async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
      next();
    } catch (err) {
      return next(new errors.InvalidContentError(err));
    }
  });

  // Get one user
  server.get("/users/:id", async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
      next();
    } catch (err) {
      return next(new errors.ResourceNotFoundError("User not found!"));
    }
  });

  // Add user
  server.post("/users", async (req, res, next) => {
    const { name, email, age } = req.body;
    const users = new User({
      name,
      email,
      age
    });
    try {
      const newUsers = await users.save();
      res.send(201);
      next();
    } catch (err) {
      next(new errors.InternalServerError(err.message));
    }
  });

  // Update user

  server.put("/users/:id", async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.send(200);
      next();
    } catch (err) {
      next(new errors.ResourceNotFoundError(err.message));
    }
  });

  // Delete user
  server.del("/users/:id", async (req, res, next) => {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.id });
      res.send(204);
      next();
    } catch (err) {
      next(new errors.ResourceNotFoundError(err.message));
    }
  });
};
