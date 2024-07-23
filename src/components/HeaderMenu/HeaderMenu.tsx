'use client'
import styles from './HeaderMenu.module.scss';
import { MenuButton } from "@/ui-lib/buttons";

const HeaderMenu = () => {
const constructorClick = () => {
    alert("конструктор!")
}
return (
    <menu className={styles.headerMenu}>
        <MenuButton text={'Конструктор'} onClick={constructorClick} />
        <MenuButton text={'Цены'} onClick={constructorClick} />
    </menu>
    )
}
export default HeaderMenu;
