import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoginProvider>
       <App />
    </LoginProvider>
  </BrowserRouter>
);
