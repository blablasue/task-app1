"use server";

import { PrismaClient, Task } from "@prisma/client";
import getUser from "./getUser";

const createTask = async (task: Task, user?: any) => {
  const db = new PrismaClient();
  const userData = await getUser(user.email);
  // console.log(task);
  let newTask: any;
  if (!userData) {
    newTask = await db.user.create({
      data: {
        email: user.email,
        tasks: {
          create: task,
        },
      },
    });
  } else {
    newTask = await db.task.create({
      data: {
        ...task,
        userId: userData.id,
      },
    });
  }
  //return NextResponse.json(newTask, { status: 201 });
  return true;
};

export default createTask;
