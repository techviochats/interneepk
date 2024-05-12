"use client";
import React from "react";

import { DialogInternshipModal } from "@/components/ui/internship-modal";
import { DialogDeleteInternshipModal } from "@/components/ui/delete-internship-modal";
const ModalProvider = () => {
  const [client, setClient] = React.useState<boolean>(false);
  React.useEffect(() => {
    setClient(true);
  }, []);
  if (!client) return;
  return (
    <React.Fragment>
      <DialogInternshipModal />
      <DialogDeleteInternshipModal />
    </React.Fragment>
  );
};

export default ModalProvider;
