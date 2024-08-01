/*
 speed={50}  -  скорость прокрутки
 stopOnHover={true} - останавливать при наведении курсора
*/
import {
    MutableRefObject,
    useMemo,
    useRef,
    forwardRef,
    RefAttributes,
    FC,
    useState,
    useEffect
} from "react";
import styles from './RunningLine.module.scss';
type IRunningLine = {
    speed: number
    stopOnHover: boolean
} & RefAttributes<HTMLDivElement>;

const RunningLine: FC<IRunningLine> = forwardRef(function RunningLine (
    {
        speed,
        stopOnHover = true
    },ref) {
    const [containerWidth, setContainerWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const rootRef = useRef<HTMLDivElement>(null);
    const containerRef = (ref as MutableRefObject<HTMLDivElement>) || rootRef;
    const marqueeRef = useRef<HTMLDivElement>(null);

    const rotatinText = useMemo(() => ({
            ['--myFontSize' as string]: `24px`,
            ['--speedScroll' as string]: Math.round(containerWidth / speed) + 's',
            ['--stopOnHover' as string]: stopOnHover ? "paused" : "running",
        }), [speed, stopOnHover]
    )
    const calculateWidth = () => {
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const actualContainerWidth = containerRect.width;
            setContainerWidth(actualContainerWidth);
        }
    }
    useEffect(() => {
        if (!isMounted) return;
        calculateWidth();
    }, [isMounted]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return !isMounted ? null :(
        <div
            className={`${styles.RunningLine} ${styles.RunningLine_pause} `}
            ref={containerRef}>
            <div className={styles.text}
                 style={rotatinText}>
                <span className={styles.RunningLine_element}>Первый элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Второй элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Третий элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Четвёртый элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Пятый элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Шестой элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Седьмой элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Восьмой элемент прокрутки</span>
            </div>
            <div className={styles.text}
                 style={rotatinText} aria-hidden="true">
                <span className={styles.RunningLine_element}>Первый элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Второй элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Третий элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Четвёртый элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Пятый элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Шестой элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Седьмой элемент прокрутки</span>
                <span className={styles.RunningLine_element}>Восьмой элемент прокрутки</span>
            </div>
        </div>
    )
})
export default RunningLine;