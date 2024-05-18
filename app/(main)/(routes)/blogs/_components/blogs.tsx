import { getSingleBlogs } from "@/actions/get-single-blogs";
import React from "react";

const Blogs = async ({ params }: { params: { blogId: string } }) => {
  const { data } = await getSingleBlogs(params.blogId);
  const [blogs, user] = data;
  console.log(blogs, user);
  return <div></div>;
};

export default Blogs;
