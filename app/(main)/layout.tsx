import { ChildrenTypes } from "@/@types/children-types";
import Navbar from "@/components/header/navbar";
import React from "react";

const MainLayout = ({ children }: ChildrenTypes) => {
  return (
    <div className="h-full bg-white max-w-7xl mx-auto">
      <Navbar />  
      <main className="h-full pt-28">{children}</main>
    </div>
  );
};

export default MainLayout;
