const express = require("express");
const app = express();

const notes = require("../backend/data/notes");

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Working Successfully");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Servers started on port ${PORT}`));
