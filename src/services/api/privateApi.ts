import axios from "axios";

const privateApi = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Envia cookies (tokens HttpOnly)
});

export default privateApi;
