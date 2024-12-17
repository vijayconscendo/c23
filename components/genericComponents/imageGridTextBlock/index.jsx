import React from "react";
import styles from "../imageTextBlock/imageTextBlock.module.scss";

// Animation
import { motion } from "framer-motion";

// Images & Icons
import Image from "next/image";
import dots from "@/public/Images/patterns/dots4.png";
import Button from "@/components/ui/Button/button";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import ImageWrapper from "@/components/storyblokComponents/imageWrapper";

/**
 * Title component
 * @prop {object} cardImg image to display
 * @prop {string} title title of block
 * @prop {string} subTitle subtitle of section
 * @prop {string} desc Description of block
 * @prop {string} ctaText text of the cta if cta is present
 * @prop {boolean} underline show underline under title & subtitle if true, otherwise hide
 * @prop {boolean} reverseOrder reverses the order of image and text
 * @prop {function} handleCta function to handle on click of button
 * @prop {string} dotsPosition placement of collection of dots
 */

const ImageGridTextBlock = ({ blok, dotsPosition = "", handleCta }) => {
  // Animation Variants
  const animateRtoL = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const animateLtoR = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const imageVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      className={`relative overflow-hidden bg-white my-20 ${styles.ImageTextBlock}`}
      {...storyblokEditable(blok)}
    >
      <div
        className={`grid lg:grid-cols-2 items-end gap-y-10 ${styles.girdBlock}`}
      >
        {/* Left Grid */}
        <div className={`${styles.rightGrid} order-1`}>
          <div className={styles.blockContent}>
            {blok?.title?.[0] && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                variants={animateLtoR}
              >
                <StoryblokComponent blok={blok.title[0]} />
              </motion.div>
            )}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
              viewport={{
                once: true,
              }}
              variants={animateRtoL}
            >
              <p>{blok?.description}</p>
              {blok?.ctaText && (
                <Button variant="outline" onClick={handleCta}>
                  {blok?.ctaText}
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Right grid Image Grid blocks */}
        <div className={`order-2 relative`}>
          {blok?.images?.length > 0 && (
            <div
              className={`grid grid-cols-12 md:gap-x-10 ${styles.imgGridBlocks}`}
            >
              {blok.images.map((image, index) => (
                <motion.div
                  className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4"
                  initial="hidden"
                  key={image?._uid}
                  whileInView="visible"
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.1 * (index + 2),
                  }}
                  viewport={{
                    once: true,
                  }}
                  variants={imageVariants}
                >
                  <ImageWrapper blok={image} altText="event" />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Decorative dots */}

        <Image
          width={204}
          height={196}
          src={dots}
          alt="dots pattern"
          className="absolute z-0 top-0 right-0"
        />
      </div>
    </section>
  );
};

export default ImageGridTextBlock;
