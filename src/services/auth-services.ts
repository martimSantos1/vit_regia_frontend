// services/auth-service.ts
export async function login(email: string, password: string) {
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      return await res.json();
    } catch (error) {
      console.error("Erro ao comunicar com o servidor:", error);
      return { error: "Erro ao comunicar com o servidor" };
    }
  }
  