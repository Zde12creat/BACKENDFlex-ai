const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const animeRoutes = require("./routes/animeRoutes");

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(cors()); // frontend bebas akses
app.use(express.json());

// routes
app.use("/api/anime", animeRoutes);

app.get("/", (req, res) => {
  res.send("Backend jalan 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
