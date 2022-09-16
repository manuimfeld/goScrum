import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string().email("invalid").required("Ingrese su email"),
  password: Yup.string().min(6, "mínimo 6 caracteres"),
});

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email">Nombre de usuario</label>
            <Field name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
      <Link to="/register">
        <button>Registrarme</button>
      </Link>
    </div>
  );
};

export default Login;
