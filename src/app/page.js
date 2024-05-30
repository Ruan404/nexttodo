"use client";

import styles from "@/app/todo.module.css";
import Task from "@/app/components/task";
import { useEffect, useState } from "react";

export default function Todo() {
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [name, setName] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("./api/tasks", { cache: "no-store" });
      const tasks = await res.json();
      setData(tasks);
      if(tasks.length > 0){
        const tasksDone = tasks.filter((task) => task.status != false);
        setPercentage(Math.round((tasksDone.length / tasks.length) * 100))
      }
      else{
        setPercentage(0)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function saveTask(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("./api/tasks", {
        method: "POST",
        body: formData,
      });
      fetchData();
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
                fetchData={fetchData}
              />
            ))}
          </div>
        </div>
    </main>
  );
}
