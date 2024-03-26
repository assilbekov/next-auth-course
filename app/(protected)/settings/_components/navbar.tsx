"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ButtonLinkProps {
  children: React.ReactNode
  href: string
}

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  const pathname = usePathname();
  return (
    <Button asChild variant={pathname === href ? "default" : "link"}>
      <Link href={href}>{children}</Link>
    </Button>
  )
}

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex items-center justify-between p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <ButtonLink href="/settings">Settings</ButtonLink>
        <ButtonLink href="/server">Server</ButtonLink>
        <ButtonLink href="/client">Client</ButtonLink>
        <ButtonLink href="/admin">Admin</ButtonLink>
      </div>
      <p>user button</p>
    </nav>
  )
}