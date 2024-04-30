"use client";

import React from "react";
import Image from "next/image";

import { toast } from "sonner";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import { Cut } from "@/constant";
interface ImageUploaderProps {
  onChange: (file: File | undefined | null, url: string) => void;
  value: string;
}
const ImageUploader = ({ onChange, value }: ImageUploaderProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/jpg": [],
      "image/svg+xml": [],
    },
    maxFiles: 1,
    onDrop(acceptedFiles, fileRejections, event) {
      const url = URL.createObjectURL(acceptedFiles[0]);

      onChange(acceptedFiles[0], url);
      if (fileRejections.length > 0) {
        console.log(fileRejections);
        URL.revokeObjectURL(url);
        toast.error("Only *.jpeg and *.png images will be accepted");
      }
    },
  });
  if (!value)
    return (
      <div className="w-full border-dashed border-2 border-internee-theme rounded-md bg-internee-theme/20">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex flex-col items-center justify-center gap-y-2 p-4 h-52 relative"
        >
          <input {...getInputProps()} style={{ display: "none" }} />

          <Image
            src="/assets/uploading.svg"
            alt="image"
            className="object-cover"
            width={200}
            height={200}
          />
          <em className="text-muted-foreground text-sm">
            Upload File or Drag&apos;n Drop(Only One)
            <br />
            (Only *.jpeg and *.png images will be accepted)
          </em>
        </div>
      </div>
    );
  return (
    <div className="w-64 aspect-square rounded-md">
      <div className="relative w-full h-full rounded-md">
        <Image
          src={value}
          alt="image"
          fill
          className="object-contain rounded-md"
        />
        <Button
          size={"icon"}
          className="absolute top-1 right-1 rounded-full bg-destructive"
          onClick={() => onChange(null, "")}
        >
          <Cut />
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;
