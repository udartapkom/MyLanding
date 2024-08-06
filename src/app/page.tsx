import Image from "next/image";
import styles from "./page.module.scss";
import Info from "@/components/Info/Info";
import ActionTime from "@/components/ActionTime/ActionTime";
import RunningRowSection from "@/components/RunningRowSection/RunningRowSection";
import OrderSection from "@/components/OrderSection/OrderSection";
export default function Home() {
  return (
    <main className={styles.main}>
        <ActionTime />
        <Info />
        <RunningRowSection />
        <OrderSection />
    </main>
  );
}
