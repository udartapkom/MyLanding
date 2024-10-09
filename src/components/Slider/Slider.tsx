'use client'
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import styles from './Slider.module.scss'
import {IconContext} from "react-icons";
import {iSliders, slides} from "@/data/sliderData";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const Slider = () => {
    const [slide, setSlide] = useState(slides);
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (slideIndex < 0) {
            setSlideIndex(lastIndex)
        }
        if (slideIndex > lastIndex) {
            setSlideIndex(0);
        }
    }, [slideIndex, slides]);

    useEffect(() => {
        let slider = setInterval(() => setSlideIndex(prevState => prevState + 1), 3000);
        return () => {
            clearInterval(slider);
        }
    }, [slideIndex])

    return(
        <IconContext.Provider value={{style: {width: '36px', height: '36px', zIndex: 1}}}>
            <BiCaretLeft onClick={() => setSlideIndex(prevState => prevState - 1)} />
                <div className={styles.Slider}>

                    {
                        slide.map((item: iSliders, itemIndex: number) => {
                            const {id, title, text, image} = item;
                            let pos = '_nextSlide'
                            if (itemIndex === slideIndex) {
                                pos = '_activeSlide';
                            }
                            if (itemIndex === slideIndex - 1 || (slideIndex === 0 && slideIndex === slides.length - 1)) {
                                pos = '_lastSlide';
                            }
                            return (
                                <article className={`${styles.SlideArticle} ${styles[`SlideArticle${pos}`]}`} key={id}>
                                    <h3>{title}</h3>
                                    <img className={styles.SlideArticle_image} src={image}/>
                                </article>
                        )
                        })
                    }

                </div>
            <BiCaretRight onClick={() => setSlideIndex(prevState => prevState + 1)}/>
        </IconContext.Provider>
    )
}
export default Slider;