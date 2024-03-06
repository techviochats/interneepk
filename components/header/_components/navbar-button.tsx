"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

import { useSidebarHook } from "@/hooks/use-modals";

const NavbarButton = () => {
  const { open, isOpen, close } = useSidebarHook();

  return (
    <Button
      className="z-[9999999]"
      onClick={() => {
        if (isOpen) {
          close();
        } else {
          open();
        }
      }}
      variant={"outline"}
    >
      <MenuIcon className="w-6 h-6 text-muted-foreground" />
    </Button>
  );
};

export default NavbarButton;
