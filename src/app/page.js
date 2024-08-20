import styles from "@/app/todo.module.css";
import Task from "@/app/components/task";
import Progress from "./components/progress";
import CreateForm from "./components/createForm";
import { getTodos } from "./actions";

export default async function Todo() {
  const data = await getTodos();

  return (
    <main>
      <div className={styles.container}>
        <Progress tasks={data} />
        <CreateForm />
        <div className={styles.taskList}>
          {data.map((el) => (
            <Task key={el.id} {...el} />
          ))}
        </div>
      </div>
    </main>
  );
}
