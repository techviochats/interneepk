import React from "react";
import BlogCardAction from "./blog-card-action";
interface BlogList {
  $id: string;
  main_heading: string;
  description: string;
  published_date: Date | null;
  is_published: boolean;
}
const BlogList = ({
  $id,
  description,
  main_heading,
  published_date,
  is_published,
}: BlogList) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 px-3 py-3 flex flex-col justify-between gap-y-2 ring-muted-foreground/10 ring-1"
      key={$id}
    >
      <div className="flex flex-col gap-y-4">
        <h1 className="text-xl font-semibold">{main_heading}</h1>
        <p className="text-muted-foreground text-sm">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
      </div>
      <BlogCardAction is_published={is_published} $id={$id} />
    </div>
  );
};

export default BlogList;
