"use client"

import { BeatLoader } from "react-spinners"
import { CardWrapper } from "./card-wrapper"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    //
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
      <p className="flex items-center w-full justify-center">
        <BeatLoader />
      </p>
    </CardWrapper>
  )
}