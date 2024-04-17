"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";

import { useUser } from "@/hooks/use-current-user";

const SettingForm = () => {
  const { userData } = useUser();
  const router = useRouter();
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/webp": [],
        "image/jpg": [],
      },
      maxFiles: 1,
    });
  React.useEffect(() => {
    const time = setTimeout(() => {
      if (!!userData.hasOwnProperty("$id") === false) {
        router.push("/");
      }
    }, 1500);
    return () => clearTimeout(time);
  }, [userData]);

  const acceptedFileItems = acceptedFiles.map((file: any) => (
    <li key={file.name}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e: any) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
};

export default SettingForm;
