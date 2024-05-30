import { taskData } from "@/data/data";

let nextId = 4;

const addTask = (task) => {
  taskData.push({ id: nextId++, name: task, status: false });
};

const changeName = (id, name) => {
  taskData[findId(id)].name = name;
};

const changeStatus = (id) => {
  taskData[findId(id)].status = true;
};

const deleteTask = (id) => {
  taskData.splice(findId(id), 1);
};

const findId = (index) => {
  const taskId = taskData.findIndex((el) => el.id === parseInt(index));
  return taskId;
};

module.exports = { addTask, changeName, changeStatus, deleteTask };
