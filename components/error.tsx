import { Link } from "next-view-transitions";
import React from "react";

const Error = ({ error, href }: { error?: string; href: string }) => {
  const errorArr = error?.split(" ");
  const errorCode = errorArr?.pop();
  const errorMessage = errorArr?.join(" ");

  return (
    <div className="text-center mt-6 w-full h-full flex flex-col justify-center">
      <h1 className="mb-4 text-6xl font-semibold text-internee-theme">
        {errorCode}
      </h1>
      <p className="mb-4 text-lg text-gray-600">
        {errorMessage || "Oops! Something went wrong"}
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-internee-theme"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        Let&apos;s get you back{" "}
        <Link href={href} className="text-blue-500">
          Click Here
        </Link>
        .
      </p>
    </div>
  );
};

export default Error;
