import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavMenu from "../Components/NavMenu";

export default function AppLayout(props) {
  return (
    <div id="layout-wrapper">
      <Header />
      <NavMenu />
      <div className="vertical-overlay"></div>
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  );
};
