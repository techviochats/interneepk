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
import Italic from "@tiptap/extension-italic";
import Highlight from "@tiptap/extension-highlight";

import "@/styles/blogstylesclient.css"
const Editor = ({ blogs }: { blogs: string }) => {
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
    onBeforeCreate(props) {
      props.editor.destroy();
    },
    content: blogs,
    editable: false,
  });
  if (!editor) {
    return;
  }
  return (
    <div className="focus:outline-none">
      <EditorContent editor={editor} className="focus:outline-none" />
    </div>
  );
};



export default Editor;
