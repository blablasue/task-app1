"use server";

import { PrismaClient, Task } from "@prisma/client";
import { NextResponse } from "next/server";

const deleteTask = async (props: Task) => {
  const db = new PrismaClient();
  const taskId = props.id;
  let response: Task;
  try {
    response = await db.task.delete({
      where: {
        id: taskId,
      },
    });
  } catch (error) {
    //return NextResponse.json(error, { status: 500 });
    return false;
  }
  //return NextResponse.json(response, { status: 201 });
  return true;
};

export default deleteTask;
