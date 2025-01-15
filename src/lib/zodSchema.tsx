import { z } from "zod";

export const mainFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be longer than 3 characters")
    .max(50, "Name must be shorter than 50 characters"),
  contact: z.string().email().min(5),
  message: z
    .string()
    .min(1, "Message must not be blank")
    .max(2000, "I guess the Message is too long, try to make it shorter"),
});
