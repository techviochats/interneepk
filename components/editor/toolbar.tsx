"use client";
import React, { useCallback } from "react";
import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  Link,
  Center,
  Left,
  Right,
  Youtube,
  Italic,
  Highlight,
} from "@/constant";

const ToolBar = ({ editor }: { editor: Editor | null }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "" || url.trim() === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);
  const addYoutubeVideo = useCallback(() => {
    const url = prompt("Enter YouTube URL");

    if (url && editor) {
      // TODO ADD RESPONSIVE VIDEO

      editor.commands.setYoutubeVideo({
        src: url,
        width: 640,
        height: 480,
      });
    }
  }, [editor]);
  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex gap-x-2 flex-wrap">
        <Button
          size={"icon"}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive("heading", { level: 1 }) && "bg-internee-theme"
          )}
          onClick={() => {
            editor?.chain().focus().toggleHeading({ level: 1 }).run();
          }}
        >
          <Heading1 className="w-5 h-5" />
        </Button>
        <Button
          size={"icon"}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive("heading", { level: 2 }) && "bg-internee-theme"
          )}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 className="w-5 h-5" />
        </Button>
        <Button
          size={"icon"}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive("heading", { level: 3 }) && "bg-internee-theme"
          )}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 className="w-5 h-5" />
        </Button>
        <Button
          size={"icon"}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive("bulletList") && "bg-internee-theme"
          )}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          <List className="w-5 h-5" />
        </Button>
        <Button
          size={"icon"}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive("codeBlock") && "bg-internee-theme"
          )}
          onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        >
          <Code className="w-5 h-5" />
        </Button>
        {editor?.isActive("bold") ? (
          <Button
            size={"icon"}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("bold") && "bg-internee-theme"
            )}
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            <Bold className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            size={"icon"}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("bold") && "bg-internee-theme"
            )}
            onClick={() => editor?.chain().focus().setBold().run()}
          >
            <Bold className="w-5 h-5" />
          </Button>
        )}
        {editor?.isActive("highlight") ? (
          <Button
            size={"icon"}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("highlight") && "bg-internee-theme"
            )}
            onClick={() => editor?.chain().focus().toggleHighlight().run()}
          >
            <Highlight className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            size={"icon"}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("highlight") && "bg-internee-theme"
            )}
            onClick={() => editor?.chain().focus().setHighlight().run()}
          >
            <Highlight className="w-5 h-5" />
          </Button>
        )}
        {editor?.isActive("italic") ? (
          <Button
            size={"icon"}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("italic") && "bg-internee-theme"
            )}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          >
            <Italic className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            size={"icon"}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("italic") && "bg-internee-theme"
            )}
            onClick={() => editor?.chain().focus().setItalic().run()}
          >
            <Italic className="w-5 h-5" />
          </Button>
        )}
        {!editor?.isActive("link") ? (
          <Button
            size={"icon"}
            onClick={setLink}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("link") && "bg-internee-theme"
            )}
          >
            <Link className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            onClick={() => editor?.chain().focus().unsetLink().run()}
            className={cn(
              "bg-muted-foreground text-sm",
              editor?.isActive("link") && "bg-internee-theme"
            )}
            size={"icon"}
          >
            <Link className="w-5 h-5" />
          </Button>
        )}
        <Button
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive({ textAlign: "left" }) && "bg-internee-theme"
          )}
          size={"icon"}
        >
          <Left className="w-5 h-5" />
        </Button>
        <Button
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive({ textAlign: "center" }) && "bg-internee-theme"
          )}
          size={"icon"}
        >
          <Center className="w-5 h-5" />
        </Button>
        <Button
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive({ textAlign: "right" }) && "bg-internee-theme"
          )}
          size={"icon"}
        >
          <Right className="w-5 h-5" />
        </Button>
        <Button
          onClick={addYoutubeVideo}
          className={cn(
            "bg-muted-foreground text-sm",
            editor?.isActive("youtube") && "bg-internee-theme"
          )}
          size={"icon"}
        >
          <Youtube className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ToolBar;
