import publicApi from "./api/publicApi";

export async function login(email: string, password: string) {
  try {
    const response = await publicApi.post("/users/login", { email, password });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao fazer login:", error);
    return {
      error: error.response?.data?.error || "Erro ao comunicar com o servidor",
    };
  }
}

export async function signup(name: string, email: string, password: string) {
  try {
    const response = await publicApi.post("/users/signup", { name, email, password });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao fazer registo:", error);
    return {
      error: error.response?.data?.error || "Erro ao comunicar com o servidor",
    };
  }
}
