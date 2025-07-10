import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LogInIcon } from "lucide-react";
import { useLogin } from "../hook/useLogin";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLogin, logOut } = useLogin();
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg">
      <div className="max-full mx-auto px-6 py-4 flex items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:text-blue-200 transition"
        >
          GroviaTasks
        </Link>

        <div className="ml-auto hidden md:flex items-center space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-blue-200 transition">
            My Tasks
          </Link>
          {isLogin ? (
            <button
              onClick={() => {
                logOut(), navigate("/login");
              }}
              className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <LogInIcon size={18} />
              Login
            </button>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-base font-medium bg-blue-600">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            to="/todos"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-200 transition"
          >
            My Tasks
          </Link>
          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-200 transition"
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
};
