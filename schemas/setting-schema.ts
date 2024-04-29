import * as zod from "zod";

export const SettingSchema = zod.object({
  name: zod.string().min(2, {
    message: "Image is required ",
  }),
  email: zod.string().email().min(2),
  user_image: zod.string().min(2),
});
