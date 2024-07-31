import { useMemo } from "react";
import styles from './RunningLine.module.scss';
const RunningLine = () => {

    const rotatinText = useMemo(() => ({
            ['--myFontSize' as string]: `24px`
        }), [2]
    )

    return (
        <div className={styles.RunningLine}>
            <p  className={styles.RunningLine}
                style={rotatinText}>
                Какя - то бегущая хня!
            </p>
        </div>
    )
}
export default RunningLine;