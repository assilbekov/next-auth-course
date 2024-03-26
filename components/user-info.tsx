import { UserRole } from "@prisma/client";
import { User } from "next-auth";
import { LogoutButton } from "./auth/logout-button";
import { Card, CardContent, CardHeader } from "./ui/card";


export type ExtendedUser = User & {
  role: UserRole;
}

interface UserInfoProps {
  user: ExtendedUser
  label: React.ReactNode
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          {label}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-500">{user.role}</p>
      </CardContent>
      <LogoutButton>Sign out</LogoutButton>
    </Card>
  )
}