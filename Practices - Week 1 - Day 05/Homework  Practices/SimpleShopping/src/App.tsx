import { useState } from "react";
import "./App.css";
import { CartProvider } from "./CartContext";
import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {
  const [isActive,setIsActive] = useState(false)
  return (
    <div>
      <Header click={() => setIsActive(!isActive)} />
      <CartProvider>
        <ProductGrid active={isActive} />
      </CartProvider>
    </div>
  );
}

export default App;
