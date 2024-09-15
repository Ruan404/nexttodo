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
    <div className="shadow-border flex w-full flex-col gap-6 rounded-2xl p-6">
      <h3 className="text-xl font-bold">Progress</h3>
      <div className="flex flex-col gap-2">
        <p>{progress}% of tasks done</p>
        <progress
          className="shadow-border color-[--primary-accent-color] h-8 w-full appearance-none rounded-2xl bg-transparent accent-[--primary-accent-color]"
          max="100"
          value={progress}
        >
          {progress}%
        </progress>
      </div>
    </div>
  );
}
