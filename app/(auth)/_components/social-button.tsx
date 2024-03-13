"use client";
import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { getOAuthLogin } from "@/lib/app-write-auth";

export const SocialButton = () => {
  const onClick = (provider: "google" | "github") => {
    getOAuthLogin("github");
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClick("google");
        }}
      >
        <FcGoogle className="text-lg" />
      </Button>
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onClick("github");
        }}
      >
        <FaGithub className="text-lg" />
      </Button>
    </div>
  );
};
