import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="outerContainer">
      <Navbar />
      <main className="widthWrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
