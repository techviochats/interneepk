import React from "react";

import ProtectedPageProvider from "@/provider/protected-page-provider";
import { ChildrenTypes } from "@/@types";
import SiderbarAdmin from "@/components/admin/siderbar";


interface ExtendChildrenProps extends ChildrenTypes {
  params: {
    userId: string;
  };
}
const ProtectedLayout = ({ children, params }: ExtendChildrenProps) => {
  return (
    <div className="bg-white h-full flex">
      <ProtectedPageProvider userId={params?.userId}>
        <SiderbarAdmin userId={params.userId} />
        <main className="sm:pl-72 w-full flex-grow">{children}</main>
      </ProtectedPageProvider>
    </div>
  );
};

export default ProtectedLayout;
