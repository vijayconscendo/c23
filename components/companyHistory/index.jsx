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
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {blok?.yearWiseHistory?.length > 0 &&
            blok.yearWiseHistory.map((year, index) => (
              <SwiperSlide>
                {index % 2 === 0 ? (
                  <div className={styles.historyCard} key={year?._uid}>
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
                  <div className={styles.historyCard} key={year?._uid}>
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
