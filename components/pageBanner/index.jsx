import styles from "./pageBanner.module.scss";
import Button from "@/components/ui/Button/button";
import Image from "next/image";
import dotsPattern from "@/public/Images/patterns/dots.png";

// Animation
import { motion } from "framer-motion";
import ImageWrapper from "../storyblokComponents/imageWrapper";
import { storyblokEditable } from "@storyblok/react";

/**
 * Page banner component
 * @prop {string} title Banner heading
 * @prop {string} description Banner description text
 * @prop {string} [buttonText] Custom button text
 * @prop {string} [buttonVariant="outlinetwo"] Button style variant
 * @prop {function} [onButtonClick] Button click handler
 * @prop {string} [bannerImage] Banner image
 * @prop {string} [leftBackgroundColor="bg-primary"] Customizable background color for left section
 * @prop {string} [className=""] Additional CSS classes
 * @prop {ReactNode} [rightContent] Optional custom content for right section
 */

export default function PageBanner({
  blok,
  onButtonClick,
  leftBackgroundColor = "bg-primary",
}) {
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
    hidden: { opacity: 0, y: -100 }, // Start off-screen above
    visible: { opacity: 1, y: 0 }, // Move to the normal position (stop at the bottom)
  };

  return (
    blok?._uid && (
      <section
        className={`${styles.bannerSection}`}
        {...storyblokEditable(blok)}
      >
        <div
          className={`grid lg:grid-cols-2 overflow-hidden ${styles.bannerGrid}`}
        >
          {/* Content grid */}
          <div
            className={`flex items-end relative z-10 ${leftBackgroundColor} ${styles.bannerLeftGrid}`}
          >
            <div
              className="absolute top-0 left-0 grid grid-cols-6 gap-2"
              aria-hidden="true"
            >
              <Image
                src={dotsPattern}
                alt="dots pattern"
                className={styles.dotsPattern}
              />
            </div>
            <div className={styles.content}>
              <motion.h1
                className="text-white"
                initial="hidden"
                animate="visible"
                whileInView="visible"
                transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
                variants={h1Variants}
              >
                {blok?.title}
              </motion.h1>
              <motion.p
                className="text-white"
                initial="hidden"
                animate="visible"
                whileInView="visible"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.1,
                  repeat: 0,
                }} // Delayed animation
                variants={pAndButtonVariants}
              >
                {blok?.description}
              </motion.p>
              {blok?.buttonText && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  whileInView="visible"
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                    repeat: 0,
                  }} // Delayed animation
                  variants={pAndButtonVariants}
                >
                  <Button
                    className={styles.bannerBtn}
                    variant={blok?.buttonVariant}
                    onClick={onButtonClick}
                  >
                    {blok?.buttonText}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
          {/* Content grid end */}

          {/* Image Grid */}

          <div
            className={`relative bg-primary h-[698px] lg:h-auto ${styles.bannerRightGrid}`}
          >
            <motion.div
              className="h-full"
              initial="hidden"
              animate="visible"
              whileInView="visible"
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.1,
                repeat: 0,
              }}
              variants={imageVariants}
            >
              {blok?.rightContent || (
                <ImageWrapper
                  className="absolute inset-0 w-full h-full object-cover"
                  blok={blok?.bannerImage?.[0]}
                  width={957}
                  height={698}
                  altText={`${blok?.title || ""} banner`}
                />
              )}
            </motion.div>
          </div>

          {/* Image Grid end */}
        </div>
      </section>
    )
  );
}
