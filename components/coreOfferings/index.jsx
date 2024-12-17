import React from "react";
import styles from "./coreOfferings.module.scss";

// Animation
import { motion } from "framer-motion";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const CoreOfferings = ({ blok }) => {
  // Animate Varients
  const boxVariants = {
    hidden: { opacity: 0, x: -100 }, // Initially hidden and positioned off-screen
    visible: { opacity: 1, x: 0 }, // Final position when visible
  };

  const boxVariantsRightToLeft = {
    hidden: { opacity: 0, x: 100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, x: 0 }, // Final position when visible
  };
  
  return (
    <section className={styles.coreOfferings}  {...storyblokEditable(blok)}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <div
        className={`grid xl:grid-cols-2 overflow-hidden ${styles.coreOfferingsGrid}`}
      >
        {blok?.offerings?.length > 0 &&
          blok.offerings.map((offering, index) => (
            <motion.div
              className={styles.offeringCard}
              initial="hidden"
              key={offering?._uid}
              whileInView="visible"
              variants={index % 2 == 0 ? boxVariants : boxVariantsRightToLeft}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary">{offering?.title}</h3>
              {offering?.blocks?.length > 0 &&
                offering.blocks.map((item) => (
                  <p className="text-black" key={item?._uid}>
                    <span>{item.title}</span>
                    {item.description}
                  </p>
                ))}
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default CoreOfferings;
