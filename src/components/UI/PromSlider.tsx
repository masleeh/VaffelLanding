import { motion } from "framer-motion";
import { useState } from "react";

type PromSlides = {
    slides: string[]
}

const PromSlider = ({slides}: PromSlides) => {
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

    


    return (
        <>
            <div className="prom_slider">
                <button className="prom_slider_btn" onClick={() => prevSlide()}>
                    <img src='/icons/arrow-left.svg'/>
                </button>
                <motion.div className="prom_slider_img_cont">
                    <motion.img />
                </motion.div>
                <button className="prom_slider_btn" onClick={() => nextSlide()}>
                    <img src='/icons/arrow-right.svg'/>
                </button>
            </div>

            <div className="prom_slider_dot_row">
                {slides.map((_, index) => {
                    return <img src={index === activeDot ? "/icons/dot-act.svg" : "/icons/dot-dis.svg"} alt=""/>
                })}
            </div>
        </>
    )
}

export default PromSlider