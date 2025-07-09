import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <main style={{
        marginTop : "100px"
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;