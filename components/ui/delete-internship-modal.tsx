"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useDialogHook } from "@/hooks/use-dialogbox";
import { toast } from "sonner";
import { deleteCategoryInDb } from "@/lib/app-write-storage-and-data";

export function DialogDeleteInternshipModal() {
  const { close, isOpen, modalTypes, categoryDetails, rerenderFunc } =
    useDialogHook();
  const [loading, setLoading] = React.useState<boolean>(false);
  const deleteCategory = async () => {
    let id;
    setLoading(true);
    if (!categoryDetails?.categoryId) {
      toast.error("Something went wrong");
      return;
    }
    id = toast.loading("Deleting Category...");
    const res = await deleteCategoryInDb(categoryDetails?.categoryId);
    if (res?.error) {
      toast.dismiss(id);
      toast.error(res?.error);
      setLoading(false);
      return;
    }
    toast.dismiss(id);
    toast.success(res?.message);
    setLoading(false);
    close();
    rerenderFunc();
    return;
  };
  if (modalTypes === "deleteInternshipCategory" && isOpen) {
    return (
      <AlertDialog
        open={isOpen}
        onOpenChange={() => {
          if (isOpen) {
            close();
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to delete ({categoryDetails?.categoryName}
              )?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={loading} onClick={deleteCategory}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  return;
}
