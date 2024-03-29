import Link from "next/link";
import styles from "./page.module.css";
import { ibm } from "./lib/fonts";

export default function Home() {
  return (
    <main className={`${ibm.className} antialised`}>
      <p className={`${styles.title}`}>APP</p>
      <ul>
        <li>
          <Link href="/login">Go to log in</Link>
        </li>
        <li>
          <Link href="/signup">Go to sign up</Link>
        </li>
        <li>
          <Link href="/dashboard">Go to dashboard</Link>
        </li>
      </ul>
    </main>
  );
}
