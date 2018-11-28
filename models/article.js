const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: { type: Number, required: true },
  headline: { type: String, required: true },
  topic: { type: String, required: true },
  time: { type: String, required: true },
  summary: { type: String, required: true },
  src: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
