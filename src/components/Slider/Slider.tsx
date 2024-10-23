'use client'
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import styles from './Slider.module.scss'
import {IconContext} from "react-icons";
import {iSliders, slides} from "@/data/sliderData";
import {useEffect, useMemo, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {EllipseSlideIcon} from "@/ui-lib/icons";


const Slider = () => {
    const [slide, setSlide] = useState(slides);
    const [slideIndex, setSlideIndex] = useState(0);
    const [backGradient, setBackGradient] = useState(
        'linear-gradient(100deg, #FF3586 0%, #13B0F3 50%, #FF3586 100%)')
    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (slideIndex < 0) {
            setSlideIndex(lastIndex)
        }
        if (slideIndex > lastIndex) {
            setSlideIndex(0);
           // setBackGradient('linear-gradient(100deg, #FF3586 0%, #13B0F3 50%, #FF3586 100%)')
        }
    }, [slideIndex, slides]);

   useEffect(() => {
        let slider = setInterval(() => setSlideIndex(prevState => prevState + 1), 5000);
        return () => {
            clearInterval(slider);
        }
    }, [slideIndex])
    const sliderBackColor = useMemo(
        () => ({
                ["--backColorGradient" as string]: backGradient,
            }), [backGradient]
    )
    return(
        <IconContext.Provider value={{style: {width: '36px', height: '36px', zIndex: 1}}}>
            <div className={styles.Slider_content}>
            <BiCaretLeft onClick={() => setSlideIndex(prevState => prevState - 1)}/>
                <div className={styles.Slider_info}>
            <div className={styles.Slider} style={sliderBackColor}>
                {
                    slide.map((item: iSliders, itemIndex: number) => {
                        const {id, title, text, image} = item;
                        let pos = '_nextSlide'
                        if (itemIndex === slideIndex) {
                            pos = '_activeSlide';
                        }
                        if (itemIndex === slideIndex - 1 || (slideIndex === 0 && itemIndex === slides.length - 1)) {
                            pos = '_lastSlide';
                        }
                        return (
                            <article className={`${styles.SlideArticle} ${styles[`SlideArticle${pos}`]}`} key={id}>
                                <h3 className={styles.SlideArticle_title}>{title}</h3>
                                <div className={styles.Slider_container}>
                                    <img className={styles.SlideArticle_image} src={image} alt='image'/>
                                    <p className={styles.SlideArticle_text}>{text}</p>
                                </div>
                            </article>
                    )
                    })
                }
            </div>
            <div className={styles.Slider_buttons}>
            {
                slide.map(() => {
                    return (
                        <div className={styles.Slider_button} key={uuidv4()}>
                            <EllipseSlideIcon />
                        </div>
                    )
                })
            }
            </div>
                </div>
                <BiCaretRight onClick={() => setSlideIndex(prevState => prevState + 1)}/>
            </div>
        </IconContext.Provider>
)
}
export default Slider;