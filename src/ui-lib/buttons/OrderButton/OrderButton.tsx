import React, {FC} from "react";
import styles from "@/ui-lib/buttons/OrderButton/OrderButton.module.scss";

interface IMenuButton extends React.ComponentPropsWithoutRef<"button"> {
    text: string
    onClick: () => void
}
const OrderButton: FC<IMenuButton>  = ({text, onClick, ...rest}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={styles.orderButton}
            {...rest}
        >
           <p>{text}</p>
        </button>
    )
}
export default OrderButton;