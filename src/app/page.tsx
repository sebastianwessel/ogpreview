import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Nothing here to see</h1>
      <div>
        <strong>
          <a href="https://purista.dev">Please visit purista.dev</a>
        </strong>
      </div>
    </main>
  );
}
