'use client'
import styles from './RunningRowSection.module.scss';
import RunningLine from "@/components/RunningLine/RunningLine";
const RunningRowSection = () => {
    return (
        <section className={styles.RunningRowSection}>
            <h2 className={styles.RunningRowSection_header}>Применяемые технологии</h2>
            <RunningLine />
        </section>
    )
}
export default RunningRowSection;