import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UserLoading = () => {
  return (
    <div className="w-full space-y-8">
      <Skeleton className="w-full px-6 py-8 bg-muted-foreground/40" />
      <Skeleton className="w-full px-6 py-8 bg-muted-foreground/40" />
      <Skeleton className="w-full px-6 py-8 bg-muted-foreground/40" />
      <Skeleton className="w-full px-6 py-8 bg-muted-foreground/40" />
      <Skeleton className="hidden sm:block w-full px-6 py-8 bg-muted-foreground/40" />
      <Skeleton className="hidden sm:block w-full px-6 py-8 bg-muted-foreground/40" />
    </div>
  );
};

export default UserLoading;
