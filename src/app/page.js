"use client";

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
      <div className="grid w-full max-w-[25rem] gap-6 p-6">
        <Progress tasks={data} />
        <CreateForm mutate={mutate} />
        <div className="grid gap-4">
          {data.map((el) => (
            <Task key={el.id} {...el} mutate={mutate} />
          ))}
        </div>
      </div>
    </main>
  );
}
