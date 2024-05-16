"use client";
import React, { useEffect, useState } from "react";

import { useParams, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BlogSelect = () => {
  const router = useRouter();
  const params = useParams<{ userId: string }>();
  const [selectValue, setSelectValue] = useState<string>("");
  const sParams = useSearchParams();

  const sParamsValue = sParams.get("filters");
  useEffect(() => {
    const selectDefaultValue = () => {
      if (sParamsValue === params?.userId) {
        setSelectValue("userId");
      } else if (sParamsValue === "true") {
        setSelectValue("published");
      } else if (sParamsValue === "false") {
        setSelectValue("not_published");
      } else {
        setSelectValue("All");
      }
    };
    selectDefaultValue();
  }, [sParams.get("filters")]);

  return (
    <Select
      onValueChange={(v) => {
        switch (v) {
          case "userId":
            router.push(
              `/admin/${params.userId}/blogs?filters=${params.userId}`
            );
            return;
          case "published":
            router.push(`/admin/${params.userId}/blogs?filters=true`);
            return;
          case "not_published":
            router.push(`/admin/${params.userId}/blogs?filters=false`);
            return;
          default:
            router.push(`/admin/${params.userId}/blogs`);
            return;
        }
      }}
      defaultValue={selectValue}
      value={selectValue}
    >
      <SelectTrigger className="w-[180px] focus:outline-internee-theme focus:ring-internee-theme">
        <SelectValue placeholder="All Blogs" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All Blogs</SelectItem>
        <SelectItem value="userId">Only me</SelectItem>
        <SelectItem value="published">published </SelectItem>
        <SelectItem value="not_published">not published </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BlogSelect;
