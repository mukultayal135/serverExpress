
const { task } = require('../models');

exports.getAllTasks = async () => await task.findAll();
exports.getTask = async (id) => {
  const Task = await task.findOne(
    {
      where: { id:id }
    });
  console.log(Task);
  if (!Task) {
    throw new Error('Task not found');
  }
  return Task;
};

exports.deleteTask = async() => {
  await task.destroy({
    where:{
      isComplete:true
    }
  });
  return ;
};
exports.createTask = async (body) => {
  const Task = {
    title: body.title,
    isComplete: false,
  };
  const createdTask=await task.create(Task);
  return createdTask;
};
exports.updateTask = async (id) => {
  const Task = await task.findOne({
    where:{
      id:id
    }
  });
  if (!Task) {
    throw new Error('Task not found');
  }
  Task.isComplete=true;
  await Task.save();
  return Task;
    
};
