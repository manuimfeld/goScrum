import React from "react";
import { Form, Field } from "formik";

const FormLogin = ({ errors, touched, values, formSubmit }) => {
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
            <button type="submit">Enviar</button>
          </li>
        </ul>
      </Form>
    </>
  );
};

export default FormLogin;
