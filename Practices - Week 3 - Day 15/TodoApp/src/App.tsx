import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TaskProvider } from "./contexts/TaskContext";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/Home/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";

function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </TaskProvider>
  );
}

export default App;
