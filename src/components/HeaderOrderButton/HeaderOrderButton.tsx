'use client'
import {OrderButton} from "@/ui-lib/buttons";

const HeaderOrderButton = () => {
    const HeaderOrderButtonClick = () => {
        alert('Заказать!')
    }
    return (
    <OrderButton text={'ЗАКАЗАТЬ'} onClick={HeaderOrderButtonClick} />
    )
}
export default HeaderOrderButton;