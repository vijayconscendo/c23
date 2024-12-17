import React from "react";
import Slider from "react-slick";

// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./teamExpertise.module.scss";

// Animation
import { motion } from "framer-motion";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

const TeamExpertise = ({ blok }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // Animation Variants
  const animateRtoL = {
    hidden: { opacity: 0, x: "60%" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section
      className={`overflow-hidden ${styles.teamExpertise}`}
      {...storyblokEditable(blok)}
    >
      {blok?.title?.[0] && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{
            once: true,
          }}
          variants={animateRtoL}
        >
          <StoryblokComponent
            blok={blok.title[0]}
            {...storyblokEditable(blok.title[0])}
          />
        </motion.div>
      )}

      {/* ----- Expertise Slider ----- */}
      <div className={styles.carouselContainer}>
        {blok?.data?.length > 0 && (
          <div className="team-expertise -mx-5">
            <Slider {...settings} className={styles.expertiseSlider}>
              {blok.data.map((item, index) => (
                <div key={index} className="h-full px-5">
                  <div className={styles.slickItem}>
                    <ImageWrapper
                      blok={item?.blocks?.[0] || item}
                      altText={item?.title}
                      width={150}
                      height={100}
                      {...storyblokEditable(item?.blocks?.[0] || item)}
                    />
                    <span>{item?.title}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamExpertise;
