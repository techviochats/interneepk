import React from "react";
import { ShieldAlert } from "lucide-react";
import { CheckCircle } from "lucide-react";

export const FormSuccess = ({ message }: { message: string }) => {
  return (
    <div className="bg-emerald-500/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export const FormError = ({ message }: { message: string }) => {
  return (
    <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ShieldAlert className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
