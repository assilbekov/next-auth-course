"use client"

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("Clicked login button");
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}