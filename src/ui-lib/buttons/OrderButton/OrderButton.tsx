import React, {FC} from "react";
import styles from "@/ui-lib/buttons/OrderButton/OrderButton.module.scss";

interface IMenuButton extends React.ComponentPropsWithoutRef<"button"> {
    text?: string
    buttonStyle?: 'defaultStyle' | 'noMarginStyle' | 'withMarginStyle'
    onClick?: () => void
}
const OrderButton: FC<IMenuButton>  = (
    {text = 'Заказать',
        onClick,
        buttonStyle,
        ...rest}) => {
    const buttonStyleClass = (style: any) => {
        switch (true) {
            case style === 'noMarginStyle':
                return styles.orderButton_noMargin;
            case style === 'withMarginStyle':
                return styles.orderButton_withMargin;
            default:
                return styles.orderButton_defaultStyle
        }
    }
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.orderButton} ${buttonStyleClass(buttonStyle)}`}
            {...rest}
        >
           <p>{text}</p>
        </button>
    )
}
export default OrderButton;