"use server";

import { PrismaClient } from "@prisma/client";
import getUser from "./getUser";

const getTasks = async (userEmail: string) => {
  const db = new PrismaClient();
  const user = await getUser(userEmail);
  if (!user) return null;
  const userId = user.id;
  const tasks = await db.task.findMany({
    where: {
      user: {
        id: userId,
      },
    },
  });
  return tasks;
};

export default getTasks;
