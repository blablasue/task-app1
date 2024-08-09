import React from "react";
import TaskForm from "../(components)/TaskForm";

const page = () => {
  return (
    <main>
      <TaskForm
        id={""}
        title={""}
        description={""}
        priority={0}
        isCompleted={false}
        userId={""}
      />
    </main>
  );
};

export default page;
