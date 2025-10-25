import React from "react";
import Header from "./headers/Index";
import Footer from "./footer/Index";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
