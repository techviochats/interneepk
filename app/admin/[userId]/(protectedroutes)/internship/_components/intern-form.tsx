"use client";

import React from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { internshipSchema } from "@/schemas";
import { Plus, Trash2 } from "@/constant";
import { useDialogHook } from "@/hooks/use-dialogbox";
import {
  addInternshipInDb,
  getListCategory,
  getSingleInternshipFromDb,
  updateInternshipInDb,
} from "@/lib/app-write-storage-and-data";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
interface InternFormProps {
  internshipId: string;
}
type categoryDetailsTypes = {
  categoryName: string;
  categoryId: string;
};
const InternForm = ({ internshipId }: InternFormProps) => {
  const { open, rerender } = useDialogHook();
  const router = useRouter();
  const [categories, setCategories] = React.useState([]);
  const [internshipData, setInternshipData] = React.useState<
    z.infer<typeof internshipSchema> | null | undefined
  >();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [uiLoading, setUiLoading] = React.useState<boolean>(true);

  const form = useForm<z.infer<typeof internshipSchema>>({
    resolver: zodResolver(internshipSchema),
    defaultValues: {
      internship_category: "",
      internship_name: "",
      internship_docLink: "",
    },
  });

  React.useEffect(() => {
    const fetchListCategory = async () => {
      const data = await getListCategory();
      if (data.error) return;
      setCategories((data as any).data);
    };
    fetchListCategory();
  }, [rerender]);

  React.useEffect(() => {
    const fetchInternshipData = async () => {
      setUiLoading(true);
      const res = await getSingleInternshipFromDb(internshipId);
      if (res?.error) return;
      setInternshipData({
        internship_category: (res as any)?.data.internship_category,
        internship_name: (res as any)?.data.internship_name,
        internship_docLink: (res as any)?.data.internship_docLink,
      });
      form.setValue(
        "internship_category",
        (res as any)?.data.internship_category
      );
      form.setValue("internship_name", (res as any)?.data.internship_name);
      form.setValue(
        "internship_docLink",
        (res as any)?.data.internship_docLink
      );
      setUiLoading(false);
    };
    fetchInternshipData();
  }, []);

  async function onSubmit(values: z.infer<typeof internshipSchema>) {
    let id;
    id = toast.loading(
      internshipData?.internship_name
        ? "Updating Internship..."
        : "Adding Internship..."
    );
    setLoading(true);
    const res = !internshipData?.internship_name
      ? await addInternshipInDb(values)
      : await updateInternshipInDb(values, internshipId);
    if (res.error) {
      toast.dismiss(id);
      toast.error(res.error);
      setLoading(false);
      return;
    }
    toast.dismiss(id);
    toast.success(res.message);
    setLoading(false);
    router.refresh();
    form.reset();
  }
  const openAddCategoryModal = () => {
    open("addInternshipCategory");
  };
  const openDeleteCategoryModal = (categoryDetails: categoryDetailsTypes) => {
    open("deleteInternshipCategory", categoryDetails);
  };
  if (uiLoading) return <Loading />;
  return (
    <div className="flex flex-col gap-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid grid-cols-1"
        >
          <FormField
            control={form.control}
            name="internship_category"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="focus:ring-internee-theme">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="transition-all ">
                    {categories.map((category: any) => (
                      <div className="flex justify-between gap-x-2 items-center" key={category?.$id}>
                        <SelectItem
                          value={category?.category_name}
                          className="cursor-pointer"
                        >
                          {category?.category_name}
                        </SelectItem>
                        <div
                          className="cursor-pointer pr-2"
                          onClick={() =>
                            openDeleteCategoryModal({
                              categoryId: category?.$id,
                              categoryName: category?.category_name,
                            })
                          }
                        >
                          <Trash2 className="w-4 h-4 text-destructive/90" />
                        </div>
                      </div>
                    ))}

                    <div
                      className="flex items-center cursor-pointer justify-center text-muted-foreground py-3 hover:bg-internee-theme/90 hove  r:text-internee-absoluteTheme transition-all rounded-md w-full bg-internee-theme text-white mr-2 gap-x-1 mt-2"
                      onClick={openAddCategoryModal}
                    >
                      <Plus className="w-5 h-5" />
                      Add New
                    </div>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="internship_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Internship Name"
                    className="focus-visible:outline-internee-theme focus:outline-internee-theme"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="internship_docLink"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Document Link"
                    className="focus-visible:outline-internee-theme focus:outline-internee-theme"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="bg-internee-theme hover:bg-internee-theme/90"> 
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InternForm;
