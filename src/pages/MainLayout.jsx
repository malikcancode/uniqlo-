import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header textColor={isHome ? "white" : "black"} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
