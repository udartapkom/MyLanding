import styles from "./header.module.scss";
import Image from "next/image";
import backImg from "../../../public/BackgroundHeader.jpg";
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
                style={{zIndex: "-1", width: "100%", height: "auto", objectFit: "contain", position: "absolute"}}
            />
            <p className={styles.Header__text}>Основной хедер</p>
        </header>
    )
}
export default Header;
