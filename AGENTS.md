<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Clerk Authentication Route Protection Pattern

- Perform centralized path checks directly inside the middleware (`proxy.ts`) without using the deprecated `createRouteMatcher` API.
- Redirect authenticated users away from `/sign-in` and `/sign-up` to the home route `/`, and protect all other routes via the middleware.

