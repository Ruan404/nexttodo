import {
  addTask,
  changeName,
  changeStatus,
  deleteTask,
} from "@/utils/processFormData";
import { taskData } from "@/data/data";

export async function POST(req, res) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");

    addTask(name);

    return new Response(JSON.stringify(taskData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function GET(req, res) {
  return new Response(JSON.stringify(taskData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PUT(req, res) {
  try {
    const formData = await req.formData();
    const id = formData.get("id");
    const newName = formData.get("name");

    if (newName != null) {
      changeName(id, newName);
    } else {
      changeStatus(id);
    }

    return new Response(JSON.stringify(taskData));
  } catch (err) {
    console.log(err);
  }
}

export async function DELETE(req, res) {
  try {
    const id = await req.json();

    deleteTask(id);

    return new Response(JSON.stringify(taskData));
  } catch (err) {
    console.log(err);
  }
}
