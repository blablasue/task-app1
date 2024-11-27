"use server";

import { PrismaClient, Task } from "@prisma/client";
import getUser from "./getUser";

const editTask = async (user: any, id: string, task: Task) => {
  const db = new PrismaClient();
  const userData = await getUser(user.email);
  if (!userData) return null;
  const data = {
    ...task,
    userId: userData.id,
  };
  const newTask = await db.task.update({
    where: { id: id },
    data: data,
  });
  console.log(user, id, task);
  return newTask;
};

export default editTask;
