import axios from "axios";

const formSubmit = (e) => {
  e.preventDefault();
  const endpoint = "https://localhost:7000";

  axios.get(endpoint);
};

export default formSubmit;
