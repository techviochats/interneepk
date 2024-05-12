import * as z from "zod";

export const internshipSchema = z.object({
  internship_category: z
    .string({ required_error: "Please select an categories to display." })
    .min(2, { message: "Please select an categories to display." }),
  internship_name: z.string().min(2),
  internship_docLink: z.string().url({ message: "Invalid URL" }).min(2),
});
