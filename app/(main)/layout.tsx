import { ChildrenTypes } from "@/@types/children-types";
import Footer from "@/components/footer";
import Navbar from "@/components/header/navbar";
import React from "react";

const MainLayout = ({ children }: ChildrenTypes) => {
  return (
    <div className="sm:h-full bg-white max-w-7xl mx-auto ">
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
