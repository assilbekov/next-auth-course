import { db } from "@/lib/db";


export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    return await db.twoFactorToken.findFirst({
      where: { token },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    return await db.twoFactorToken.findFirst({
      where: { email },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}