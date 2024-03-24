import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface User {
    role: UserRole;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    error: "/auth/error",
  },
  events: {
    async linkAccount({user}) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (existingUser) {
        token.role = existingUser.role;
      }

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})