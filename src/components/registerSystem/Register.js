import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormRegister from "./FormRegister";
import "../../styles/register.css";
import formSubmit from "../../helpers/register";

const Register = () => {
  /* FORM VALIDATORS */
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "El nombre de usuario debe contener al menos seis carácteres!")
      .max(18, "El nombre de usuario debe tener como máximo 18 carácteres")
      .matches(
        /^[aA-zZ\s]+$/,
        "El nombre de usuario solo puede contener letras"
      )
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe contener al menos seis carácteres!")
      .max(18, "La contreaseña debe tener como máximo 18 carácteres")
      .required("Este campo es obligatorio")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "La contraseña debe contener al menos una mayúscula y un número"
      ),
    email: Yup.string()
      .email("Email inválido")
      .required("Este campo es obligatorio"),
    teamID: Yup.string(),
    rol: Yup.string(),
    continent: Yup.string(),
    region: Yup.string(),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          userName: "Manuel",
          password: "",
          email: "pruebaemail@hotmail.com",
          teamID: "9cdbd108-f924-4383-947d-8f0cd6510da1",
          switch: false,
          role: "Team Member",
          continent: "America",
          region: "Latam",
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched, values }) => (
          <FormRegister
            errors={errors}
            touched={touched}
            values={values}
            formSubmit={formSubmit}
          />
        )}
      </Formik>
    </div>
  );
};

export default Register;
