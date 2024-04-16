"use client";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-current-user";
import { deepClone } from "@/lib/deep-clone";

import { LogOut, ProfileIcon, Settings, ShieldCheck } from "@/constant";
const NavAuthButtonDropdown = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [loadingLogout, setLoadingLogout] = React.useState<boolean>(false);
  const { logOut, userData, isAdmin } = useUser();

  const user = deepClone(userData);

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={() => (isOpen ? setOpen(false) : setOpen(true))}
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="p-0 rounded-full focus-visible:ring-0 focus-visible:bg-none focus-visible:ring-offset-0"
        >
          <ProfileIcon size={30} className="text-internee-theme" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={12}
        className="p-0 w-72 flex flex-col z-[9999] shadow-lg border-2"
      >
        <div className="flex flex-col px-3 pt-2">
          <p className="text-internee-theme font-semibold ">
            {user?.name || "Anonymous"}
          </p>
          <p className="text-muted-foreground text-sm -mt-1">{user?.email}</p>
        </div>
        <DropdownMenuSeparator className="w-full bg-muted-foreground/25" />
        {isAdmin && (
          <DropdownMenuItem className="p-0" onClick={() => setOpen(false)}>
            <Link
              href={`/admin/${user?.$id}`}
              className="flex gap-2 items-center  hover:bg-internee-theme/50 cursor-pointer px-3 text-sm w-full h-full py-4 transition-all hover:text-slate-800"
            >
              <ShieldCheck className="w-4 h-4" />
              Admin
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="p-0" onClick={() => setOpen(false)}>
          <Link
            href={"/settings"}
            className="flex gap-2 items-center  hover:bg-internee-theme/50 cursor-pointer px-3 text-sm w-full h-full py-4 transition-all hover:text-slate-800"
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0" onClick={() => setOpen(false)}>
          <div
            className="flex gap-2 items-center  hover:bg-internee-theme/50 cursor-pointer px-3 text-sm w-full h-full py-4 transition-all hover:text-slate-800"
            aria-disabled={loadingLogout}
            onClick={async () => {
              setLoadingLogout(true);
              await logOut();
            }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavAuthButtonDropdown;
