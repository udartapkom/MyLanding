'use client'
import styles from "./SliderSection.module.scss";
import Slider from "../Slider/Slider"
const SliderSection = () => {
  return (
      <section className={styles.SliderSection}>
        <Slider />
      </section>
  );
};
export default SliderSection;
