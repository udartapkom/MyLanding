import {FC, PropsWithChildren, ReactNode} from "react";
import styles from './RunningCard.module.scss';
interface IRunnigCard extends PropsWithChildren{
    text?: string
}
const RunningCard: FC<IRunnigCard> = ({text, children}) => {
    return (
        <div className={styles.RunningCard}>
                {children}
             <p className={styles.RunningCard_text}>{text}</p>
        </div>
    )
}
export default RunningCard;
