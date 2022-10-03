import React from "react";
import "../styles/tasks.css";

const Task = ({ taskProps }) => {
  return (
    <article className="task-article">
      <h1>{taskProps.title}</h1>
      <p>
        {taskProps.fecha}, {taskProps.hora} hs.
      </p>
      <p>{taskProps.user}</p>
      <span className="task-progress">{taskProps.progress}</span>
      <span className="task-order">{taskProps.order}</span>
      <p>{taskProps.content}</p>
      <button>X</button>
    </article>
  );
};

export default Task;
