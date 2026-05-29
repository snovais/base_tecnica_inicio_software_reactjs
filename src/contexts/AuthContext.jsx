import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simulação de login didática
  const login = (email, password) => {
    if (email && password) {
      setUser({ email }); // Define que o usuário está logado
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null); // Limpa o usuário
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}