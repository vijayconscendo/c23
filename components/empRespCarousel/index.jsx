import React, { useRef } from "react";
import styles from "./empRespCarousel.module.scss";

import Slider from "react-slick";
// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const EmpResponsibilitiesCarousel = ({ blok }) => {
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
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
        className={styles.empResponsibilitiesCarousel}
        {...storyblokEditable(blok)}
        id={blok?.id}
      >
        <div className={styles.sectionHeader}>
          <StoryblokComponent blok={blok?.sectionTitle?.[0]} />
          <div
            className={`flex flex-wrap justify-end gap-y-2 ${styles.arrows}`}
          >
            <button
              onClick={handlePrevClick}
              className="bg-white p-2 border-2 border-primary hover:bg-primary hover:text-white shadow-lg text-primary transition-all"
            >
              <ChevronLeft className="w-14 h-14  font-bold" />
            </button>
            <button
              onClick={handleNextClick}
              className="bg-white p-2  border-2 border-primary shadow-lg hover:bg-primary hover:text-white text-primary transition-all"
            >
              <ChevronRight className="w-14 h-14 font-bold" />
            </button>
          </div>
        </div>

        {/* ----- Carousel ----- */}
        <Slider {...settings} ref={sliderRef}>
          {blok?.carouselSection?.map((carousel) => (
            <div className={styles.carouselContainer} key={carousel?._uid}>
              {/* Top Block */}
              <div className={styles.preBlock}>
                <h2>{carousel?.carouselTitle}</h2>
                <p>{carousel?.carouselDesc}</p>
              </div>
              {carousel?.carouselCards?.length > 0 && (
                <div
                  className={`grid lg:grid-cols-2 ${styles.carouselCardGrid}`}
                >
                  {carousel.carouselCards.map((card, index) => (
                    <div
                      key={card._uid}
                      className={`${
                        index !== 0 ? "mt-6 md:mt-14 lg:mt-36" : ""
                      } ${styles.carouselCard}`}
                    >
                      <div className={styles.imageCard}>
                        <Image
                          className="w-full h-full"
                          src={card?.image}
                          alt="carouselImage"
                          width={400} // Adjust width/height as needed
                          height={300}
                        />
                      </div>
                      <div className={styles.contentCard}>
                        <div className={styles.contentCardHeader}>
                          <h3>{card?.heading}</h3>
                        </div>
                        <div className={styles.contentCardBody}>
                          <p>{card?.descriptio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Slider>
        {/* ----- End Carousel ----- */}
      </section>
    )
  );
};

export default EmpResponsibilitiesCarousel;
