"use client"

import { useEffect } from "react"
import styles from "../../styles/Home.module.css"
import { UsermavenClient, usermavenClient } from "@usermaven/sdk-js"
import Link from "next/link"

type APIResponse = {
  data: { name: string; message: string }
}
export default function Stats({ data }: APIResponse) {
  useEffect(() => {
    // If you want to send a custom event, you can do so in the useEffect hook
    // This method is the same as when using Next.js version 12
    const usermaven: UsermavenClient = usermavenClient({
      key: "UMHixXCh1k",
      tracking_host: "https://events.usermaven.com"
    })
    usermaven.track("custom", { name: "custom_event", message: "This is a custom event" })
    console.log("Usermaven custom event sent")
  })

  return (
    <div className={styles.main}>
      <h1>Some data has been fetched from the Next.js API</h1>
      <div className={styles.description}>A Usermaven "pageview" and "custom event" was just sent</div>
      <div className={styles.code}>name : {data.name}</div>
      <div className={styles.code}>message : {data.message}</div>
      <div className={styles.footer}>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  )
}
