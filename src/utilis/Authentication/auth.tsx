import React, { createContext, useContext, useState } from "react";

// Create an authentication context
const AuthContext = createContext<{
  user: any;
  Login: (user: any) => void;
  Logout: () => void;
} | null>(null);

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState(null);

  const Login = (user: any) => {
    setUser(user);
  };

  const Logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
