import { createContext, useState, type ReactNode } from "react";
import { ToastContainer } from "react-toastify";

type LoginContextType = {
  isLogin: boolean;
  login: (token: string, email: string) => void;
  logOut: () => void;
};

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(() => {
    return !!localStorage.getItem("accessToken");
  });

  const login = (token: string, email: string) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("email", email);
    setIsLogin(true);
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    setIsLogin(false);
  };

  return (
    <LoginContext.Provider value={{ isLogin, login, logOut }}>
      <ToastContainer />
      {children}
    </LoginContext.Provider>
  );
};
