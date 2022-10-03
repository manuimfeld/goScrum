import React from "react";
import Task from "./Task";

const Tasks = ({ taskList }) => {
  return (
    <>
      <div className="tasks-container">
        {taskList.map((taskProps) => {
          return <Task taskProps={taskProps} key={taskProps.title} />;
        })}
      </div>
    </>
  );
};

export default Tasks;
