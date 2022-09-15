import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "http://ec2-23-23-27-9.compute-1.amazonaws.com:8000/api",
});

export default api;
