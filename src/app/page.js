"use client";

import styles from "@/app/todo.module.css";
import Task from "@/app/components/task";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "./contexts/DataContext";

export default function Todo() {
  const { data, updateData } = useContext(DataContext);
  const [percentage, setPercentage] = useState(0);
  const [name, setName] = useState("");

  const updatePercentage = (inputData) => {
    if (inputData.length > 0) {
      const tasksDone = inputData.filter((task) => task.status != false);
      setPercentage(Math.round((tasksDone.length / inputData.length) * 100));
    } else {
      setPercentage(0);
    }
  };

  useEffect(() => {
    return async () => {
      try {
        const res = await fetch("./api/tasks", { cache: "no-store" });
        const tasks = await res.json();
        updateData(tasks);
        updatePercentage(tasks);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  async function saveTask(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("./api/tasks", {
        method: "POST",
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
      setName("");
    }
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.progress}>
          <h3>Progress</h3>
          <div className={styles.progressInfo}>
            <p>{percentage}% of tasks done</p>
            <progress
              className={styles.progressBar}
              max="100"
              value={percentage}
            >
              {percentage}%
            </progress>
          </div>
        </div>
        <form className={styles.addTask} onSubmit={saveTask}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="add a new task"
            autoComplete="off"
            required
          />
          <button type="submit">+</button>
        </form>
        <div className={styles.taskList}>
          {data.map((el) => (
            <Task
              key={el.id}
              id={el.id}
              name={el.name}
              status={el.status}
              updatePercentage={updatePercentage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
