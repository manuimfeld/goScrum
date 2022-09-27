import React from "react";
import Tasks from "./Tasks";
import FiltersTask from "./FiltersTask";

const TasksView = () => {
  return (
    <section className="tasks-section">
      <FiltersTask />
      <Tasks />
    </section>
  );
};

export default TasksView;
