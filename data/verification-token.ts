import { db } from "@/lib/db"


export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificatonToken = await db.verificationToken.findFirst({ where: { email } })

    return verificatonToken
  } catch (error) {
    console.error(error)
    return null;
  }
}