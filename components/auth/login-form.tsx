"use client"

import * as z from "zod"
import Link from "next/link";
import { useForm } from "react-hook-form"
import { CardWrapper } from "./card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError = searchParams.get("error") === "OAuthAccountNotLinkedError" ?
    "This account is not linked to any user. Please sign in with the correct provider." :
    ""

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error)
            return
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }

          if (data?.success) {
            setSuccess(data?.success)
          }
        })
        .catch((error) => {
          console.error(error)
          setError("An error occurred!")
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            {!showTwoFactor ? (
              <>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          disabled={isPending}
                          className="w-full"
                          placeholder="john.doe@example.com"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          disabled={isPending}
                          className="w-full"
                          placeholder="******"
                        />
                      </FormControl>
                      <Button size="sm" variant="link" asChild className="px-0 font-normal">
                        <Link href="/auth/reset">Forgot password?</Link>
                      </Button>
                      <FormMessage>
                        {form.formState.errors.password?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </>
            ) : (
              <FormField
                name="code"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two-factor code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        disabled={isPending}
                        className="w-full"
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.code?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {showTwoFactor ? "Verify" : "Sign in"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}