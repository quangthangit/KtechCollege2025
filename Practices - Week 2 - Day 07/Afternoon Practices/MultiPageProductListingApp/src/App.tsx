import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { CategoryPage } from "./pages/Category/CategoryPage";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { CartProvider } from "./conponents/context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="category" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
