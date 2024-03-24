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

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificatonToken = await db.verificationToken.findUnique({ where: { token } })

    return verificatonToken
  } catch (error) {
    console.error(error)
    return null;
  }
}