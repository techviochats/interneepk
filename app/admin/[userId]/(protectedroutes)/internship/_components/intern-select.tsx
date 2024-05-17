"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDialogHook } from "@/hooks/use-dialogbox";

import { getListCategory } from "@/lib/app-write-storage-and-data";
import { useParams, useRouter } from "next/navigation";

const InternshipSelect = () => {
  const { rerender } = useDialogHook();

  const router = useRouter();
  const params = useParams();
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchListCategory = async () => {
      const data = await getListCategory();
      if (data.error) return;
      setCategories((data as any).data);
    };
    fetchListCategory();
  }, [rerender]);
  return (
    <Select
      onValueChange={(v) => {
        if (v === "All") {
          router.push(`/admin/${params.userId}/internship`);
          return;
        }
        router.push(`/admin/${params.userId}/internship?category=${v}`);
      }}
    >
      <SelectTrigger className="w-[180px] focus:outline-internee-theme focus:ring-internee-theme">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        {categories?.map((category: any) => (
          <SelectItem
            key={category?.$id}
            value={category.category_name}
            className="justify-start cursor-pointer"
          >
            {category.category_name}
          </SelectItem>
        ))}
        {categories?.length === 0 && (
          <div className="flex justify-center items-center w-full col-span-1  sm:col-span-2 md:col-span-2 lg:col-span-3 text-muted-foreground text-sm">
            No Categories Available
          </div>
        )}
        <SelectItem value="All">All Categories</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default InternshipSelect;
