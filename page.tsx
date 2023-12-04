import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Example of Usermaven in Next.js 13</h1>
      <div className={styles.description}>Open the console to see the events fired</div>
      <div className={styles.footer}>
        <Link href="/dashboard">
          Click here to see the events fired on a new page. Check the console
        </Link>
      </div>
    </main>
  )
}
