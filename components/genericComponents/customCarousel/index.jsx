import React, { useRef } from "react";
import Slider from "react-slick";

import styles from "./customCarousel.module.scss";

// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

// Custom Arrow Component
const PrevArrow = ({ onClick }) => (
  <button
    className={`${styles.customArrow} ${styles.customArrowLeft}`}
    onClick={onClick}
  >
    Left
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className={`${styles.customArrow} ${styles.customArrowRight}`}
    onClick={onClick}
  >
    Right
  </button>
);

const CustomCarousel = ({ logos }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "90px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  // Function to handle next button click
  const handleNext = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };

  // Function to handle previous button click
  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={`${styles.sliderContainer}`}>
        <Slider ref={sliderRef} {...settings}>
          {logos.map((logo, i) => (
            <div key={i}>
              <div className={styles.slideCard}>
                <Image src={logo?.src} alt={logo?.alt} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <PrevArrow onClick={handlePrev} />
      <NextArrow onClick={handleNext} /> */}
    </div>
  );
};

export default CustomCarousel;
