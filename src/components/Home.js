import React from "react";
import CreateTask from "./CreateTask";
import "../styles/home.css";
import TasksView from "./TasksView";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <CreateTask />
        <TasksView />
      </div>
    </>
  );
};

export default Home;
