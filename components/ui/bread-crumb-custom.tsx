import { breadCrumbsTypes } from "@/@types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumbCustom = () => {
  const path = usePathname().split("/");
  const Patharray = path?.map((val, index) => {
    const valueLabel = val === "" ? "Home" : val;
    const valueHref = val === "" ? "/" : `/${val}`;

    const allExceptLastIndex = path.length - index !== 1;
    return (
      <>
        {allExceptLastIndex ? (
          <BreadcrumbItem key={index}>
            <Link href={valueHref}>{valueLabel}</Link>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={index}>
            <BreadcrumbPage>{val}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {allExceptLastIndex && <BreadcrumbSeparator key={index} />}
      </>
    );
  });
  return (
    <Breadcrumb>
      <BreadcrumbList>{Patharray}</BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbCustom;
