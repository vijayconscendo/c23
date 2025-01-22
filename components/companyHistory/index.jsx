import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import styles from "./companyHistory.module.scss";

// Animation
import { motion } from "framer-motion";

// Images
import ImageWrapper from "../storyblokComponents/imageWrapper";

// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Optional modules
import {Autoplay } from "swiper/modules";

const CompanyHistory = ({ blok }) => {
  const animateVarients = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };
  const animateLine = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      className={styles.companyHistory}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}

      <div className={styles.historySwiper}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on mobile screens (width < 640px)
            },
            768: {
              slidesPerView:3 , // Show 2 slides on tablets (width >= 640px and < 1024px)
            },
            1024: {
              slidesPerView: 4, // Show 5 slides on web (width >= 1024px)
            },
            1280: {
              slidesPerView: 5, // Show 5 slides on web (width >= 1024px)
            },
          }}
        >
          {blok?.yearWiseHistory?.length > 0 &&
            blok.yearWiseHistory.map((year, index) => (
              <SwiperSlide key={year?._uid}>
                {index % 2 === 0 ? (
                  <div className={styles.historyCard}>
                    <div className={styles.content}>
                      <motion.h3
                        className="text-primary"
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          delay: 0.1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.5,
                          offset: { top: "50%", bottom: "50%" },
                        }}
                        variants={animateVarients}
                      >
                        {year?.title}
                      </motion.h3>
                      <p className="text-black">{year?.description}</p>
                      <motion.div
                        className={styles.line}
                        initial={{ y: 100 }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                    <ImageWrapper
                      blok={year?.blocks?.[0]}
                      altText={year?.title}
                    />
                  </div>
                ) : (
                  <div className={styles.historyCard}>
                    <ImageWrapper
                      blok={year?.blocks?.[0]}
                      altText={year?.title}
                    />
                    <div className={styles.content}>
                      <motion.h3
                        className="text-primary"
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          delay: 0.1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.5,
                          offset: { top: "50%", bottom: "50%" },
                        }}
                        variants={animateVarients}
                      >
                        {year?.title}
                      </motion.h3>
                      <p className="text-black">{year?.description}</p>
                      <motion.div
                        className={styles.line}
                        initial={{ y: 100 }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyHistory;
