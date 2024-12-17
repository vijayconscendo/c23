import styles from "./smartSolutions.module.scss";

// Animation
import { motion } from "framer-motion";

// Images
import Image from "next/image";
import dots from "@/public/Images/patterns/dots4.png";
import arrowRight from "@/public/Images/icons/icon-arrow-rt-white.png";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

const SmartSolutions = ({ blok }) => {
  // Animate Varients
  const boxVariantsTopToBottom = {
    hidden: { opacity: 0, y: -100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, y: 0 }, // Final position when visible
  };
  const boxVariantsBottomToTop = {
    hidden: { opacity: 0, y: 100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, y: 0 }, // Final position when visible
  };

  return (
    <section className={styles.smartSolutions} {...storyblokEditable(blok)}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <Image
        width={204}
        height={196}
        src={dots}
        alt="dots pattern"
        className="absolute z-0 top-0 right-0"
      />
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${styles.solutionGrid}`}
      >
        {blok?.solutions?.length > 0 &&
          blok.solutions.map((solution, index) => {
            if (index % 2 === 0) {
              return (
                <div className={styles.solutionCard} key={solution?._uid}>
                  <motion.div
                    className={`relative ${styles.solutionCardImage}`}
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
                      blok={solution?.image?.[0]}
                      altText="digital"
                      {...storyblokEditable(solution?.image?.[0])}
                    />
                    <h3 className="text-white absolute">{solution?.heading}</h3>
                  </motion.div>
                  <div className={styles.solutionCardContent}>
                    <p className="text-black">
                      {solution?.prefixDesc}
                      <span className="text-primary">
                        {" "}
                        {solution?.highlightText}
                      </span>{" "}
                      {solution?.suffixDesc}
                    </p>
                    <button type="button" className="bg-primary p-2">
                      <Image src={arrowRight} alt="digital" />
                    </button>
                  </div>
                </div>
              );
            }
            return (
              <div className={styles.solutionCard} key={solution?._uid}>
                <div className={styles.solutionCardContent}>
                  <p className="text-black">
                    {solution?.prefixDesc}
                    <span className="text-primary">
                      {" "}
                      {solution?.highlightText}
                    </span>{" "}
                    {solution?.suffixDesc}
                  </p>
                  <button type="button" className="bg-primary p-2">
                    <Image src={arrowRight} alt="digital" />
                  </button>
                </div>
                <motion.div
                  className={`relative ${styles.solutionCardImage}`}
                  initial="hidden"
                  whileInView="visible"
                  variants={boxVariantsBottomToTop}
                  transition={{ duration: 1 }}
                  viewport={{
                    once: true, // Animation will trigger only once
                    amount: 0.5, // Animation will trigger when 50% of the element is in view
                    offset: { top: "50%", bottom: "50%" }, // Trigger when the element is 50% from the top and bottom of the viewport
                  }}
                >
                  <ImageWrapper
                    blok={solution?.image?.[0]}
                    altText="digital"
                    {...storyblokEditable(solution?.image?.[0])}
                  />
                  <h3 className="text-white absolute">{solution?.heading}</h3>
                </motion.div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SmartSolutions;
