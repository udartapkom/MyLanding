import Image from "next/image";
import styles from "./page.module.scss";
import Info from "@/components/Info/Info";
export default function Home() {
  return (
    <main className={styles.main}>
      <Info />
    </main>
  );
}
