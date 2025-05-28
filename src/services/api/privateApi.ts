import axios from "axios";

const privateApi = axios.create({
  baseURL: "http://192.168.0.15:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Envia cookies (tokens HttpOnly)
});

export default privateApi;
