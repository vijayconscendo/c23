import styles from "./successStory.module.scss";
import Image from "next/image";

// Images
import dots from "@/public/Images/patterns/dots4.png";
import Link from "next/link";

// Animation
import { motion } from "framer-motion";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

const SuccessStory = ({ blok }) => {
  // Animate Varients
  const boxImageVarient = {
    hidden: { opacity: 0, y: "-100%" }, // Initially hidden and positioned off-screen
    visible: { opacity: 1, y: 0 }, // Final position when visible
  };

  const boxVariantsRightToLeft = {
    hidden: { opacity: 0, x: 100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, x: 0 }, // Final position when visible
  };
  return (
    <section className={styles.successStory}  {...storyblokEditable(blok)}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <div
        className={`grid lg:grid-cols-2 items-end gap-y-10 ${styles.girdBlock}`}
      >
        {/* Left Grid */}
        <div className="relative rounded overflow-hidden z-10">
          {blok?.image && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={boxImageVarient}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWrapper
                blok={blok.image?.[0]}
                fill={true}
                altText="what we do"
                className="lg:w-full xl:w-[856px] lg:h-[500px] xl:h-[609px] object-contain lg:object-cover"
              />
            </motion.div>
          )}
        </div>

        {/* Right Grid */}
        <div className={`${styles.rightGrid}`}>
          <motion.div
            className={styles.blockContent}
            initial="hidden"
            whileInView="visible"
            variants={boxVariantsRightToLeft}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {blok?.successInfo?.length > 0 &&
              blok.successInfo.map((item) => {
                if (item?.blocks?.length === 0) {
                  return (
                    <div className={styles.titleBlock} key={item?._uid}>
                      <h4 className="text-primary">{item.title}</h4>
                      <p className="text-black">{item.description}</p>
                    </div>
                  );
                }
                return (
                  <div className={styles.titleBlock} key={item?._uid}>
                    <h4 className="text-primary">{item.title}</h4>
                    {item?.blocks?.length > 0 && (
                      <div className={styles.percentGrid}>
                        {item.blocks.map((result) => (
                          <div key={item?._uid}>
                            <h4 className="text-primary">{result?.title}</h4>
                            <span>{result?.description}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            {blok?.ctaText && (
              <Link
                href="#"
                className={`text-primary font-medium uppercase transition-colors duration-200 focus:outline-none ${styles.readMore}`}
              >
                <span>{blok.ctaText}</span>
                <div className={`bg-primary ${styles.underLine}`}></div>
              </Link>
            )}
          </motion.div>
        </div>

        {/* Decorative dots */}
        <div className={`absolute top-[10%] -right-16 ${styles.dotsPosition}`}>
          <Image width={202} height={163} src={dots} alt="dots pattern" />
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
