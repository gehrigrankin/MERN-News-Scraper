const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  headline: { type: String, required: true },
  topic: { type: String, required: true },
  time: { type: Date, default: Date.now },
  summary: { type: String, required: true },
  content: { type: Array, required: true },
  links: { type: Array, required: true }
}, { _id: false });

const Article = mongoose.model("articles", articleSchema);

module.exports = Article;
