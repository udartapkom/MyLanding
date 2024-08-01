import {
    MutableRefObject,
    useMemo,
    useRef,
    forwardRef,
    RefAttributes,
    FC,
    useState,
    useEffect, useCallback
} from "react";
import styles from './RunningLine.module.scss';
type IRunningLine = {
    //скорость прокрутки, больше 100 не нужно.
    speed?: number
    //останавливать при наведении курсора
    stopOnHover: boolean
    // размер шрифта
    fontSize?: number
    //напрвление слева направо или справа налево
    direction: string
} & RefAttributes<HTMLDivElement>;

const RunningLine: FC<IRunningLine> = forwardRef(function RunningLine (
    {
        speed = 50,
        stopOnHover = true,
        fontSize = 24,
        direction = 'left'
    },ref) {
    const [containerWidth, setContainerWidth] = useState(0);
    const [marqueeWidth, setMarqueeWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const containerRef = (ref as MutableRefObject<HTMLDivElement>) || rootRef;
    const marqueeRef = useRef<HTMLDivElement>(null);

    const calculateWidth =() => {
        if (containerRef.current && marqueeRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const marqueeRect = marqueeRef.current.getBoundingClientRect();
            const actualContainerWidth = containerRect.width;
            const actualMarqeeWidth = marqueeRect.width;
            setContainerWidth(actualContainerWidth);
            setMarqueeWidth(actualMarqeeWidth);
        }
    }

    useEffect(() => {
        if (!isMounted) return;
        calculateWidth();
    }, [isMounted]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const duration = useMemo(() => {
            return  marqueeWidth < containerWidth
                ? Math.round(containerWidth / speed )
                : Math.round( marqueeWidth / speed );

    }, [containerWidth, marqueeWidth, speed, isMounted]);

    const rotatinText = useMemo(() => ({
            ['--myFontSize' as string]: `${fontSize}px`,
            ['--speedScroll' as string]: `${duration}s`,
            ['--stopOnHover' as string]: stopOnHover ? "paused" : "running",
            ['--direction' as string]: direction === "left" ? "normal" : "reverse",
        }), [duration, stopOnHover, fontSize, direction]
    )

    return !isMounted ? null :(
        <div
            className={`${styles.RunningLine} ${styles.RunningLine_pause} `}
            ref={containerRef}>
            <div className={styles.text}
                 style={rotatinText}
                 ref={marqueeRef}>
                <div>
                    <span className={styles.RunningLine_element}>элемент прокрутки в диве</span>
                </div>
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
                 style={rotatinText}
                 aria-hidden="true">
                <div>
                    <span className={styles.RunningLine_element}>элемент прокрутки в диве</span>
                </div>
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