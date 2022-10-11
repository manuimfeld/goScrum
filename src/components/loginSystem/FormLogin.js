import React from "react";
import { Form, Field } from "formik";

const FormLogin = ({ errors, touched, values, formSubmit }) => {
  return (
    <>
      <h1>Iniciar sesión</h1>
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
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="Francisco" />
            {errors.email && touched.email ? (
              <div className="msg-error-form">{errors.email}</div>
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
            <button type="submit">Enviar</button>
          </li>
        </ul>
      </Form>
    </>
  );
};

export default FormLogin;
