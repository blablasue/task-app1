"use server";

import { PrismaClient } from "@prisma/client";

const getUser = async (userEmail: string) => {
  const db = new PrismaClient();
  const response = await db.user.findFirst({
    where: {
      email: userEmail,
    },
  });
  if (!response) return null;
  return response;
};

export default getUser;
