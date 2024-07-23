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
                borderRadius: "12px"}}
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
                <div className={styles.info_what}>
                    <h2 className={styles.info_whatHead}>Какие бывают</h2>
                    <h2 className={styles.info_whatHeadBlue}>лендинги:</h2>
                </div>
                <ul className={styles.list}>
                    <li className={styles.list_element}>
                        <h3 className={styles.list_HeaderElement}>Продающие</h3>
                        <p className={styles.list_text}>
                            Это сайт,
                            который содержит информацию о продукте или услуге и мотивирует посетителя совершить целевое действие:
                            купить товар,
                            подписаться на услугу,
                            зарегистрироваться на мероприятие</p>
                    </li>
                    <li className={styles.list_element}>
                        <h3 className={styles.list_HeaderElement}>Вирусные</h3>
                        <p className={styles.list_text}>
                            Это сайт с привлекательным дизайном и лаконичным текстом,
                            который быстро распространяется через социальные сети.
                            Он содержит призыв к действию,
                            побуждающий пользователя поделиться им с друзьями</p>
                    </li>
                    <li className={styles.list_element}>
                        <h3 className={styles.list_HeaderElement}>Квизы</h3>
                        <p className={styles.list_text}>Это страница,
                            на которой пользователи проходят тест или викторину.
                            Вопросы квиза помогают определить потребности потенциальных клиентов.
                            После прохождения квиза пользователь получает персональное предложение от компании</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Info;