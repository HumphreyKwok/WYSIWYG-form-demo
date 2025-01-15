"use server";

import { mainFormSchema } from "@/lib/zodSchema";
import { z } from "zod";

export const mainFormAction = async (data: z.infer<typeof mainFormSchema>) => {
  const dataValidation = mainFormSchema.safeParse(data);

  if (dataValidation.error) {
    return { status: 400, message: "data validation failed" };
  }

  return { status: 200, data: dataValidation.data };
};
