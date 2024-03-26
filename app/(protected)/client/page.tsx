"use client"

import { UserInfo } from "@/components/user-info"
import { useCurrentUser } from "@/hooks";

export default function Page() {
  const user = useCurrentUser();

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <UserInfo user={user} label="Client page component" />
  )
}