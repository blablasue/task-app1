"use client";
import { Task } from "@prisma/client";
import Link from "next/link";
import React from "react";
import deleteTask from "../(utils)/deleteTask";
import { useRouter } from "next/navigation";

const TaskCard = (props: Task) => {
  const router = useRouter();
  return (
    <div className="bg-slate-200 w-1/6 rounded-lg px-3 py-2 shadow-md flex flex-col justify-between">
      <div>
        <h2 className="border-b-2 border-slate-500">{props.title}</h2>
        <div className="">
          <p className="w-auto border-slate-500 whitespace-normal break-words">
            {props.description}
          </p>
        </div>
        <p>{props.priority}</p>
        <p>{props.isCompleted ? "Completed" : "Work in Progress"}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="text-red-500"
          onClick={() => {
            const response = deleteTask(props);
            router.refresh();
            // response prcessing here later
          }}
        >
          Delete
        </button>
        <Link href={`/edit/${props.id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default TaskCard;
