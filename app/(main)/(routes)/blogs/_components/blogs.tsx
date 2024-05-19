import React from "react";

import Editor from "./editor";
import { getSingleBlogs } from "@/actions/get-single-blogs";
import { getSingleUser } from "@/actions/get-single-user";

const Blogs = async ({ params }: { params: { blogId: string } }) => {
  const { data: blogs, error } = await getSingleBlogs(params?.blogId);
  const { data: user, error: userError } = await getSingleUser(
    (blogs as any)?.user_id
  );
  if (error || userError) {
    return <div>{JSON.stringify(error)}</div>;
  }
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
