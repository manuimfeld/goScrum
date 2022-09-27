import React, { useEffect, useState } from "react";
import Task from "./Task";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList([
      {
        title: "Manu",
        fecha: "6/2/2021",
        hora: "1:22:59",
        user: "User1",
        progress: "en progreso",
        order: "high",
        content: "Lorem ipsun loren loren ipsun",
      },
    ]);
  }, []);

  return (
    <>
      <div className="tasks-container">
        {taskList.length <= 0 ? (
          <h1>No hay tareas pendientes</h1>
        ) : (
          taskList.map((task) => {
            return <Task task={task} key={task.title} />;
          })
        )}
      </div>
    </>
  );
};

export default Tasks;
