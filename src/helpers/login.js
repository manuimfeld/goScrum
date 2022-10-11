import axios from "axios";

const formSubmit = (e, values) => {
  e.preventDefault();
  const endpoint = "https://goscrum-api.alkemy.org/auth/login";
  axios
    .post(endpoint, {
      userName: values.userName,
      password: values.password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default formSubmit;
