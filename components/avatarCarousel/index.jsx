import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

// Animation
import { motion } from "framer-motion";

// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./avatarCarousel.module.scss";

import Link from "next/link";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

function AvatarCarousel({ blok }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
    setNav3(sliderRef3.current);
  }, []);

  // Animate Varients
  const animateLtoR = {
    hidden: { opacity: 0, x: -100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, x: 0 }, // Final position when visible
  };
  const animateRtoL = {
    hidden: { opacity: 0, x: 100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, x: 0 }, // Final position when visible
  };
  const boxVariantsTopToBottom = {
    hidden: { opacity: 0, y: -100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, y: 0 }, // Final position when visible
  };

  return (
    <div
      className={styles.carouselSection}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] mt-10 overflow-hidden">
        <div className="lg:col-span-7 flex flex-col justify-between h-full ">
          {/* --------Avatar Buttons Slider Start-------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animateLtoR}
            transition={{ duration: 1 }}
            viewport={{
              once: true, // Animation will trigger only once
              amount: 0.5, // Animation will trigger when 50% of the element is in view
              offset: { top: "50%", bottom: "50%" }, // Trigger when the element is 50% from the top and bottom of the viewport
            }}
          >
            <Slider
              asNavFor={nav2}
              ref={sliderRef1}
              // slidesToShow={5}
              slidesToScroll={1}
              swipeToSlide={true}
              focusOnSelect={true}
              speed={1000}
              dots={false}
              arrows={false}
              centerMode={false}
              infinite={false}
              variableWidth={true}
              autoplay={true}
              loop={true}
              // draggable={false}
              // swipe={false}
              // lazyLoad={true}
              className="life-at-carousel-one"
            >
              {blok?.data?.length > 0 &&
                blok.data.map((item) => (
                  <div key={item?._uid}>
                    <div className={`imageAvatar ${styles.imageAvatar}`}>
                      <ImageWrapper
                        className="rounded"
                        blok={item?.image?.[0]}
                        altText="slideOne"
                        width={130}
                        height={130}
                        {...storyblokEditable(item?.image?.[0])}
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </motion.div>
          {/* --------./Avatar Buttons Slider End-------- */}

          {/* --------Content Carousel Slider Start-------- */}
          <div className="mt-10 sm:mt-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animateRtoL}
              transition={{ duration: 1 }}
              viewport={{
                once: true, // Animation will trigger only once
                amount: 0.5, // Animation will trigger when 50% of the element is in view
                offset: { top: "50%", bottom: "50%" }, // Trigger when the element is 50% from the top and bottom of the viewport
              }}
            >
              <Slider
                asNavFor={nav3}
                ref={sliderRef2}
                adaptiveHeight={true}
                slidesToShow={1}
                slidesToScroll={1}
                focusOnSelect={false}
                speed={900}
                dots={false}
                arrows={false}
              >
                {blok?.data?.length > 0 &&
                  blok.data.map((item) => (
                    <div key={item?._uid}>
                      <div className={styles.slideContent}>
                        <h3 className="text-primary">{item?.title}</h3>
                        <p className="text-black">{item?.description}</p>
                        {item?.ctaText && (
                          <Link
                            href="#"
                            className={`text-primary font-medium uppercase transition-colors duration-200 focus:outline-none ${styles.readMore}`}
                          >
                            <span>{item?.ctaText}</span>
                            <div
                              className={`bg-primary ${styles.underLine}`}
                            ></div>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
              </Slider>
            </motion.div>
          </div>
          {/* --------Content Carousel Slider End-------- */}
        </div>

        {/* ----- Big Image Carousel Start----- */}
        <div className="lg:col-span-5">
          <Slider
            asNavFor={nav1}
            ref={sliderRef3}
            slidesToShow={1}
            slidesToScroll={1}
            focusOnSelect={false}
            speed={900}
            dots={false}
            arrows={false}
          >
            {blok?.data?.length > 0 &&
              blok.data.map((item) => (
                <div key={item?._uid}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={boxVariantsTopToBottom}
                    transition={{ duration: 1 }}
                    viewport={{
                      once: true, // Animation will trigger only once
                      amount: 0.5, // Animation will trigger when 50% of the element is in view
                      offset: { top: "50%", bottom: "50%" }, // Trigger when the element is 50% from the top and bottom of the viewport
                    }}
                  >
                    <ImageWrapper
                      className="rounded"
                      blok={item?.image?.[0]}
                      altText="slideOne"
                      width={703}
                      height={507}
                    />
                  </motion.div>
                </div>
              ))}
          </Slider>
        </div>
        {/* ----- Big Image Carousel End----- */}
      </div>
    </div>
  );
}

export default AvatarCarousel;
