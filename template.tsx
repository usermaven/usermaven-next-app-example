import { UsermavenAnalytics } from "./components/usermavenAnalytics"
import { Suspense } from "react"

// Since template.tsx is used by all pages, we can use it to initialize the Usermaven client
// and track page views on each page load and on each route change.
// This will ensure that the Usermaven client is initialized on all pages.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={null}>
        <UsermavenAnalytics />
      </Suspense>
      {children}
    </div>
  )
}
