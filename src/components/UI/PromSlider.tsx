import { motion } from "framer-motion";
import { useState } from "react";
import { TSeason } from "../../types/Data";

type PromSlides = {
    slides: TSeason[]
}

const PromSlider = ({slides = [{image_link: ""}]}: PromSlides) => {
    const [activeDot, setActiveDot] = useState<number>(0)

    const nextSlide = () => {
        if (activeDot === (slides.length - 1)) {
            setActiveDot(0)
        } else {
            setActiveDot(activeDot + 1)
        }
    }

    const prevSlide = () => {
        if (activeDot === 0) {
            setActiveDot(slides.length - 1)
        } else {
            setActiveDot(activeDot - 1)
        }
    }

    const renderedSlides = slides.map((slide, index) => {
        return <motion.img 
            initial={{opacity: 0, x: 300}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -300}}
            key={index} alt="" src={slide.image_link}/>
    })


    return (
        <>
            <div className="prom_slider">
                <button className="prom_slider_btn" onClick={() => prevSlide()}>
                    <img src='/icons/arrow-left.svg'/>
                </button>
                <motion.div className="prom_slider_img_cont">
                    {renderedSlides[activeDot]}
                </motion.div>
                <button className="prom_slider_btn" onClick={() => nextSlide()}>
                    <img src='/icons/arrow-right.svg'/>
                </button>
            </div>

            <div className="prom_slider_dot_row">
                {slides.map((_, index) => {
                    return <img key={index} src={index === activeDot ? "/icons/dot-act.svg" : "/icons/dot-dis.svg"} alt=""/>
                })}
            </div>
        </>
    )
}

export default PromSlider