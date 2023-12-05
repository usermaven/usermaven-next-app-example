# Getting Started with Usermaven and Next.js 13 App Router

This project shows how to track events with Usermaven and Next.js 13 App Router using Usermaven JS SDK.

If you want to learn more about Next.js 13 App Router, check out the [official documentation](https://nextjs.org/docs/app/api-reference/functions/use-router). If you want to learn about tracking events in Next.js 12 or the pages router, check out this [repository](https://github.com/usermaven/usermaven-next-example). 

The first thing you want to do is to install the usermaven-sdk-js library in your project - so add it using your package manager:

`yarn add @usermaven/sdk-js`

or

`npm install --save @usermaven/sdk-js`

## Using Usermaven JS SDK

There are multiple ways to use the Usermaven JS SDK in your Next.js project. We will show you two ways to do so:

1. Use the `template` file in the `app` folder as a client component. Follow the steps in [Using Template as a Client Component](#using-template-as-a-client-component) to do so.
2. Use the `template` file in the `app` folder as a server component. Follow the steps in [Using Template as a Server Component](#using-template-as-a-server-component). The example in this repository uses this method.

## Using Template as a Client Component

This uses the `template` file in the `app` folder as a client component. If you do not have any features that require server side rendering e.g. data fetching from an API, you can use the `template` file as a client component.

To do so, initialize the Usermaven instance in `app/template.js` or `app/template.tsx`

### For Typescript

```ts
"use client" // This is required to use the client side hooks such as usePathname and useSearchParams

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { UsermavenClient, usermavenClient } from "@usermaven/sdk-js"

// Since template.tsx is used by all pages, we can use it to initialize the Usermaven client
// and track page views on each page load and on each route change.

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    const usermaven: UsermavenClient = usermavenClient({
      key: "UMHixXCh1k",
      tracking_host: "https://events.usermaven.com"
    })

    // Track page views called on each page load and on each route change
    usermaven.track("pageview")
    console.log("Usermaven pageview event sent for url: " + url)
  }, [pathname, searchParams])
  return <div>{children}</div>
}
```

### For Javascript

```js
"use client" // This is required to use the client side hooks such as usePathname and useSearchParams

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { usermavenClient } from "@usermaven/sdk-js"

// Since template.js is used by all pages, we can use it to initialize the Usermaven client
// and track page views on each page load and on each route change.

export default function Template({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    const usermaven = usermavenClient({
      key: "UMHixXCh1k",
      tracking_host: "https://events.usermaven.com"
    })

    // Track page views called on each page load and on each route change
    usermaven.track("pageview")
    console.log("Usermaven pageview event sent for url: " + url)
  }, [pathname, searchParams])

  return <div>{children}</div>
}
```

## Using Template as a Server Component

By default `template` is a server component in Next.js. If you want to use it as a server component, follow the steps below:

1. Create a file called `usermavenAnalytics.tsx` in the `app/components` folder.
2. Add the following code to the file:

```ts
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { UsermavenClient, usermavenClient } from "@usermaven/sdk-js"

export function UsermavenAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    const usermaven: UsermavenClient = usermavenClient({
      key: "UMHixXCh1k",
      tracking_host: "https://events.usermaven.com"
    })

    // Track page views called on each page load and on each route change
    usermaven.track("pageview")
    console.log("Usermaven pageview event sent for url: " + url)
  }, [pathname, searchParams])

  return null
}
```

3. Import the `UsermavenAnalytics` component in `app/template.tsx` and add it to the `Template` component:

```ts
import { UsermavenAnalytics } from "./components/usermavenAnalytics"
import { Suspense } from "react"

// Since template.tsx is used by all pages, we can use it to initialize the Usermaven client
// and track page views on each page load and on each route change.
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
```
