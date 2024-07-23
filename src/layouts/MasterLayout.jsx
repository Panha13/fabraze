import React from "react";
import Announment from "../components/Announment";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function MasterLayout() {
  return (
    <>
      <Announment />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MasterLayout;
