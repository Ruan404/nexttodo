"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { DeleteIcon, EditIcon, ArrowBackIcon } from "./icons";
import { deleteTask, updateStatus, updateName } from "../actions";

export default function Task({ id, name, status, mutate }) {
  const [mode, setMode] = useState("display");
  const [names, setName] = useState(name);
  const [isPending, startTransition] = useTransition();

  const taskRef = useRef();

  const deleteWithId = deleteTask.bind(null, id);
  const updateStatusWithId = updateStatus.bind(null, id);
  const updateNameWithId = updateName.bind(null, id);

  function handleOutsideClick(e) {
    if (!taskRef.current.contains(e.target)) {
      startTransition(() => {
        setMode("display");
      });
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function handleEdit() {
    setMode("edit");
  }

  function handleKeyBoard(e) {
    if (e.key === "Escape") {
      setMode("display");
      setName(name);
    } else if (e.key === "Enter") {
      startTransition(() => {
        setMode("display");
      });
    }
  }

  function handleBack() {
    setMode("display");
    setName(name);
  }

  function handleRequestSubmit(e) {
    e.preventDefault();
    e.currentTarget.form?.requestSubmit();
  }

  async function handleDelete(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      deleteWithId(formData);
      mutate();
    });
  }

  async function handleNameChange(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      updateNameWithId(formData);
      mutate();
    });
  }

  async function handleStatusChange(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      updateStatusWithId(formData);
      mutate();
    });
  }

  return (
    <div
      ref={taskRef}
      className={`${
        mode === "display" ? "shadow-border" : "primary-focus-border"
      } flex w-full gap-4 rounded-2xl bg-secondary p-4 hover:bg-tertiary`}
    >
      <div className="flex w-full items-center gap-2">
        {mode === "edit" ? (
          <span
            onClick={handleBack}
            className="cursor-pointer text-svg-btn hover:text-svg-btn-hover"
          >
            <ArrowBackIcon className="transition-all duration-300 ease-in hover:-translate-x-[0.375rem]" />
          </span>
        ) : (
          <form onSubmit={handleStatusChange} className="flex">
            <input
              type="radio"
              name="status"
              checked={status}
              onChange={handleRequestSubmit}
              value={name}
              id={`radio-${id}`}
              aria-label={`${name} ${id}`}
              className={`${
                status === true
                  ? "border-none bg-checked"
                  : "primary-focus-border"
              } h-5 w-5 flex-shrink-0 cursor-pointer appearance-none rounded-full outline-none`}
            />
          </form>
        )}
        <form
          onSubmit={handleNameChange}
          className={`flex w-full items-center gap-2 text-sm`}
        >
          <input
            type="text"
            name="name"
            onKeyDown={handleKeyBoard}
            value={names}
            aria-label={`${name} ${id}`}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            required
            readOnly={mode === "edit" ? false : true}
            className={`${status === true ? "text-text/50 line-through" : ""} ${
              mode === "display" ? "cursor-context-menu" : ""
            } w-full bg-transparent p-2 text-sm outline-none`}
          />
        </form>
      </div>
      <div className="flex w-fit items-center gap-4 text-svg-btn">
        <button
          onClick={status === false ? handleEdit : null}
          className="cursor-pointer hover:text-svg-btn-hover"
          aria-label="edit task"
        >
          <EditIcon />
        </button>
        <form onSubmit={handleDelete} className="h-6">
          <button
            type="submit"
            className="cursor-pointer hover:text-svg-btn-hover"
            aria-label="delete task"
          >
            <DeleteIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
