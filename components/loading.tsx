import React from "react";
import { Loader2 } from "@/constant";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-internee-theme animate-spin"/>
    </div>
  );
};

export default Loading;
