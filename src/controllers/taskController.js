const taskService = require('../../../services/taskService');

exports.getAllTasks = (req, res) => {
  const todos = taskService.getAllTasks();
  res.send(todos);
};
exports.getTask = (req, res) => {
  try {
    const task = taskService.getTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.deleteTask = (req, res) => {
  const todos = taskService.deleteTask();
  res.send(todos);
};

exports.createTask = (req, res) => {
  const { body } = req;
  const task = taskService.createTask(body);
  res.status(201).send(task);
};
exports.updateTask = (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = taskService.updateTask(id, req.body);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
