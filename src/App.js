import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/registerSystem/Register";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Home taskList={taskList} setTaskList={setTaskList} />}
          />
          <Route
            path="/inicio"
            element={<Home taskList={taskList} setTaskList={setTaskList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
