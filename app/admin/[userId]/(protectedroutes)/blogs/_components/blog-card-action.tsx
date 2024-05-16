"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { changePublishedInBlogInDb } from "@/lib/app-write-storage-and-data";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface BlogsActiontypes {
  is_published: boolean;
  $id: string;
}
const BlogCardAction = ({ is_published, $id }: BlogsActiontypes) => {
  const [publish, setPublish] = React.useState<boolean>(is_published);
  const router = useRouter();
  const checkChange = async () => {
    let id;
    setPublish(!publish);
    toast.loading("Updating...");
    await changePublishedInBlogInDb($id, !publish);
    toast.dismiss(id);
    toast.success("Updated successfully");
    router.refresh();
    return;
  };
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex gap-x-2">
        <Switch
          checked={is_published}
          className="data-[state=checked]:bg-internee-theme"
          onCheckedChange={checkChange}
        />
        <span className="text-sm text-muted-foreground">
          {publish ? "Published" : "Draft"}
        </span>
      </div>
      <div className="flex gap-x-2"></div>
    </div>
  );
};

export default BlogCardAction;
