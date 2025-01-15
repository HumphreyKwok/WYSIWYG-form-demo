"use server";

import { mainFormSchema } from "@/lib/zodSchema";

export const mainFormAction = async (data: unknown) => {
  const dataValidation = mainFormSchema.safeParse(data);

  if (dataValidation.error) {
    return { status: 400, message: "data validation failed" };
  }

  return { status: 200, data: dataValidation.data };
};
