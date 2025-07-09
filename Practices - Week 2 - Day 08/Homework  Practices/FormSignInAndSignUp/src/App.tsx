import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 gap-10">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default App;
