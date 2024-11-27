import React from "react";
import { currentUser, SignOutButton } from "@clerk/nextjs";
import getTasks from "./(utils)/getTasks";
import Link from "next/link";
import TaskCard from "./(components)/TaskCard";
interface Task {
  id: string;
  title: string;
  description: string;
  priority: number;
  isCompleted: boolean;
  userId: string;
}
export default async function Home() {
  const user = await currentUser();
  if (!user) return <div>Not Signed In</div>;
  const res = await getTasks(user.emailAddresses[0].emailAddress);
  if (!res)
    return (
      <div>
        Seems like its your first time here!
        <Link className="bg-slate-300 p-1 rounded-lg shadow-sm" href={"/new"}>
          Create First Task
        </Link>
      </div>
    );
  const tasks = await res;
  return (
    <main>
      {/* <div>Current User: {user.emailAddresses[0].emailAddress}</div> */}
      <div className="flex space-x-5">
        {tasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            isCompleted={task.isCompleted}
            userId={task.userId}
          />
        ))}
      </div>
      <div className="mt-5">
        <Link className="bg-slate-300 p-1 rounded-lg shadow-sm" href={"/new"}>
          Create new Task
        </Link>
      </div>
    </main>
  );
}
