import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow p-2 bg-gray-50">
        <Outlet />
      </main>
      <footer className="bg-gray-200 text-center text-sm p-4">
        © 2025 ToDo App. All rights reserved.
      </footer>
    </div>
  );
};
