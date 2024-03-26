import { auth } from "@/auth"

export default async function Page() {
  const session = await auth();

  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="bg-white p-10 rounded-xl">
        <h1>Protected page</h1>
        <p>Some content</p>
      </div>
    </div>
  )
}