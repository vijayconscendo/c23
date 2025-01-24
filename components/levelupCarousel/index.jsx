import React, { useRef } from "react";
import SectionTitle from "../genericComponents/title";
import styles from "./levelupCarousel.module.scss";

// Images
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slider from "react-slick";
// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { storyblokEditable } from "@storyblok/react";

const LevelupCarousel = ({ blok }) => {
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  const handlePrevClick = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };
  return (
    blok?._uid && (
      <section
        className={styles.levelupCarousel}
        {...storyblokEditable(blok)}
        id={blok?.id}
      >
        <div className={styles.sectionHeader}>
          {blok?.title?.[0] && <SectionTitle blok={blok?.title?.[0]} />}

          <div className={`${styles.longContent}`}>
            <h3>{blok?.contentTitle} </h3>
            <p>{blok?.contentDesc}</p>
          </div>
        </div>

        {/* Carousel */}
        <div className={styles.fullWidthCarousel}>
          <div className={styles.arrows}>
            <button
              onClick={handlePrevClick}
              className="bg-primary p-2 border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg transition-all"
            >
              <ChevronLeft className="w-14 h-14 font-bold" />
            </button>
            <button
              onClick={handleNextClick}
              className="bg-primary p-2  border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg  transition-all"
            >
              <ChevronRight className="w-14 h-14  font-bold" />
            </button>
          </div>
          <span id={blok?.employeeTestimonialsId}>
            <Slider {...settings} ref={sliderRef}>
              {blok?.carouselBlock?.length > 0 &&
                blok.carouselBlock.map((item) => (
                  <div className={styles.carouselContainer} key={item?._uid}>
                    <div className={styles.imageAndtext}>
                      <Image
                        className={`w-full h-auto ${styles.levelImage}`}
                        src={item?.carouselImage}
                        width={396}
                        height={320}
                        alt="level image"
                      />
                      <div className={styles.content}>
                        <h3>{item?.carouselTitle}</h3>
                        <p>{item?.carouselDesc}</p>
                      </div>
                    </div>
                    <div
                      className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${styles.slidewhiteCardGrid}`}
                    >
                      {item?.carouselCards?.length > 0 &&
                        item?.carouselCards.map((card) => (
                          <div
                            className={styles.slidewhiteCard}
                            key={card?._uid}
                          >
                            <h4>{card?.heading}</h4>
                            <p>{card?.descriptio}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </Slider>
          </span>
        </div>
      </section>
    )
  );
};

export default LevelupCarousel;
