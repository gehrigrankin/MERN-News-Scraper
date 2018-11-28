const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  username: { type: String, required: true },
 
}, { _id: false });

const User = mongoose.model("users", userSchema);

module.exports = User;
