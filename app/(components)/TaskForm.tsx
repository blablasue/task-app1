"use client";
import { Task } from "@prisma/client";
import React, { useState } from "react";
import createTask from "../(utils)/createTask";
import { useAuth, useUser } from "@clerk/nextjs";
import editTask from "../(utils)/editTask";
import { useRouter, usePathname } from "next/navigation";

const TaskForm = (props?: Task) => {
  const router = useRouter();
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const editMode = usePathname() == "/new" ? false : true;
  const { isLoaded, isSignedIn, user } = useUser();
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const author = {
      email: user?.primaryEmailAddress?.emailAddress,
    };
    const data = {
      title,
      priority,
      description,
      isCompleted,
    };
    createTask(author, data);
    router.push("/");
  };
  const handleEdit = async (event: React.SyntheticEvent) => {
    if (!props) return null;
    event.preventDefault();
    const author = {
      email: user?.primaryEmailAddress?.emailAddress,
    };
    const data = {
      title,
      priority,
      description,
      isCompleted,
    };
    editTask(author, props.id, data);
    router.push("/");
  };
  const [title, setTitle] = useState<string>(props ? props.title : "");
  const [description, setDescription] = useState<string>(
    props ? props.description : ""
  );
  const [priority, setPriority] = useState<number>(props ? props.priority : 0);
  const [isCompleted, SetIsCompleted] = useState<boolean>(
    props ? props.isCompleted : false
  );
  return (
    <div>
      <form onSubmit={editMode ? handleEdit : handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Your title"
          // defaultValue={props ? props.title : undefined}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          type="textarea"
          placeholder="Your description"
          // defaultValue={props ? props.description : undefined}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="priority">Priority:</label>
        <div>
          <label htmlFor="priority1">1</label>
          <input
            id="priority1"
            name="priority"
            type="radio"
            value={1}
            // defaultChecked={props ? props.priority == 1 : false}
            checked={priority == 1}
            onChange={(e) => setPriority(+e.target.value)}
          />
          <label htmlFor="priority2">2</label>
          <input
            id="priority2"
            name="priority"
            type="radio"
            value={2}
            // defaultChecked={props ? props.priority == 2 : false}
            checked={priority == 2}
            onChange={(e) => setPriority(+e.target.value)}
          />
          <label htmlFor="priority3">3</label>
          <input
            id="priority3"
            name="priority"
            type="radio"
            value={3}
            // defaultChecked={props ? props.priority == 3 : false}
            checked={priority == 3}
            onChange={(e) => setPriority(+e.target.value)}
          />
          <label htmlFor="priority4">4</label>
          <input
            id="priority4"
            name="priority"
            type="radio"
            value={4}
            // defaultChecked={props ? props.priority == 4 : false}
            checked={priority == 4}
            onChange={(e) => setPriority(+e.target.value)}
          />
          <label htmlFor="priority5">5</label>
          <input
            id="priority5"
            name="priority"
            type="radio"
            value={5}
            // defaultChecked={props ? props.priority == 5 : false}
            checked={priority == 5}
            onChange={(e) => setPriority(+e.target.value)}
          />
        </div>
        <label htmlFor="isCompleted">Is Completed?</label>
        <input
          id="isCompleted"
          name="isCompleted"
          type="checkbox"
          // defaultChecked={props ? props.isCompleted : false}
          checked={isCompleted}
          onChange={(e) => SetIsCompleted(!isCompleted)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
