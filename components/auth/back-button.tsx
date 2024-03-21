"use client"

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: React.ReactNode;
  href: string;
}

export const BackButton = ({
  label,
  href,
}: BackButtonProps) => {
  return (
    <Button
      size="lg"
      variant="link"
      className="w-full font-normal"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}