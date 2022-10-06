import axios from "axios";

const formSubmit = (e, values) => {
  e.preventDefault();
  const endpoint = "https://goscrum-api.alkemy.org/auth/register";
  axios
    .post(endpoint, {
      user: {
        userName: values.userName,
        password: values.password,
        email: values.email,
        teamID: values.teamID,
        role: values.role,
        continent: values.continent,
        region: values.region,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default formSubmit;
