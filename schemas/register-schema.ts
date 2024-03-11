import * as z from "zod";
import { validatePassword } from "@/lib/validate";

export const RegisterSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(4)
    .refine((value) => validatePassword(value), {
      message: "At least 3 numbers, and 1 special character.",
    }),
});
