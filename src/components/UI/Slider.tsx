import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const images = [
    { src: "/images/slide1.jpg", title: "доступная цена" },
    {
        src: "/images/slide3.jpg",
        title: "стильная сервировка ",
    },
    {
        src: "/images/slide2.jpg",
        title: "принимаем заказ за 6 часов до мероприятия",
    },
];

const Slider = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(
            carousel.current!.scrollWidth - carousel.current!.offsetWidth + 40
        );
    }, [window.innerWidth]);

    return (
        <motion.div
            ref={carousel}
            className="slider-cont"
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="slider"
            >
                {images.map((image, index) => {
                    return (
                        <motion.div className="slider-item" key={index}>
                            <img src={image.src} alt="" className="slider-item-image"/>
                            <div className="slider-row">
                                <img alt="" src='/icons/vaf_ico.png' className="slider-row-image"/>
                                <h4 className="slider-row-title">{image.title}</h4>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default Slider;
