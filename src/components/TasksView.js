import React from "react";
import Tasks from "./Tasks";
import FiltersTask from "./FiltersTask";

const TasksView = ({ taskList }) => {
  return (
    <section className="tasks-section">
      <FiltersTask />
      <Tasks taskList={taskList} />
    </section>
  );
};

export default TasksView;
