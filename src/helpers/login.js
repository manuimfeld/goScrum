import axios from "axios";

const login = (email, pass) => {
  const endpoint = "http://localhost:3000/";
  axios
    .post(endpoint, email, pass)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default login;
