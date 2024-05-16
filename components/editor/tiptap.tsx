"use client";

import React from "react";
import { toast } from "sonner";
import { PropagateLoader } from "react-spinners";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Dropcursor from "@tiptap/extension-dropcursor";
import CodeBlock from "@tiptap/extension-code-block";
import Youtube from "@tiptap/extension-youtube";
import ToolBar from "@/components/editor/toolbar";
import Italic from "@tiptap/extension-italic";
import Highlight from "@tiptap/extension-highlight";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import "@/app/blogstyles.css";
import { cn } from "@/lib/utils";
import { useUser } from "@/hooks/use-current-user";
import {
  addBlogInDb,
  getSingleBlogFromDb,
  updateBlogsInDb,
} from "@/lib/app-write-storage-and-data";
import { BlogTypes } from "@/@types";
import Error from "@/components/error";
import { useRouter } from "next/navigation";

const Tiptap = ({ blogId, userId }: { blogId: string; userId: string }) => {
  const { userData } = useUser();
  const isUpdated = blogId !== "new" && !!blogId;
  const router = useRouter();

  const [editorText, setEditorText] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [publish, setPublish] = React.useState<boolean>(true);
  const [uiLoading, setUiLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      BulletList,
      CodeBlock,
      Youtube,
      Italic,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Dropcursor,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "underline",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      blockquote.configure(),
    ],
    onUpdate({ editor }) {
      setEditorText(editor.getHTML());
    },
    onBeforeCreate(props) {
      props.editor.destroy();
    },
    content: editorText,
    editable: true,
  });
  React.useEffect(() => {
    const fetchBlogData = async () => {
      if (!editor) return;
      if (blogId === "new" || !blogId) return setUiLoading(false);
      setUiLoading(true);
      const res = await getSingleBlogFromDb(blogId);
      if (res?.error) {
        setError(res?.error);
        return;
      }
      setEditorText(res?.data?.blogs);

      editor?.commands.setContent(res?.data?.blogs);
      setInput(res?.data?.main_heading);
      setDescription(res?.data?.description);
      setPublish(res?.data?.is_published);
      setUiLoading(false);
    };
    fetchBlogData();
  }, [editor]);
  const onSubmit = async () => {
    let id;
    if (!(input.length > 3 && description.length > 10 && editorText)) {
      return toast.error("Please fill all the fields");
    }

    let value: BlogTypes = {
      blogs: editorText,
      main_heading: input,
      description: description,
      published_date: publish ? new Date() : null,
      is_published: publish,
      user_id: (userData as any)?.$id,
    };
    id = toast.loading(isUpdated ? "Updating Blog" : "Adding Blog...");
    const res = isUpdated
      ? await updateBlogsInDb(blogId, value)
      : await addBlogInDb(value);
    if (res?.error) {
      toast.dismiss(id);
      toast.error(res?.error);
      return;
    }
    toast.dismiss(id);
    toast.success(res?.message);
    router.refresh();
    return;
  };
  if (error) {
    return <Error error={error} href={`/admin/${userId}/blogs`} />;
  }
  if (!editor || uiLoading) {
    return <TipTapLoader />;
  }
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <ToolBar editor={editor} />
      <Input
        className={cn(
          "bg-[#d4d3d3] focus:outline-internee-theme focus-visible:outline-internee-theme",
          input?.length > 500 &&
            "ring-destructive ring-2 focus:outline-2 focus:outline-red-300 focus-visible:outline-red-300  focus-visible:outline-2",
          input?.length === 599 &&
            "ring-destructive ring-2 focus:outline-2 focus:outline-destructive focus-visible:outline-destructive  focus-visible:outline-2"
        )}
        placeholder="Main Heading..."
        value={input}
        onChange={(e) => {
          const newValue = e.target.value;
          if (newValue?.length > 599) {
            setInput(newValue?.slice(0, 599));
            return;
          }
          setInput(newValue);
        }}
      />
      <span className="text-xs text-muted-foreground -mt-3 text-end px-1">
        {input?.length}/600
      </span>
      <Textarea
        placeholder="Small Description that what is this blog about"
        className={cn(
          "bg-[#d4d3d3] focus:outline-internee-theme focus-visible:outline-internee-theme",
          description?.length > 900 &&
            "ring-destructive ring-2 focus:outline-2 focus:outline-red-300 focus-visible:outline-red-300  focus-visible:outline-2",
          description?.length === 999 &&
            "ring-destructive ring-2 focus:outline-2 focus:outline-destructive focus-visible:outline-destructive  focus-visible:outline-2"
        )}
        value={description}
        onChange={(e) => {
          const newValue = e.target.value;
          if (newValue?.length > 999) {
            setDescription(newValue?.slice(0, 999));
            return;
          }
          setDescription(newValue);
        }}
      />
      <span className="text-xs text-muted-foreground -mt-3 text-end px-1">
        {description?.length}/1000
      </span>
      <EditorContent editor={editor} className="focus:outline-none" />
      <div className="flex gap-x-2 text-muted-foreground text-sm items-center -mt-2">
        <Switch
          checked={publish}
          defaultChecked={publish}
          className="data-[state=checked]:bg-internee-theme"
          onCheckedChange={() => setPublish(!publish)}
        />
        {publish ? "Published" : "Draft"}
      </div>
      <Button
        className="bg-internee-theme mb-4 hover:bg-internee-theme/90"
        onClick={onSubmit}
      >
        {isUpdated ? "Update" : "Publish"}
      </Button>
    </div>
  );
};

const TipTapLoader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <PropagateLoader className="w-20 h-20" color="#68B84F" />
    </div>
  );
};
export default Tiptap;
