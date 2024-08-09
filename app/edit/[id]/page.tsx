import TaskForm from "@/app/(components)/TaskForm";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/tasks/${params.id}`);
  const task = await res.json();
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
