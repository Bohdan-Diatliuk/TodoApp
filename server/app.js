import express from 'express';

const port = 3005;
const app = express();

const todos = [
  { id: '1', title: 'Learn JavaScript', completed: true },
  { id: '2', title: 'Learn React', completed: true },
  { id: '3', title: 'Learn Express', completed: false },
  { id: '4', title: 'Learn Node.js', completed: true },
  { id: '5', title: 'Learn MongoDB', completed: false },
];

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/todos/:id', (req, res) => {
  const { id } = req.params;

  const todo = todos.find(item => item.id === id);

  if (!todo) {
    res.status(404);

    return;
  }

  res.send(todo);
});

app.listen(port, () => {});
