import React from "react";
import Navbar from "../hooks/elements/Navbar";
import Footer from "../hooks/elements/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-default">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
