import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import FormLogin from "./FormLogin";
import formSubmit from "../../helpers/login";

const schema = Yup.object().shape({
  userName: Yup.string(),
  email: Yup.string().email("invalid").required("Ingrese su email"),
  password: Yup.string().min(6, "mínimo 6 caracteres"),
});

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
      >
        {({ errors, touched, values }) => (
          <FormLogin
            errors={errors}
            touched={touched}
            values={values}
            formSubmit={formSubmit}
          />
        )}
      </Formik>
      <Link to="/register">
        <button>Registrarme</button>
      </Link>
    </div>
  );
};

export default Login;
