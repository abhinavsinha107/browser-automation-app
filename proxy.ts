import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl
  const { userId } = await auth()

  const isSignInOrSignUp = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")

  // Redirect signed-in users away from /sign-in and /sign-up to the home route
  if (userId && isSignInOrSignUp) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // Protect all other routes if the user is not authenticated
  if (!userId && !isSignInOrSignUp) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}

