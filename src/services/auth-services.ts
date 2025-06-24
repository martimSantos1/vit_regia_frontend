import privateApi from "./api/privateApi";

export async function login(email: string, password: string) {
  try {
    const response = await privateApi.post("/users/login", { email, password });
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
    const response = await privateApi.post("/users/signup", { name, email, password });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao fazer registo:", error);
    return {
      error: error.response?.data?.error || "Erro ao comunicar com o servidor",
    };
  }
}

export async function updateUsername(username: string) {
  try {
    const response = await privateApi.put("/users/updateUserName", { username });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao atualizar username:", error);
    throw new Error(error.response?.data?.error || "Erro ao comunicar com o servidor");
  }
}
