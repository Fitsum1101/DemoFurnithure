import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Ui/NavBar";
import Footer from "../Footer";
const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />;
      <Footer />
    </>
  );
};

export default Root;
