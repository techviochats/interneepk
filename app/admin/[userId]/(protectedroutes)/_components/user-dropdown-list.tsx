"use client";
import React from "react";

import { FaEllipsisH, Lock, ShieldAlert, Trash2 } from "@/constant";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface UserDropdownListProps {
  isAdmin: boolean;
  id: string;
}
const UserDropdownList = ({ isAdmin, id }: UserDropdownListProps) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const handleAdmin = () => {};
  return (
    <DropdownMenu open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-internee-theme hover:bg-internee-theme/80"
          size={"icon"}
        >
          <FaEllipsisH />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-36 pb-3 z-[10]"
        align="center"
        side="bottom"
      >
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!isAdmin && (
          <DropdownMenuItem className="p-0" onClick={handleAdmin}>
            <div className="w-full py-3 transition-all rounded-md px-2 cursor-pointer hover:bg-internee-theme hover:text-internee-absoluteTheme flex">
              <ShieldAlert className="w-4 h-4 mr-1 text-destructive mb-px" />
              Make Admin
            </div>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="p-0">
          <div className="w-full py-3 transition-all rounded-md px-2 cursor-pointer hover:bg-internee-theme hover:text-internee-absoluteTheme flex">
            <Lock className="w-4 h-4 mr-1 text-destructive mb-px" />
            Block
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <div className="w-full py-3 transition-all rounded-md px-2 cursor-pointer hover:bg-internee-theme hover:text-internee-absoluteTheme flex">
            <Trash2 className="w-4 h-4 mr-1 text-destructive mb-px" />
            Delete
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownList;
