"use client";

import React from "react";
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

import "@/app/blogstyles.css";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const Tiptap = () => {
  const [editorText, setEditorText] = React.useState<string>();
  const [input, setInput] = React.useState<string>("");
  const [publish, setPublish] = React.useState<boolean>(true);
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
      console.log(editor.getHTML());
      setEditorText(editor.getHTML());
    },

    content: "",
    editable: true,
  });

  if (!editor) {
    return <TipTapLoader />;
  }
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <ToolBar editor={editor} />
      <Input
        className="bg-[#d4d3d3] focus:outline-internee-theme focus-visible:outline-internee-theme"
        placeholder="Main Heading..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <EditorContent editor={editor} className="focus:outline-none" />
      <div className="flex gap-x-2 text-muted-foreground text-sm items-center">
        <Switch
          checked={publish}
          className="data-[state=checked]:bg-internee-theme"
          onCheckedChange={() => setPublish(!publish)}
        />
        {publish ? "Published" : "Draft"}
      </div>
      <Button className="bg-internee-theme mb-4">Publish</Button>
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
