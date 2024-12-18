import React from "react";
import styles from "./imageTextBlock.module.scss";

// Images & Icons
import Image from "next/image";
import dots from "@/public/Images/patterns/dots4.png";
import Button from "@/components/ui/Button/button";
import SectionTitle from "../title";

// Animation
import { motion } from "framer-motion";
import ImageWrapper from "@/components/storyblokComponents/imageWrapper";
import { storyblokEditable } from "@storyblok/react";

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

const ImageTextBlock = ({
  blok,
  isCarousel = false,
  handleCta,
  customClass = {},
}) => {
  // Animation Variants
  const h1Variants = {
    hidden: { opacity: 0, x: 120 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // Move into view
  };

  const pAndButtonVariants = {
    hidden: { opacity: 0, x: -120 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 }, // Move into view
  };

  const imageVariants = {
    hidden: { opacity: 0, y: "-50%" }, // Start off-screen above
    visible: { opacity: 1, y: 0 }, // Move to the normal position (stop at the bottom)
  };

  return blok?._uid ? (
    !isCarousel ? (
      <section
        id={blok?.id}
        className={`relative overflow-hidden mb-10 bg-white ${
          blok?.noSectionSpacing ? "mt-20" : styles.ImageTextBlock
        }`}
        {...storyblokEditable(blok)}
      >
        <div
          className={`grid lg:grid-cols-2 items-end gap-y-8 lg:gap-y-10 ${styles.girdBlock}`}
        >
          {/* Left Grid */}
          <div className={`${blok?.reverseOrder ? "lg:order-2" : ""} relative`}>
            <div className="relative rounded-lg overflow-hidden z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
                viewport={{
                  once: true, // Animation will trigger only once
                  amount: 0.5, // Animation will trigger when 50% of the element is in view
                  offset: { top: "50%", bottom: "50%" }, // Trigger when the element is 50% from the top and bottom of the viewport
                }}
                variants={imageVariants}
              >
                <ImageWrapper
                  blok={blok?.cardImg?.[0]}
                  width={860}
                  height={566}
                  altText="what we do"
                  className="object-cover"
                />
                {/* <Image
                src={cardImg}
                alt="what we do"
                className={`object-cover ${styles.image}`}
              /> */}
              </motion.div>
            </div>
          </div>

          {/* Right Grid */}
          <div
            className={`${styles.rightGrid} ${
              blok?.reverseOrder ? "lg:order-1" : ""
            }`}
          >
            <div className={styles.blockContent}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, ease: "easeInOut" }}
                variants={h1Variants}
                viewport={{
                  once: true, // Animation will trigger only once
                  amount: 0.5, // Animation will trigger when 50% of the element is in view
                  offset: { top: "50%", bottom: "50%" }, // Trigger when the element is 50% from the top and bottom of the viewport
                }}
              >
                <SectionTitle
                  // title={title}
                  // subTitle={subTitle}
                  // underline={underline}
                  blok={blok?.title?.[0]}
                  customClass={customClass}
                />
              </motion.div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.1,
                }} // Delayed animation
                viewport={{ once: true }}
                variants={pAndButtonVariants}
              >
                {blok?.desc}
              </motion.p>
              {blok?.ctaText && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                  }} // Delayed animation
                  viewport={{ once: true }}
                  variants={pAndButtonVariants}
                >
                  <Button
                    variant="outline"
                    onClick={handleCta}
                    className={styles.sectionBtn}
                  >
                    {blok?.ctaText}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Decorative dots */}
          {blok?.dotsPosition?.length && (
            <div
              className={`absolute z-0 ${blok.dotsPosition} ${styles.dotsPattern}`}
            >
              <Image width={204} height={196} src={dots} alt="dots pattern" />
            </div>
          )}
        </div>
      </section>
    ) : (
      <section
        id={blok?.id}
        className={`relative overflow-hidden mt-10 mb-10 bg-white ${
          blok?.noSectionSpacing ? "mt-16" : styles.ImageTextBlock
        }`}
        {...storyblokEditable(blok)}
      >
        <div
          className={`grid lg:grid-cols-2 items-end gap-y-8 lg:gap-y-10 ${styles.girdBlock}`}
        >
          {/* Left Grid */}
          <div className={`${blok?.reverseOrder ? "lg:order-2" : ""} relative`}>
            <div className="relative rounded-lg overflow-hidden z-10">
              <div>
                <ImageWrapper
                  width={860}
                  height={566}
                  blok={blok?.cardImg?.[0]}
                  altText="what we do"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div
            className={`${styles.rightGrid} ${
              blok?.reverseOrder ? "lg:order-1" : ""
            }`}
          >
            <div className={styles.blockContent}>
              <div>
                <SectionTitle
                  blok={blok?.title?.[0]}
                  customClass={customClass}
                />
              </div>
              <p>{blok?.desc}</p>
              {blok?.ctaText && (
                <div>
                  <Button
                    variant="outline"
                    onClick={handleCta}
                    className={styles.sectionBtn}
                  >
                    {blok?.ctaText}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Decorative dots */}
          {blok?.dotsPosition?.length > 0 && (
            <div
              className={`absolute z-0 ${blok?.dotsPosition?.[0]} ${styles.dotsPattern}`}
            >
              <Image width={204} height={196} src={dots} alt="dots pattern" />
            </div>
          )}
        </div>
      </section>
    )
  ) : null;
};

export default ImageTextBlock;
