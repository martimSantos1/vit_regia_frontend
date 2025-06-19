import axios from "axios";

const privateApi = axios.create({
  baseURL: "http://192.168.1.132:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor de resposta
privateApi.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axios.post(
          "http://192.168.1.132:5000/api/users/refresh",
          {},
          { withCredentials: true }
        );

        return privateApi(originalRequest);
      } catch (refreshError) {
        console.error("Erro ao tentar renovar sessão:", refreshError);
        // Opcional: logout automático se refresh falhar
      }
    }

    return Promise.reject(error);
  }
);

export default privateApi;