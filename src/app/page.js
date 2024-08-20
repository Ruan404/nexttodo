"use client";

import styles from "@/app/todo.module.css";
import Task from "@/app/components/task";
import Progress from "./components/progress";
import CreateForm from "./components/createForm";
import { getTodos } from "./actions";
import useSWR from "swr";

export default function Todo() {
  const { data, isLoading, mutate } = useSWR("todo", getTodos, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <div className={styles.container}>
        <Progress tasks={data} />
        <CreateForm mutate={mutate} />
        <div className={styles.taskList}>
          {data.map((el) => (
            <Task key={el.id} {...el} mutate={mutate} />
          ))}
        </div>
      </div>
    </main>
  );
}
