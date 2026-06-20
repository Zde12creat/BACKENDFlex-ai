const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema(
  {
    _id: String,
    shortcut: String,
    title: String,
    category: String,
    prompt: String,
    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Anime", AnimeSchema, "prompts");
