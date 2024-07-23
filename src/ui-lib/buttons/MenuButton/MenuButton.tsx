import React, {FC} from "react";
import styles from "./MenuButton.module.scss";
interface IMenuButton extends React.ComponentPropsWithoutRef<"button"> {
    text: string
    onClick: () => void
}
const MenuButton: FC<IMenuButton> = ({text, onClick, ...rest}) => (
    <button
        type="button"
        className={styles.button}
        onClick={onClick}
        {...rest}
    >
        <p className={styles.button_text}>{text}</p>
    </button>

)
export default MenuButton;