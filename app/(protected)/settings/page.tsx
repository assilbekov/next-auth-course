"use client"

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks";

export default function SettingsPage() {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  }

  return (
    <div className="bg-white p-10 rounded-xl">
      <h1>Settings page</h1>
      <p>{JSON.stringify(user)}</p>
      <Button onClick={onClick}>Sign out</Button>
    </div>
  )
}