"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "@/constant";
import { deleteInternshipInDb } from "@/lib/app-write-storage-and-data";
import { toast } from "sonner";

interface InternshipProps {
  id: string;
  name: string;
  category: string;
}
const InternshipList = ({ category, id, name }: InternshipProps) => {
  const params = useParams();
  const router = useRouter();
  const deleteInternship = async (id: string) => {
    let loaderId;
    loaderId = toast.loading("Deleting Internship...");
    const res = await deleteInternshipInDb(id);
    if (res?.error) {
      toast.dismiss(loaderId);
      toast.error(res?.error);
      return;
    }
    toast.dismiss(loaderId);
    toast.success(res?.message);
    router.refresh();
    return;
  };
  return (
    <div className="w-72 min-h-20 shadow-lg transition-all duration-300 hover:shadow-2xl rounded-xl ring-muted-foreground/10 ring-1 text-muted-foreground p-5 flex justify-between">
      <div className="flex flex-col">
        <div className="text-internee-theme">{name}</div>
        <div className="text-sm">{category}</div>
      </div>
      <div className="flex items-center">
        <Link
          href={`/admin/${params?.userId}/internship/${id}`}
          className="flex items-center hover:text-black"
        >
          {<SquarePen className="w-4 h-4" />}
        </Link>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => deleteInternship(id)}
        >
          {<Trash2 className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default InternshipList;
