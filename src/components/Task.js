import React from "react";
import "../styles/tasks.css";

const Task = ({ task }) => {
  return (
    <article className="task-article">
      <h1>{task.title}</h1>
      <p>
        {task.fecha}, {task.hora} hs.
      </p>
      <p>{task.user}</p>
      <span className="task-progress">{task.progress}</span>
      <span className="task-order">{task.order}</span>
      <p>{task.content}</p>
      <button>X</button>
    </article>
  );
};

export default Task;
