import React from "react";
import { Form, Field } from "formik";

const FormRegister = ({ errors, touched, values, formSubmit }) => {
  return (
    <>
      <h1>Registro</h1>
      <Form onSubmit={(e) => formSubmit(e, values)}>
        <ul>
          <li>
            <label htmlFor="userName">Nombre de usuario</label>
            <Field name="userName" placeholder="Francisco" />
            {errors.userName && touched.userName ? (
              <div className="msg-error-form">{errors.userName}</div>
            ) : null}
          </li>
          <li>
            <label htmlFor="password">Contraseña</label>
            <Field name="password" />
            {errors.password && touched.password ? (
              <div className="msg-error-form">{errors.password}</div>
            ) : null}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="falvarez@hotmail.com" />
            {errors.email && touched.email ? (
              <div className="msg-error-form">{errors.email}</div>
            ) : null}
          </li>
          <li>
            <label className="switch">
              <Field
                name="switch"
                type="checkbox"
                id="switch"
                value={values.switch}
              />
              <span className="slider round"></span>
            </label>
            <label htmlFor="switch" id="checkbox-p">
              Perteneces a un equipo ya creado
            </label>
          </li>
          {values.switch && (
            <li>
              <label htmlFor="teamID">
                Por favor, introduce el identificador de equipo
              </label>
              <Field name="teamID" />
              {errors.teamID && touched.teamID ? (
                <div className="msg-error-form">{errors.teamID}</div>
              ) : null}
            </li>
          )}

          <li>
            <label htmlFor="role">Rol</label>
            <Field name="role" as="select" id="role">
              <option value="Team Member" default>
                Team Member
              </option>
              <option value="Team Leader">Team Leader</option>
            </Field>
          </li>
          <li>
            <label htmlFor="continent">Continente</label>
            <Field name="continent" as="select" id="continent">
              <option value="America" default>
                America
              </option>
              <option value="Europa">Europa</option>
              <option value="Otro">Otro</option>
            </Field>
          </li>
          <li>
            <label htmlFor="select-region">Región</label>
            <Field name="region" as="select" id="region">
              <option value="Latam" default>
                Latam
              </option>
              <option value="Brazil">Brazil</option>
              <option value="Otro">Otro</option>
            </Field>
          </li>
          <li>
            <button type="submit">Enviar</button>
          </li>
        </ul>
      </Form>
    </>
  );
};

export default FormRegister;
