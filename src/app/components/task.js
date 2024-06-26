import { useContext, useState } from "react";
import styles from "@/app/todo.module.css";
import EditSvgComponent from "./edit";
import DeleteSvgComponent from "./delete";
import ArrowBackSvgComponent from "./arrowBack";
import { DataContext } from "../contexts/DataContext";

export default function Task(props) {
  const { id, name, status, updatePercentage } = props;
  const [mode, setMode] = useState("display");
  const [names, setName] = useState(name);
  const { updateData } = useContext(DataContext);

  function handleEdit() {
    setMode("edit");
  }

  async function handleDelete(id) {
    try {
      const res = await fetch("./api/tasks", {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
      });

      if (res) {
        const result = await res.json();
        updateData(result);
        updatePercentage(result);
      }
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
      if (res) {
        const result = await res.json();
        updateData(result);
        updatePercentage(result);
      }
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
      if (res) {
        const result = await res.json();
        updateData(result);
        updatePercentage(result);
      }
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
    <div className={mode === 'display' ? styles.task : `${styles.task} ${styles.focus}`} id={status === true ? styles.taskDone : ""}>
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
              id={`radio-${id}`}
            />
            <input type="hidden" name="id" value={id} />
            <label htmlFor={`radio-${id}`}>{name}</label>
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
          <span onClick={status === false ? handleEdit : null}>
            <EditSvgComponent className={styles.actionBtn} />
          </span>
          <span onClick={() => handleDelete(id)}>
            <DeleteSvgComponent className={styles.actionBtn} />
          </span>
        </div>
      </div>
    </div>
  );
}
