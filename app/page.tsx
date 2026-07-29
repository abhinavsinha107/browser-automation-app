import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <UserButton />
    </div>
  )
}

