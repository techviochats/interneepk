"use client";
import { Button } from "@/components/ui/button";
import { usePaginationHook } from "@/hooks/use-page";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const UserPagination = ({
  lastId,
  totalpage,
  startId,
  uriPage = 1,
}: {
  totalpage: number;
  lastId: string;
  startId: string;
  uriPage?: number;
}) => {
  const [client, setClient] = React.useState<boolean>(false);
  const router = useRouter();

  const params = useParams<{ userId: string }>();

  const { page: pageVal, setPage } = usePaginationHook();

  useEffect(() => {
    setClient(true);
    setPage(isNaN(uriPage) ? 1 : uriPage);
  }, []);

  return (
    <div className="order-5 flex w-full justify-between items-center">
      <Button
        disabled={!client || pageVal === 1}
        className="disabled:cursor-none"
        onClick={() => {
          if (pageVal === 1) return;
          setPage(pageVal - 1);
          const uri = `?startId=${startId}&page=${pageVal - 1}`;
          let encoded = encodeURIComponent(uri);

          router.push(`/admin/${params?.userId}?${encoded}`);
        }}
      >
        Previous
      </Button>
      <div className="text-sm text-muted-foreground">
        {uriPage ? uriPage : 1} / {totalpage}
      </div>
      <Button
        onClick={() => {
          setPage(pageVal + 1);
          if (pageVal === totalpage) return;
          const uri = `lastId=${lastId}&page=${pageVal + 1}`;
          let encoded = encodeURIComponent(uri);

          router.push(`/admin/${params?.userId}?${encoded}`);
        }}
        className="disabled:cursor-none"
        disabled={pageVal === totalpage || !client}
      >
        Next
      </Button>
    </div>
  );
};

export default UserPagination;
