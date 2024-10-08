'use client'
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import styles from "./SliderSection.module.scss";
import { IconContext } from "react-icons";

const SliderSection = () => {
  return (
    <IconContext.Provider value={{ size: "36px" }}>
      <section className={styles.SliderSection}>
        <BiCaretLeft className={styles.Arrow} />
        <p>Здесь слайдер</p>
        <BiCaretRight />
      </section>
    </IconContext.Provider>
  );
};
export default SliderSection;
