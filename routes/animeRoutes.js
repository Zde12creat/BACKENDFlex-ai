const express = require("express");
const Anime = require("../models/Anime");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const data = await Anime.create(req.body);
  res.json(data);
});

// READ ALL
router.get("/", async (req, res) => {
  const data = await Anime.find();
  res.json(data);
});

// READ BY ID
router.get("/:id", async (req, res) => {
  const data = await Anime.findById(req.params.id);
  res.json(data);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const data = await Anime.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(data);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Anime.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

module.exports = router;
