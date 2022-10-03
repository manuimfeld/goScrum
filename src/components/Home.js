import React from "react";
import CreateTask from "./CreateTask";
import "../styles/home.css";
import TasksView from "./TasksView";
import Header from "./Header";

const Home = ({ taskList, setTaskList }) => {
  return (
    <>
      <Header />
      <div className="layout">
        <CreateTask taskList={taskList} setTaskList={setTaskList} />
        <TasksView taskList={taskList} />
      </div>
    </>
  );
};

export default Home;
