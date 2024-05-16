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
        <SelectItem value="All">All Categories</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default InternshipSelect;
