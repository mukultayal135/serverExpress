const todos = [{ id: 1, name: 'course1' },
  { id: 2, name: 'tasks1', isCompleted: false },
  { id: 3, name: 'task1', isCompleted: false }];
let id = 4;

const { Task } = require('../database/models');

exports.getAllTasks = a;
exports.getTask = (id) => {
  const task = todos.find((x) => x.id === parseInt(id));
  if (!task) {
    throw new Error('Task not found');
  }
  return task;
};
exports.deleteTask = () => todos.filter((task) => task.isCompleted === false);
exports.createTask = (body) => {
  const task = {
    id: id++,
    name: body.name,
    isCompleted: false,
  };
};
exports.updateTask = (id, body) => {
  const reqIndex = todos.findIndex((x) => x.id == id);
  if (reqIndex === -1) {
    throw new Error('Task not found');
  }
  Object.assign(todos[reqIndex], body);
  return todos[reqIndex];
};
