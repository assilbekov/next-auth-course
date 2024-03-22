import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  name: z.string().min(1, { message: "Name is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  passwordConfirmation: z.string(),
}).refine(
  data => data.password === data.passwordConfirmation,
  { message: "Passwords must match", path: ["passwordConfirmation"] }
);