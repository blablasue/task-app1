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
    <main className="max-w-screen-xl mx-auto">
      {/* <div>Current User: {user.emailAddresses[0].emailAddress}</div> */}
      <div className="flex flex-wrap">
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
      <div className="ml-10 mt-5">
        <Link className="" href={"/new"}>
          <svg
            className="w-12 h-12 text-green-500 dark:text-white hover:text-green-700 transition-colors"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
