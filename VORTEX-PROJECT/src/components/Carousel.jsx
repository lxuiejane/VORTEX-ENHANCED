import { useEffect, useRef, useCallback } from "react";
import "../styles/redirection.css";

// Image imports
import BlueLock from "../assets/images/BlueLock.png";
import JujutsuKaisen from "../assets/images/Jujutsu Kaisen.png";
import DemonSlayer from "../assets/images/DemonSlayer.png";
import BlackClover from "../assets/images/BlackClover.png";
import ChainsawMan from "../assets/images/Chainsaw Man.png";

// SVG imports
import LeftArrow from "../assets/images/left.svg";
import RightArrow from "../assets/images/right.svg";

const Carousel = () => {
    const slidesRef = useRef(null);

    const changeSlide = useCallback((offset) => {
        const slides = slidesRef.current;
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = "true";
        delete activeSlide.dataset.active;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 7000);

        return () => clearInterval(interval);
    }, [changeSlide]);

    const handleButtonClick = (direction) => {
        changeSlide(direction === "next" ? 1 : -1);
    };

    return (
        <section aria-label="Newest Photos">
            <div className="carousel" data-carousel>
                <ul data-slides ref={slidesRef}>
                    <li className="slide" data-active>
                        <img src={BlueLock} alt="Blue Lock" />
                    </li>
                    <li className="slide">
                        <img src={JujutsuKaisen} alt="Jujutsu Kaisen" />
                    </li>
                    <li className="slide">
                        <img src={DemonSlayer} alt="Demon Slayer" />
                    </li>
                    <li className="slide">
                        <img src={BlackClover} alt="Black Clover" />
                    </li>
                    <li className="slide">
                        <img src={ChainsawMan} alt="Chainsaw Man" />
                    </li>
                </ul>
            </div>
        </section >
    );
};

export default Carousel;
