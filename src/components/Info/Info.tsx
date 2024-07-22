import Image from "next/image";
import backImg from "../../../public/backgrounds/backInfo.jpg";
import styles from "./Info.module.scss";
const Info = () => {
    return(
        <section className={styles.info}>
            <Image
            loading="lazy"
            src={backImg}
            alt="header image"
            width={0}
            height={0}
            sizes="100vw"
            style={{zIndex: "-1",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                position: "absolute",
                borderRadius: "10px"}}
            />
            <div className={styles.info_container}>
                <div className={styles.info_head}>
                    <h2 className={styles.info_header}>Что такое лендинг?</h2>
                    <p className={styles.info_text}>Лендинг — это сайт,
                        который содержит информацию об одном продукте или услуге.
                        Его задача — побудить посетителя совершить целевое действие:
                        купить товар, подписаться на рассылку,
                        оставить заявку на консультацию и т. д.
                        Лендинги помогают компаниям продвигать свои продукты и услуги,
                        а также собирать контактные данные потенциальных клиентов.</p>
                </div>
                <div></div>
            </div>
        </section>
    )
}
export default Info;