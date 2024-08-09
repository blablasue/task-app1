"use client";
import { Task } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TaskCard = (props: Task) => {
  const router = useRouter();
  const deleteTask = async function () {
    const response = await fetch(
      `http://localhost:3000/api/tasks/${props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      router.refresh();
    }
  };
  const editTask = async function () {
    console.log("edit at ", props.id);
  };
  return (
    <div className="bg-slate-200 w-1/6 rounded-lg px-3 py-2 shadow-md">
      <h2 className="border-b-2 border-slate-500">{props.title}</h2>
      <div className="">
        <p className="w-auto border-slate-500 whitespace-normal break-words">
          {props.description}
        </p>
      </div>
      <p>{props.priority}</p>
      <p>{props.isCompleted ? "Completed" : "Work in Progress"}</p>
      <div className="flex justify-between">
        <button className="text-red-500" onClick={deleteTask}>
          Delete
        </button>
        <Link href={`/edit/${props.id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default TaskCard;
