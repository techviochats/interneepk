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
import { makeAdmin } from "@/actions/server-Actions/make-admin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface UserDropdownListProps {
  isAdmin: boolean;
  id: string;
}
const UserDropdownList = ({ isAdmin, id }: UserDropdownListProps) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [isClient, setIsClient] = React.useState<boolean>(false);
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();

  let loadingToastId: null | undefined | string | any = null;

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const handleAdmin = (id: string) => {
    loadingToastId = toast.loading("Making Admin...");
    startTransition(() => {
      makeAdmin(id)
        .then((res) => {
          if (res.error) return toast.error(res.error);
          router.refresh();
          toast.dismiss(loadingToastId);
          return toast.success(res.message);
        })
        .catch((res) => {
          console.log(res);
          toast.dismiss(loadingToastId);
          return toast.error(res.error);
        });
    });
  };
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
          <DropdownMenuItem
            disabled={isPending}
            className="p-0 disabled:cursor-not-allowed disabled:text-internee-absoluteTheme disabled:bg-internee-theme/50"
            onClick={() => handleAdmin(id)}
          >
            <div className="w-full py-3 transition-all rounded-md px-2 cursor-pointer hover:bg-internee-theme hover:text-internee-absoluteTheme flex">
              <ShieldAlert className="w-4 h-4 mr-1 text-destructive mb-px" />
              Make Admin
            </div>
          </DropdownMenuItem>
        )}

        {/* THIS IS TODO LIST */}
        {/* <DropdownMenuItem className="p-0">
          <div className="w-full py-3 transition-all rounded-md px-2 cursor-pointer hover:bg-internee-theme hover:text-internee-absoluteTheme flex">
            <Lock className="w-4 h-4 mr-1 text-destructive mb-px" />
            Block
          </div>
        </DropdownMenuItem> */}
        {/* THIS IS TODO LIST */}
        {/* <DropdownMenuItem className="p-0">
          <div className="w-full py-3 transition-all rounded-md px-2 cursor-pointer hover:bg-internee-theme hover:text-internee-absoluteTheme flex">
            <Trash2 className="w-4 h-4 mr-1 text-destructive mb-px" />
            Delete
          </div>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownList;
