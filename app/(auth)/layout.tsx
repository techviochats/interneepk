import React from "react";
import { ChildrenTypes } from "@/@types";
import AuthPageProvider from "@/provider/auth-page-provider";

const AuthLayout: React.FC<ChildrenTypes> = ({ children }: ChildrenTypes) => {
  return (
    <div className="w-full h-screen flex justify-center flex-col bg-neutral-500/20">
      <main className="w-full">
        <AuthPageProvider>
        {children}
        </AuthPageProvider>
        </main>
    </div>
  );
};

export default AuthLayout;
