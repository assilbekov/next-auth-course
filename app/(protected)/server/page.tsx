import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <UserInfo
      user={user}
      label="Server component"
    />
  )
}