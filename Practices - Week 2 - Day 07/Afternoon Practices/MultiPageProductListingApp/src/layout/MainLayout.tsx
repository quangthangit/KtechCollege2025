import { Outlet } from "react-router-dom";
import { Header } from "../conponents/header/Header";
import { Footer } from "../conponents/footer/Footer";
import CartDropDown from "../conponents/CartDropdown/CartDropdown";
import { useState } from "react";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? <CartDropDown /> : null}
      <Header handle={() => setOpen(!open)} />
      <main style={{
        marginTop : "100px"
      }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;