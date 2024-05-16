"use client";
import React from "react";
import { Link } from "next-view-transitions";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  changePublishedInBlogInDb,
  deleteBlogInDb,
} from "@/lib/app-write-storage-and-data";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { SquarePen, Trash2 } from "@/constant";

interface BlogsActiontypes {
  is_published: boolean;
  $id: string;
}
const BlogCardAction = ({ is_published, $id }: BlogsActiontypes) => {
  const [publish, setPublish] = React.useState<boolean>(is_published);
  const router = useRouter();
  const params = useParams<{ userId: string }>();
  const checkChange = async () => {
    setPublish(!publish);
    let id;
    toast.loading("Updating...");
    await changePublishedInBlogInDb($id, !publish);
    toast.dismiss(id);
    toast.success("Updated successfully");
    router.refresh();
  };
  const deleteBlogs = async (id: string) => {
    let loaderId;
    loaderId = toast.loading("Deleting Blogs...");
    const res = await deleteBlogInDb(id);
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
    <div className="flex flex-col gap-y-1">
      <div className="flex gap-x-2 justify-between ">
        <div className="flex items-center gap-x-2">
          <Switch
            checked={is_published}
            defaultChecked={is_published}
            className="data-[state=checked]:bg-internee-theme"
            onCheckedChange={checkChange}
          />
          <span className="text-sm text-muted-foreground ">
            {publish ? "Published" : "Draft"}
          </span>
        </div>
        <div className="flex items-center">
          <Link
            href={`/admin/${params?.userId}/blogs/${$id}`}
            className="flex items-center hover:bg-accent hover:text-accent-foreground p-3 rounded-md transition-all duration-300"
          >
            {<SquarePen className="w-4 h-4" />}
          </Link>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => deleteBlogs($id)}
          >
            {<Trash2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardAction;
