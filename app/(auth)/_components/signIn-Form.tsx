"use client";
import React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import SocialButton from "./social-button";

import { LoginSchema } from "@/schemas";
import { getLogin } from "@/lib/app-write-auth";
import { FormError, FormSuccess } from "@/components/form-message";
import { SocialButton } from "./social-button";
import BreadCrumbCustom from "@/components/ui/bread-crumb-custom";

const SignInForm = () => {
  const [passwordText, setPassword] = React.useState<"password" | "text">(
    "password"
  );
  const [isPending, setTransition] = React.useTransition();
  const [isSuccess, setSuccessMessage] = React.useState<string>("");
  const [isError, setErrorMessage] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);

  // form validation
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   submission of form
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);
    setTransition(() => {
      getLogin(values)
        .then((res) => {
          if (res.error) {
            setErrorMessage(res.error);
            setLoading(false);
            return;
          }
          setLoading(false);
          window.location.reload();
          window.location.href = "/";
        })
        .catch((error) => {
          setLoading(false);
          setErrorMessage(error.error || "Some error Occurred");
        });
    });
  };

  return (
    <>
      <div className="mb-3">
        <BreadCrumbCustom />
      </div>
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center font-bold">Sign In</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      className="block border border-grey-light w-full p-3 rounded mb-4 disabled:bg-gray-500/10 disabled:cursor-not-allowed"
                      placeholder="Email"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type={passwordText}
                        className="block border border-grey-light w-full p-3 rounded mb-4 disabled:bg-gray-500/10 disabled:cursor-not-allowed"
                        placeholder="Password"
                        disabled={isPending}
                        {...field}
                      />
                      <Button
                        size={"icon"}
                        variant={"ghost"}
                        type="button"
                        className="absolute top-0 right-0"
                        disabled={isPending}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (passwordText === "password") {
                            setPassword("text");
                          } else {
                            setPassword("password");
                          }
                        }}
                      >
                        {passwordText === "password" ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isSuccess && <FormSuccess message={isSuccess} />}
            {isError && <FormError message={isError} />}
            <SocialButton />
            <Button
              type="submit"
              className="w-full disabled:bg-black/70 disabled:cursor-not-allowed"
              disabled={isPending || isLoading}
            >
              Login
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-grey-dark mt-6">
        Don&apos;t have an account?&nbsp;
        <Link
          className="border-b border-blue text-blue underline text-sky-600"
          href={"/sign-up"}
        >
          SignUp
        </Link>
        .
      </div>
    </>
  );
};

export default SignInForm;
