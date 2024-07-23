import styles from "./header.module.scss";
import Image from "next/image";
import backImg from "../../../public/backgrounds/backHeader.jpg";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import HeaderOrderButton from "@/components/HeaderOrderButton/HeaderOrderButton";
const Header = () => {
    return(
        <header
            className={styles.header}>
            <Image
                loading="lazy"
                src={backImg}
                alt="header image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    zIndex: "-1",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute"}}
            />
           <HeaderMenu />
            <div className={styles.header_headContainer}>
                <h3 className={styles.header_head}>Закажите</h3>
                <h3 className={styles.header_headBlue}>лендинг</h3>
            </div>
            <p className={styles.header_text}>и получите профессиональный сайт,
                который повысит узнаваемость вашего бренда и увеличит продажи!</p>
            <HeaderOrderButton />
        </header>
    )
}
export default Header;
