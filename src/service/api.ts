import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8008/api",
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: "http://ec2-54-224-109-246.compute-1.amazonaws.com:8008/api",
});

export default api;
