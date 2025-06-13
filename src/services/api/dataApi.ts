import axios from "axios";

const dataApi = axios.create({
  baseURL: "http://192.168.0.15:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // sem cookies (apenas chamadas públicas)
});

export default dataApi;
