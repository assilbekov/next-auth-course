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
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user.id}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user.name}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user.role}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user.email}</p>
        </div>
        <LogoutButton>Sign out</LogoutButton>
      </CardContent>
    </Card>
  )
}