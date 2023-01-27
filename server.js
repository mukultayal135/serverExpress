const express = require('express');
const app = express();
const port = 3000;
let todos = [];
let idCount = 0;

app.use(express.json());
app.route('/tasks')
  .get((req, res) => {

    res.send(todos);
  })
  .post((req, res) => {
    let hello =1;
    console.log(hello);
    
    const task = {
      ...req.body,
      id: idCount++,
      isCompleted: false

    };
    res.status(201);
    todos.push(task);
    res.send(todos);
  })
  .delete((req, res) => {
    todos = todos.filter(todo => todo.isCompleted === false);
    res.send(todos);
  });
app.route('/tasks/:id')
  .get((req, res) => {
    const reqIndex = todos.findIndex(x => x.id === parseInt(req.params.id));
    if (reqIndex == -1) {
      res.send(404);
    }
    else {
      res.send(todos[reqIndex]);
    }
  })
  .put('/tasks/:id', (req, res) => {
    const reqIndex = todos.findIndex(x => x.id == req.params.id);
    if (reqIndex === -1) {
      res.send(404);
    }
    Object.assign(todos[reqIndex], req.body);
    res.send(todos[reqIndex]);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});