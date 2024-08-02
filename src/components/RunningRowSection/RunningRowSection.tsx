'use client'
import styles from './RunningRowSection.module.scss';
import RunningLine from "@/components/RunningLine/RunningLine";
import RunningCard from "@/components/RunningCard/RunningCard";
const RunningRowSection = () => {
    return (
        <section className={styles.RunningRowSection}>
            <h2 className={styles.RunningRowSection_header}>Применяемые технологии</h2>
            <RunningLine
                speed={150}
                stopOnHover={true}
                fontSize={24}
                direction={'right'}
                overlay={true}
                overlayColor={'#0e192f'}
            >
                <RunningCard />
                <span>Первый элемент прокрутки</span>
                <span>Второй элемент прокрутки</span>
                <span>Третий элемент прокрутки</span>
                <span>Четвёртый элемент прокрутки</span>
                <span>Пятый элемент прокрутки</span>
                <span>Шестой элемент прокрутки</span>
                <span>Седьмой элемент прокрутки</span>
                <span>Восьмой элемент прокрутки</span>
            </RunningLine>
            <RunningLine
                speed={40}
                stopOnHover={true}
                fontSize={18}
                direction={'left'}
                overlay={false}
            >
                <RunningCard />
                <span>Первый элемент прокрутки</span>
                <span>Второй элемент прокрутки</span>
                <span>Третий элемент прокрутки</span>
                <span>Четвёртый элемент прокрутки</span>
                <span>Пятый элемент прокрутки</span>
                <span>Шестой элемент прокрутки</span>
                <span>Седьмой элемент прокрутки</span>
                <span>Восьмой элемент прокрутки</span>
            </RunningLine>
        </section>
    )
}
export default RunningRowSection;