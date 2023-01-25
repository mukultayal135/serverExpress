const express = require('express');
const app = express();
const port = 3000;
let todos = [];
let idCount = 0;

app.use(express.json());

app.get('/tasks', (req, res) => {

    res.send(todos);
});
app.post('/tasks', (req, res) => {
    let task = {
        id: idCount++,
        name: req.body.name,
        isCompleted: false

    };
    res.status(201);
    todos.push(task);
    res.send(todos);
});
app.get('/tasks/:id', (req, res) => {
    const reqIndex = todos.findIndex(x => x.id == req.params.id);
    if (reqIndex == -1) {
        res.send(404);
    }
    else {
        res.send(todos[reqIndex]);
    }
});
app.delete('/tasks', (req, res) => {
    todos = todos.filter(todo => todo.isCompleted === false);
    res.send(todos);
});
app.put('/tasks/:id', (req, res) => {
    const reqIndex = todos.findIndex(x => x.id == req.params.id);
    if (reqIndex == -1) {
        res.send(404);
    }
    Object.assign(todos[reqIndex], req.body);
    res.send(todos[reqIndex]);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});