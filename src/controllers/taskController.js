const taskService = require('../services/taskService');

exports.getAllTasks = async (req, res) => {
  const todos = await taskService.getAllTasks();
  res.send(todos);
};
exports.getTask = async (req, res) => {
  try {
    const task = await taskService.getTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const todos = await taskService.deleteTask();
  console.log(todos);
  res.status(200).send('message: \'Deleted successfully\'');
};

exports.createTask = async (req, res) => {
  const { body } = req;
  const task = await taskService.createTask(body);
  res.status(201).send(task);
};
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await taskService.updateTask(id);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
