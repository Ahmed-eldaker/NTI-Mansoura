const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
// const authMiddleware = require("../middleware/authMiddleware");
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
module.exports = router;
