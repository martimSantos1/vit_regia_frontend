import axios from "axios";

const publicApi = axios.create({
  baseURL: "http://192.168.226.44:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // NÃO envia cookies
});

export default publicApi;
