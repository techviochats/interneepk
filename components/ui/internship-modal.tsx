"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDialogHook } from "@/hooks/use-dialogbox";
import { toast } from "sonner";
import { addCategoryInDb, setPic } from "@/lib/app-write-storage-and-data";
import { useParams, useRouter } from "next/navigation";
import ImageUploader from "./image-uploader";
import { useUser } from "@/hooks/use-current-user";

export function DialogInternshipModal() {
  const { close, isOpen, modalTypes, rerenderFunc } = useDialogHook();
  const { userData } = useUser();
  const [value, setInputValue] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>();
  const [imageUrl, setImageUrl] = React.useState<string>("");

  const router = useRouter();
  const param = useParams();
  const addCategory = async () => {
    let id;
    if (!value) {
      toast.warning("Please enter a category field");
      return;
    }
    if (!imageUrl || !file) {
      toast.warning("Please enter an image for that field");
      return;
    }
    id = toast.loading("Uploading Image...");
    const url = await setPic((userData as any)?.$id, file);
    if (!url.url) {
      toast.dismiss(id);
      toast.error("Some Error Occured while uploading image");
      return;
    }
    toast.dismiss(id);
    id = toast.loading("Adding Category...");
    const res = await addCategoryInDb(value, url.url);
    if (res?.error) {
      toast.dismiss(id);
      toast.error(res?.error);
      setInputValue("");
      return;
    }
    if (res?.message) {
      toast.dismiss(id);
      toast.success(res?.message);
      router.push(`/admin/${param.userId}/internship/${param?.internshipId}`);
      setInputValue("");
      rerenderFunc();
      close();
      return;
    }
  };
  if (modalTypes === "addInternshipCategory" && isOpen) {
    return (
      <Dialog
        open={isOpen}
        onOpenChange={() => {
          if (isOpen) {
            close();
          }
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              Just add a category{" "}
              <em>(Be sure to not to use same categories)</em>
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 w-full gap-y-2 flex-col">
            <div className="grid w-full flex-1 gap-2">
              <Input
                className="focus-visible:outline-internee-theme focus:outline-internee-theme"
                placeholder="Cloud..."
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <ImageUploader
              onChange={(file, url) => {
                setFile(file);
                setImageUrl(url);
              }}
              value={imageUrl}
            />
            <Button
              type="submit"
              size="lg"
              className="px-3 bg-internee-theme hover:bg-internee-theme/90 w-full"
              onClick={addCategory}
            >
              <span className="">Add Category</span>
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  return;
}
