'use client'
import styles from './RunningRowSection.module.scss';
import RunningLine from "@/components/RunningLine/RunningLine";
const RunningRowSection = () => {
    return (
        <section className={styles.RunningRowSection}>
            <h2 className={styles.RunningRowSection_header}>Применяемые технологии</h2>
            <RunningLine
                speed={100}
                stopOnHover={true}
                fontSize={18}
                direction={'right'}
            />
            <RunningLine
                speed={40}
                stopOnHover={true}
                fontSize={18}
                direction={'left'}
            />
        </section>
    )
}
export default RunningRowSection;