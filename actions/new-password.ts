"use server"

import * as z from "zod"
import bcrypt from "bcryptjs"
import { NewPasswordSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { getPasswordResetTokenByToken } from "@/data/password-reset-token"
import { db } from "@/lib/db"


export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token: string) => {
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return { error: "Token doesn't exist" }
  }

  const { password } = validatedFields.data;

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: "Token has expired" }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: "User doesn't exist" }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.user.update({
    where: { email: existingToken.email },
    data: { password: hashedPassword },
  })

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  })

  return { success: "Password reset successfully" }
}
