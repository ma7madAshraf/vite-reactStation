import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  return (
    <>
      <Navbar />
      <div className="my-align mt-14 mb-6">
        <Outlet />
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default HomeLayout;
