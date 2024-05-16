import React from "react";

import Tiptap from "@/components/editor/tiptap";
const BlogIdPage = ({
  params,
}: {
  params: { blogId: string; userId: string };
}) => {
  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <Tiptap {...params} />
    </div>
  );
};
export default BlogIdPage;
