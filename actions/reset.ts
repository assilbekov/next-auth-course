"use server"

import * as z from "zod"
import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"


export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email) {
    return { error: "Email doesn't exist!" };
  }

  // TODO: generate token and send email

  return { success: "Reset email sent!" };
}
