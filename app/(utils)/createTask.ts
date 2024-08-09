"use server";

import getUser from "./getUser";

interface NewTask {
  title: String;
  description: String;
  priority: Number;
  isCompleted: Boolean;
}
const createTask = async (user?: any, task?: NewTask) => {
  const userData = await getUser(user.email);
  let data: any;
  if (!userData)
    data = {
      email: user.email,
      tasks: {
        create: task,
      },
    };
  else {
    data = {
      ...task,
      userId: userData.id,
    };
  }
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default createTask;
