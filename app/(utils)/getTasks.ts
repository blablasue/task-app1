"use server";

import getUser from "./getUser";

const getTasks = async (userEmail: string) => {
  const user = await getUser(userEmail);
  if (!user) return null;
  const userId = user.id;
  const tasks = await fetch(`http://localhost:3000/api/users?id=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  return tasks;
};

export default getTasks;
