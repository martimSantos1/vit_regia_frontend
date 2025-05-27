import { createContext, useContext, useEffect, useState } from "react";
import privateApi from "../services/api/privateApi";

// Interface que define a estrutura de um utilizador autenticado
interface User {
  id: number;
  name: string;
  email: string;
  roleId: number;
}

// Interface do contexto de autenticação, descrevendo o que será exposto aos componentes filhos
interface AuthContextType {
  user: User | null;                          // Estado do utilizador autenticado
  loading: boolean;                           // Estado de carregamento (usado enquanto verifica sessão ativa)
  setUser: (user: User | null) => void;       // Função para atualizar o estado do utilizador
  logout: () => Promise<void>;                // Função para terminar sessão
}

// Criação do contexto com valor inicial undefined para forçar uso dentro do provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente que fornece o contexto de autenticação a toda a aplicação
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Estado do utilizador atual
  const [loading, setLoading] = useState(true);        // Estado de carregamento ao montar o componente

  // Efeito que é executado ao montar o componente para verificar sessão ativa
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await privateApi.get("/users/me");
        setUser(res.data); // já vem em JSON
      } catch (err) {
        console.error("Erro ao verificar sessão:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser(); // Invoca a verificação da sessão
  }, []);

  // Função para terminar sessão do utilizador
  const logout = async () => {
    try {
      await privateApi.post("/users/logout");
      setUser(null);
    } catch (err) {
      console.error("Erro ao terminar sessão:", err);
    }
  };

  // Retorna o contexto com os valores e funções expostas
  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para aceder facilmente ao contexto de autenticação
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    // Garante que o hook só é usado dentro de <AuthProvider>
    throw new Error("useAuth tem de ser usado dentro de AuthProvider");
  }
  return context;
};
