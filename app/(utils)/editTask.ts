"use server";

import getUser from "./getUser";

interface NewTask {
  title: string;
  description: string;
  priority: Number;
  isCompleted: Boolean;
}
const createTask = async (user: any, id: string, task: NewTask) => {
  const userData = await getUser(user.email);
  if (!userData) return null;
  const data = {
    ...task,
    userId: userData.id,
  };
  const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return;
};

export default createTask;
