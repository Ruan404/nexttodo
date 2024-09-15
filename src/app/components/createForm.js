"use client";

import { createTask } from "../actions";
import { useTransition, useRef } from "react";
import { CrossIcon } from "./icons";

export default function CreateForm({ mutate }) {
  const formRef = useRef();
  const [isPending, startTransition] = useTransition();

  async function handleCreateTask(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      createTask(formData);
      formRef.current?.reset();
      mutate();
    });
  }

  return (
    <form
      ref={formRef}
      className="flex items-center gap-4"
      onSubmit={handleCreateTask}
    >
      <input
        type="text"
        name="name"
        placeholder="add a new task"
        autoComplete="off"
        required
        className="shadow-border focus:primary-focus-border h-10 w-full rounded-2xl bg-secondary p-4 text-sm outline-none"
      />
      {/* <button type="submit" className="rounded-full flex-shrink-0 cursor-pointer w-10 h-10 bg-primary-btn text-fg-btn text-2xl font-bold hover:bg-primary-btn-hover">
        +
      </button> */}
      <button
        type="submit"
        aria-label="add new task"
        className="flex-shrink-0 cursor-pointer rounded-full bg-primary-btn p-2 font-bold text-fg-btn hover:bg-primary-btn-hover"
      >
        <CrossIcon />
      </button>
    </form>
  );
}
