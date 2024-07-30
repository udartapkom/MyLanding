'use client'
import {OrderButton} from "@/ui-lib/buttons";

const HeaderOrderButton = () => {
    const HeaderOrderButtonClick = () => {
        alert('Заказать!')
    }
    return (
    <OrderButton
        text={'ЗАКАЗАТЬ'}
        onClick={HeaderOrderButtonClick}
        buttonStyle={'withMarginStyle'}
    />
    )
}
export default HeaderOrderButton;