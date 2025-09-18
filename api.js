const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory todo list
let todos = [];

// GET → List all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST → Add a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo = {
    id: todos.length + 1,
    task: task,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
