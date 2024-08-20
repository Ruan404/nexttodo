"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import styles from "@/app/todo.module.css";
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

  return (
    <div
      ref={taskRef}
      className={
        mode === "display" ? styles.task : `${styles.task} ${styles.focus}`
      }
      id={status === true ? styles.taskDone : ""}
    >
      <div className={styles.actionForm}>
        <div className={styles.taskInfo}>
          <form
            id={mode === "display" ? "" : styles.hide}
            action={async (formData) => {
              await updateStatusWithId(formData);
              mutate(); //revalidate data
            }}
          >
            <input
              type="radio"
              name="status"
              checked={status}
              onChange={handleRequestSubmit}
              value={name}
              id={`radio-${id}`}
            />
            <label htmlFor={`radio-${id}`}>{name}</label>
          </form>
          <form
            id={mode === "edit" ? "" : styles.hide}
            action={async (formData) => {
              await updateNameWithId(formData);
              mutate(); //revalidate data
            }}
            className={styles.saveForm}
          >
            <span onClick={handleBack} className={styles.backBtn}>
              <ArrowBackIcon className={styles.actionBtn} />
            </span>
            <input
              type="text"
              name="name"
              onKeyDown={handleKeyBoard}
              value={names}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
            />
          </form>
        </div>
        <div className={styles.actions}>
          <span onClick={status === false ? handleEdit : null}>
            <EditIcon className={styles.actionBtn} />
          </span>
          <form
            action={async (formData) => {
              await deleteWithId(formData);
              mutate(); //revalidate data
            }}
          >
            <button
              onClick={handleRequestSubmit}
              style={{
                appearance: "none",
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            >
              <DeleteIcon className={styles.actionBtn} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
