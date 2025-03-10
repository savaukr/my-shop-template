import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Page 1
      </main>
      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  );
}
