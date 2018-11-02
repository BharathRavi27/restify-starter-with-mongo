const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamp");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 0
  }
});

CustomerShema.plugin(timeStamp);
const User = mongoose.model("User", UserSchema);

module.exports = User;
