import {
    MutableRefObject,
    useMemo,
    useRef,
    forwardRef,
    RefAttributes,
    FC,
    useState,
    useEffect,
    ReactNode,
    Children
} from "react";
import styles from './RunningLine.module.scss';

type IRunningLine = {
    //скорость прокрутки, больше 100 не нужно.
    speed?: number
    //останавливать при наведении курсора
    stopOnHover?: boolean
    // размер шрифта
    fontSize?: number
    //напрвление слева направо или справа налево
    direction: string
    // тень выхода и ухода
    overlay?: boolean
    // цвет тени в HEX. Обычно это цвет фона
    overlayColor?: string
    // то, что будет крутиться в строке
    children: ReactNode
} & RefAttributes<HTMLDivElement>;

const RunningLine: FC<IRunningLine> = forwardRef(function RunningLine (
    {
        speed = 50,
        stopOnHover = true,
        fontSize = 24,
        direction = 'left',
        overlay = false,
        overlayColor = '#ffffff',
        children
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

        }), [
            duration,
            stopOnHover,
            fontSize,
            direction,
        ]
    )
    const overlayProperties = useMemo(() => ({
        ['--overlayColor' as string]: overlayColor,
    }), [overlayColor])

    return !isMounted ? null :(
        <div
            className={`${styles.RunningLine} ${styles.RunningLine_pause} `}
            ref={containerRef}>
            {overlay && <div
                className={styles.overlayStyle}
                style={overlayProperties}
            >
            </div>}
            <div className={styles.text}
                 style={rotatinText}
                 ref={marqueeRef}
            >
                {Children.map(children, (item) => {
                    return (<div> {item} </div>)
                })}
            </div>
            <div className={styles.text}
                 style={rotatinText}
                 aria-hidden="true">
                {Children.map(children, (item) => {
                    return (<div> {item} </div>)
                })}
            </div>
        </div>
    )
})
export default RunningLine;