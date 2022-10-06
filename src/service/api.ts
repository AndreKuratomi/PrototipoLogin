import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "http://dev-bi-abkura.s3-website-us-east-1.amazonaws.com:8000/api",
});

export default api;
