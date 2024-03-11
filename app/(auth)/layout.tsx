import React from "react";
import { ChildrenTypes } from "@/@types";

const AuthLayout: React.FC<ChildrenTypes> = ({ children }: ChildrenTypes) => {
  return (
    <div className="w-full h-screen flex justify-center flex-col bg-neutral-500/20">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default AuthLayout;
