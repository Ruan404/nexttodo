"use server";

import data from "@/data/data.json";

let nextId = 4;

const findId = (index) => {
  const todoId = data.findIndex((el) => el.id === parseInt(index));
  return todoId;
};

export async function getTodos() {
  return data;
}

export async function createTask(formData) {
  const newTodo = formData.get("name");

  data.push({ id: nextId++, name: newTodo, status: false });
}

export async function updateStatus(id) {
  data[findId(id)].status = true;
}

export async function updateName(id, formData) {
  const newName = formData.get("name");

  data[findId(id)].name = newName;
}

export async function deleteTask(id) {
  data.splice(findId(id), 1);
}
