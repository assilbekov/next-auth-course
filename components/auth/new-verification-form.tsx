"use client"

import { BeatLoader } from "react-spinners"
import { CardWrapper } from "./card-wrapper"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "@/actions/new-verification"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"

export const NewVerificationForm = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Token not found")
      return
    }

    newVerification(token)
      .then((response) => {
        setError(response.error || "")
        setSuccess(response.success || "")
      })
      .catch(() => {
        setError("An error occurred")
      })
  }, [token])

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirming your email"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <div className="flex items-center w-full justify-center">
        {!error && !success && <BeatLoader />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  )
}