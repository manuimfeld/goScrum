import React from "react";
import { Form, Field } from "formik";

const FormRegister = ({ errors, touched, values, formSubmit }) => {
  return (
    <>
      <h1>Registro</h1>
      <Form onSubmit={(e) => formSubmit(e)}>
        <ul>
          <li>
            <label htmlFor="firstName">Nombre de usuario</label>
            <Field name="firstName" />
            {errors.firstname && touched.firstname ? (
              <div className="msg-error-form">{errors.firstname}</div>
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
            <Field name="email" />
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
              <label htmlFor="id_group">
                Por favor, introduce el identificador de equipo
              </label>
              <Field name="id_group" />
              {errors.id_group && touched.id_group ? (
                <div className="msg-error-form">{errors.id_group}</div>
              ) : null}
            </li>
          )}

          <li>
            <label htmlFor="rol">Rol</label>
            <Field name="rol" as="select" id="rol">
              <option value="Team Member" defaultValue>
                Team Member
              </option>
              <option value="Teach Leader">Teach Leader</option>
            </Field>
          </li>
          <li>
            <label htmlFor="continent">Continente</label>
            <Field name="continent" as="select" id="continent">
              <option value="America" defaultValue>
                America
              </option>
              <option value="Europa">Europa</option>
            </Field>
          </li>
          <li>
            <label htmlFor="select-region">Región</label>
            <Field name="region" as="select" id="region">
              <option value="America del Norte" defaultValue>
                America del Norte
              </option>
              <option value="America del Sur">America del Sur</option>
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
