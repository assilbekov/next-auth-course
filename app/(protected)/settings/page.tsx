"use client"

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function SettingsPage() {
  const session = useSession();

  const onClick = () => {
    logout();
  }

  return (
    <div>
      <h1>Settings page</h1>
      <p>{JSON.stringify(session)}</p>
      <Button onClick={onClick}>Sign out</Button>
    </div>
  )
}