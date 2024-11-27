"use server";

import { PrismaClient, Task } from "@prisma/client";

const getTask = async (taskId: string) => {
  const db = new PrismaClient();
  const task = await db.task.findFirst({
    where: {
      id: taskId,
    },
  });
  //   console.log(task);
  return task;
};

export default getTask;
