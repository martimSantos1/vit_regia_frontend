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

export async function signup(name: string, email: string, password: string) {
  try {
    const res = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    return await res.json();
  } catch (error) {
    console.error("Erro ao comunicar com o servidor:", error);
    return { error: "Erro ao comunicar com o servidor" };
  }
}