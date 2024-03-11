"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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

import { RegisterSchema } from "@/schemas/register-schema";
import { getRegister } from "@/lib/app-write-auth";
import { FormError, FormSuccess } from "@/components/form-message";

const SignUpForm = () => {
  // states for password to text
  const [passwordText, setPassword] = React.useState<"password" | "text">(
    "password"
  );
  const [isPending, setTransition] = React.useTransition();
  const [isSuccess, setSuccessMessage] = React.useState<string>("");
  const [isError, setErrorMessage] = React.useState<string>("");

  // form validation
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  //   submission of form
  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setErrorMessage("");
    setSuccessMessage("");
    setTransition(() => {
      getRegister(values)
        .then((response) => {
          if (!response.data) {
            setErrorMessage(response.error);
            return;
          }
          setSuccessMessage(response.data);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    });
  }

  return (
    <>
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center font-bold">Sign up</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      placeholder="Full Name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
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
                        className="block border border-grey-light w-full p-3 rounded mb-4"
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
            {/* <SocialButton /> */}
            <Button type="submit" className="w-full" disabled={isPending}>
              Create Account
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-grey-dark mt-6">
        Already have an account?&nbsp;
        <Link
          className="underline border-b border-blue text-sky-600"
          href={"/sign-in"}
        >
          Log in
        </Link>
        .
      </div>
    </>
  );
};

export default SignUpForm;
