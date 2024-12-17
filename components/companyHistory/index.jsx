import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import styles from "./companyHistory.module.scss";

// Animation
import { motion } from "framer-motion";

// Images
import ImageWrapper from "../storyblokComponents/imageWrapper";

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

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${styles.gridblock}`}
      >
        {blok?.yearWiseHistory?.length > 0 &&
          blok.yearWiseHistory.map((year, index) => {
            if (index % 2 === 0) {
              return (
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
              );
            }
            return (
              <div className={styles.historyCard} key={year?._uid}>
                <ImageWrapper blok={year?.blocks?.[0]} altText={year?.title} />
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
            );
          })}
      </div>
    </section>
  );
};

export default CompanyHistory;
