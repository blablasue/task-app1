"use server";

import { PrismaClient, Task } from "@prisma/client";
import getUser from "./getUser";

const editTask = async (user: any, task: Task) => {
  const db = new PrismaClient();
  const userData = await getUser(user.email);
  if (!userData) return null;
  const newTask = await db.task.update({
    where: { id: task.id },
    data: {
      title: task.title,
      description: task.description,
      priority: task.priority,
      isCompleted: task.isCompleted,
      userId: task.userId,
    },
  });
  return newTask;
};

export default editTask;
