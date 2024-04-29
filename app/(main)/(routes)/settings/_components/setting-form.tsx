"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useUser } from "@/hooks/use-current-user";
import { SettingSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import ImageUploader from "@/components/ui/image-uploader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import SettingLoading from "./setting-loading";
import { toast } from "sonner";
import { addInDbInfo, setPic } from "@/lib/app-write-storage-and-data";

const SettingForm = () => {
  const { userData, userDbData, isLoading, updateDbData } = useUser();
  const [file, setFile] = React.useState<File | null | undefined>(null);
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!!userData.hasOwnProperty("$id") === false) {
        if (!isLoading) {
          router.push("/");
        }
      }
    });
    return () => clearTimeout(timer);
  }, [userData, isLoading, router]);

  const form = useForm<z.infer<typeof SettingSchema>>({
    resolver: zodResolver(SettingSchema),
    defaultValues: {
      email: userDbData?.email || "",
      name: userDbData?.full_name || "",
      user_image: userDbData.user_image || "",
    },
  });

  useEffect(() => {
    form.setValue("email", userDbData?.email || "");
    form.setValue("name", userDbData?.full_name || "");
    form.setValue("user_image", userDbData.user_image || "");
  }, [userDbData, form]);

  async function onSubmit(values: z.infer<typeof SettingSchema>) {
    let id;
    try {
      const parseSchema = SettingSchema.safeParse(values);
      if (!parseSchema.success) {
        return toast.error(parseSchema.error.message);
      }
      if (!(userData as any)?.$id || !(userDbData as any)?.$id) {
        return router.push("/");
      }
      let url = { url: "", error: "" };

      if (file) {
        console.log(file);
        id = toast.loading("Image Uploading...");
        url = await setPic((userDbData as any)?.$id, file);
        toast.dismiss(id);
        toast.success("Image Uploaded");
      } else {
        url = { url: userDbData.user_image!, error: "" };
      }

      if (!url.url) {
        return toast.error(url.error);
      }

      id = toast.loading("Updating User Info...");

      await addInDbInfo(values, url.url, (userDbData as any)?.$id);
      updateDbData();
      setFile(null);
      toast.dismiss(id);
      toast.success("Information is Updated");
      router.refresh();
    } catch (error) {
      setFile(null);
      toast.dismiss(id);
      toast.error("Some Error Occurred while updating! please try again later");
    }
  }

  return (
    <div className="w-full flex flex-col">
      {isLoading && <SettingLoading />}
      {!isLoading && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-5 space-x-2 space-y-4"
          >
            <FormField
              control={form.control}
              name="user_image"
              render={({ field }) => (
                <FormItem className="grid grid-cols-5 col-span-5">
                  <div className="col-span-2 ml-2">
                    <FormControl>
                      <ImageUploader
                        onChange={(file, url) => {
                          setFile(file);
                          field.onChange(url);
                        }}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid grid-cols-5 col-span-5">
                  <div className="col-span-2 ml-2">
                    <Label>Name</Label>
                    <FormControl>
                      <Input
                        placeholder="John doe"
                        {...field}
                        className="border-internee-theme"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid grid-cols-5 col-span-5">
                  <div className="col-span-2 ml-2">
                    <Label>Email</Label>
                    <FormControl>
                      <Input
                        placeholder="johndoe@example.com"
                        {...field}
                        className="border-internee-theme cursor-not-allowed select-none"
                        disabled
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="ml-4">
              Update
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default SettingForm;
