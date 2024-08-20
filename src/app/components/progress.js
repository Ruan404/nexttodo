import styles from "@/app/todo.module.css";

export default function Progress({ tasks }) {
  const len = tasks.length;
  var done = 0;

  tasks.map((el) => {
    if (el.status === true) {
      done++;
    }
  });

  var progress = Math.round((done * 100) / len) || 0;

  return (
    <div className={styles.progress}>
      <h3>Progress</h3>
      <div className={styles.progressInfo}>
        <p>{progress}% of tasks done</p>
        <progress className={styles.progressBar} max="100" value={progress}>
          {progress}%
        </progress>
      </div>
    </div>
  );
}
