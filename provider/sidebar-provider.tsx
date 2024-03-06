"use client";
import SideBar from "@/components/sidebar/side-bar";
import React from "react";

const SidebarProvider: React.FC = () => {
  const [isMounted, setMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
      <SideBar />
    </>
  );
};

export default SidebarProvider;
