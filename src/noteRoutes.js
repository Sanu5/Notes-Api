const express = require("express");
const { getNote } = require("../controller/noteController");
const { createNote } = require("../controller/noteController");
const { deleteNote } = require("../controller/noteController");
const { updateNote } = require("../controller/noteController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNote)

noteRouter.post("/", auth, createNote)

noteRouter.delete("/:id", auth, deleteNote)

noteRouter.put("/:id",auth, updateNote)

module.exports = noteRouter