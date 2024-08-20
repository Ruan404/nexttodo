"use client";

import styles from "@/app/todo.module.css";
import { createTask } from "../actions";
import { useRef } from "react";

export default function CreateForm({ mutate }) {
  const formRef = useRef();

  return (
    <form
      ref={formRef}
      className={styles.addTask}
      action={async (formData) => {
        await createTask(formData);
        formRef.current?.reset();
        mutate(); //revalidate data
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="add a new task"
        autoComplete="off"
        required
      />
      <button type="submit">+</button>
    </form>
  );
}
