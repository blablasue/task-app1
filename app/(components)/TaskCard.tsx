"use client";
import { Task } from "@prisma/client";
import Link from "next/link";
import React from "react";
import deleteTask from "../(utils)/deleteTask";
import { useRouter } from "next/navigation";

const TaskCard = (props: Task) => {
  const router = useRouter();
  return (
    <div className="bg-slate-200 rounded-lg px-3 py-2 shadow-md flex flex-col justify-between min-w-60 max-w-60 w-full mt-5 mx-4">
      <div>
        <h2 className="font-bold text-lg border-b-2 border-slate-500">
          {props.title}
        </h2>
        <div className="h-20 py-2 border-b-2 border-slate-500">
          <p className="w-auto border-slate-500 whitespace-normal break-words text-wrap h-16 overflow-auto">
            {props.description}
          </p>
        </div>
        <p className="text-sm">Priority: {props.priority}/5</p>
        <p className="text-sm">
          Status: {props.isCompleted ? "Completed" : "Work in Progress"}
        </p>
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
          <svg
            className="fill-slate-600 hover:fill-red-700"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
          >
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
        <Link href={`/edit/${props.id}`}>
          <svg
            className="fill-slate-600 hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#5f6368"
          >
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
