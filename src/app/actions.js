"use server";

import data from "@/data/data.json";
import { revalidatePath } from "next/cache";

let nextId = 4;

const findId = (index) => {
  const todoId = data.findIndex((el) => el.id === parseInt(index));
  return todoId;
};

export async function getTodos() {
  return data
}

export async function createTask(formData) {
  const newTodo = formData.get("name");

  data.push({ id: nextId++, name: newTodo, status: false });

  revalidatePath('/')
}

export async function updateStatus(id) {
  data[findId(id)].status = true;

  revalidatePath("/");
}

export async function updateName(id, formData) {
  const NewName = formData.get("name");

  data[findId(id)].name = NewName;

  revalidatePath("/");
}

export async function deleteTask(id) {
  data.splice(findId(id), 1);

  revalidatePath("/");
}
