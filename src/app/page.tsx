import Image from "next/image";
import styles from "./page.module.scss";
import Info from "@/components/Info/Info";
import ActionTime from "@/components/ActionTime/ActionTime";
import RunningRowSection from "@/components/RunningRowSection/RunningRowSection";
export default function Home() {
  return (
    <main className={styles.main}>
      <Info />
      <ActionTime />
      <RunningRowSection />
    </main>
  );
}
