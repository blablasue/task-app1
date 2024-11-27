import TaskForm from "@/app/(components)/TaskForm";
import getTask from "@/app/(utils)/getTask";
import { error } from "console";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const task = await getTask(params.id);
  if (!task) throw error;
  return (
    <main>
      <TaskForm
        id={task.id}
        title={task.title}
        description={task.description}
        priority={task.priority}
        isCompleted={task.isCompleted}
        userId={task.userId}
      />
    </main>
  );
};

export default page;
