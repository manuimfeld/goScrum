import React from "react";
import { Form, Formik } from "formik";

const CreateTask = ({ taskList, setTaskList }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      user: "Manuel",
      title: e.target[0].value,
      progress: e.target[1].value,
      order: e.target[2].value,
      content: e.target[3].value,
      fecha: "6/2/2021",
      hora: "1:22:59",
    };

    let newList = [...taskList];
    newList.push(taskObj);
    setTaskList(newList);
  };

  return (
    <section className="createTask-section">
      <Formik>
        <Form className="createTask" onSubmit={(e) => formSubmit(e)}>
          <h1>Crear tarea</h1>
          <ul>
            <li>
              <label htmlFor="">
                <input
                  type="text"
                  name="title-task"
                  id="title-task"
                  placeholder="Título"
                />
              </label>
            </li>
            <li>
              <select name="select-status" id="select-status">
                <option disabled selected>
                  Selecciona un estado
                </option>
                <option value="Completa">Completa</option>
                <option value="Incompleta">Incompleta</option>
              </select>
            </li>
            <li>
              <select name="select-priority" id="select-priority">
                <option disabled selected>
                  Selecciona una prioridad
                </option>
                <option value="Baja">Baja</option>
                <option value="Alta">Alta</option>
              </select>
            </li>
            <li>
              <label htmlFor="text-task">
                <textarea
                  name="text-task"
                  id="text-task"
                  placeholder="Descripción"
                ></textarea>
              </label>
            </li>
            <li>
              <button type="submit">Crear</button>
            </li>
          </ul>
        </Form>
      </Formik>
    </section>
  );
};

export default CreateTask;
