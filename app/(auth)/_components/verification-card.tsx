"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { HashLoader } from "react-spinners";
import Link from "next/link";

import { FormError, FormSuccess } from "@/components/form-message";

import { Button } from "@/components/ui/button";
import { getVerifiedEmail } from "@/lib/app-write-auth";


const VerificationCard = () => {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [successMessage, setSuccessMessage] = React.useState<string>("");

  const token = searchParams.get("secret");
  const userId = searchParams.get("userId");
  const expires = searchParams.get("expire");

  const onSubmit = React.useCallback(() => {
    if (successMessage && errorMessage) return null;
    if (!token && !userId) {
      return setErrorMessage("Token is required");
    }
    const date = new Date(expires as string);
    const isExpire = date.getTime() < new Date().getTime();
    if (isExpire) {
      setErrorMessage("Token is expired");
      return;
    }
    getVerifiedEmail(userId as string, token as string, date)
      .then((res) => {
        if (res.error) return setErrorMessage(res.error);
        setSuccessMessage("Email Verified");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, [token]);

  React.useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div className="bg-white px-8 py-8 rounded shadow-md text-black w-full space-y-3">
      <h1 className="mb-8 text-3xl text-center font-bold">
        We are Verifying you!
      </h1>
      {!successMessage && !errorMessage && (
        <div className="flex items-center justify-center flex-col gap-y-2">
          <HashLoader />
          <p className="text-muted-foreground text-sm">Please wait...</p>
        </div>
      )}
      {errorMessage && <FormError message={errorMessage} />}
      {successMessage && <FormSuccess message={successMessage} />}
      <Button className="w-full text-muted-foreground" variant={"link"} asChild>
        <Link href="/sign-in">Back to Login</Link>
      </Button>
    </div>
  );
};

export default VerificationCard;
