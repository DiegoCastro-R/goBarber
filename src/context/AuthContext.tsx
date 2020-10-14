import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredntials {
  email: string;
  password: string;
}
interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredntials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    console.log(response);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Diego', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
