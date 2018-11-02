module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  URL: process.env.BASE_URL || "http://localhost:5000",
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://<username>:<password>@ds025399.mlab.com:25399/restifytest" //Use you Mlab MongoDB URL here or other MongoDB URLs(local or hosted)
};
