import { useEffect, useState } from "react";
import styles from "@/app/todo.module.css";
import EditSvgComponent from "./edit";
import DeleteSvgComponent from "./delete";
import ArrowBackSvgComponent from "./arrowBack";

export default function Task(props) {
  const { id, name, status, fetchData } = props;
  const [mode, setMode] = useState("display");
  const [names, setName] = useState(name);

  function handleEdit() {
    setMode("edit");
  }

  async function handleDelete(id) {
    try {
      const res = await fetch("./api/tasks", {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  function handleKeyBoard(e) {
    if (e.key === "Escape") {
      setMode("display");
      setName(name);
    }
  }

  async function saveName(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("./api/tasks", {
        method: "PUT",
        body: formData,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    } finally {
      setMode("display");
    }
  }

  async function saveStatus(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("./api/tasks", {
        method: "PUT",
        body: formData,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.target.parentNode.requestSubmit();
  }

  function handleBack() {
    setMode("display");
    setName(name);
  }

  return (
    <div className={styles.task} id={status === true ? styles.taskDone : ""}>
      <div className={styles.actionForm}>
        <div className={styles.taskInfo}>
          <form
            id={mode === "display" ? "" : styles.hide}
            onSubmit={saveStatus}
          >
            <input
              type="radio"
              name="status"
              checked={status}
              onChange={handleSubmit}
              value={name}
            />
            <input type="hidden" name="id" value={id} />
            <label>{name}</label>
          </form>
          <form
            id={mode === "edit" ? "" : styles.hide}
            onSubmit={saveName}
            className={styles.saveForm}
          >
            <span onClick={handleBack} className={styles.backBtn}>
              <ArrowBackSvgComponent className={styles.actionBtn} />
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
            <input type="hidden" name="id" value={id} />
          </form>
        </div>
        <div className={styles.actions}>
          <button onClick={status === false ? handleEdit : null}>
            <EditSvgComponent className={styles.actionBtn} />
          </button>
          <button onClick={() => handleDelete(id)}>
            <DeleteSvgComponent className={styles.actionBtn} />
          </button>
        </div>
      </div>
    </div>
  );
}
