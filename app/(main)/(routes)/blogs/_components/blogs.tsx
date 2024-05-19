import { getSingleBlogs } from "@/actions/get-single-blogs";
import React from "react";
import Editor from "./editor";

const Blogs = async ({ params }: { params: { blogId: string } }) => {
  const { data } = await getSingleBlogs(params.blogId);
  const [blogs, user] = data;

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold">{(blogs as any)?.main_heading}</h1>
      <p className="text-muted-foreground text-sm italic">
        {(blogs as any)?.description}
      </p>
      <Editor blogs={(blogs as any)?.blogs} />
    </div>
  );
};

export default Blogs;
