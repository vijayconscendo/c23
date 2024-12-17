import React from "react";

import styles from "./keyApproach.module.scss";

import Image from "next/image";
import keyPillar from "@/public/Images/cards/keypillar.png";

// Animation
import { motion } from "framer-motion";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

export default function KeyPillarsApproach({ blok }) {
  // Animation Variants
  const animateLtoR = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const animateRtoL = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const animateTtoB = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const animateBtoT = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id={blok?.id}
      className={`overflow-hidden ${styles.keyPillarsApproach}`}
      {...storyblokEditable(blok)}
    >
      {blok?.title?.[0] && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
          variants={animateLtoR}
        >
          <StoryblokComponent blok={blok.title[0]} />
        </motion.div>
      )}

      <div className={styles.keyPillarsApproachContainer}>
        <div className="grid grid-cols-12 mb-10 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
            variants={animateTtoB}
            className={`flex items-start col-span-12 lg:mx-auto ${styles.KeyPillarsApproachCard}`}
          >
            <div className="flex-shrink-0">
              <div
                className={`bg-primary rounded-full flex items-center justify-center ${styles.icon}`}
              >
                <ImageWrapper
                  blok={blok?.elements?.[0]?.blocks?.[0]}
                  altText="expertiseIcon"
                />
              </div>
            </div>
            <div>
              <h3 className="text-primary">{blok?.elements?.[0]?.title}</h3>
              <p className="text-black">{blok?.elements?.[0]?.description}</p>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4  flex flex-col justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
              variants={animateLtoR}
              className={`flex items-start col-span-12 mb-5 md:mb-12 ${styles.KeyPillarsApproachCard}`}
            >
              <div className="flex-shrink-0">
                <div
                  className={`bg-primary rounded-full flex items-center justify-center ${styles.icon}`}
                >
                  <ImageWrapper
                    blok={blok?.elements?.[1]?.blocks?.[0]}
                    altText="expertiseIcon"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-primary">{blok?.elements?.[1]?.title}</h3>
                <p className="text-black">{blok?.elements?.[1]?.description}</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
              variants={animateLtoR}
              className={`flex items-start col-span-12 mb-5 md:mb-12 ${styles.KeyPillarsApproachCard}`}
            >
              <div className="flex-shrink-0">
                <div
                  className={`bg-primary rounded-full flex items-center justify-center ${styles.icon}`}
                >
                  <ImageWrapper
                    blok={blok?.elements?.[2]?.blocks?.[0]}
                    altText="expertiseIcon"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-primary">{blok?.elements?.[2]?.title}</h3>
                <p className="text-black">{blok?.elements?.[2]?.description}</p>
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:flex items-center">
            {/* Center image */}
            <div
              className={`rounded-full overflow-hidden p-5 m-auto ${styles.centerImage}`}
            >
              <Image
                src={keyPillar}
                alt="Office workspace"
                width={478}
                height={478}
                className="w-full h-full object-cover img-responsive m-auto"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
              variants={animateRtoL}
              className={`flex items-start col-span-12 mb-5 md:mb-12 ${styles.KeyPillarsApproachCard}`}
            >
              <div className="flex-shrink-0">
                <div
                  className={`bg-primary rounded-full flex items-center justify-center ${styles.icon}`}
                >
                  <ImageWrapper
                    blok={blok?.elements?.[3]?.blocks?.[0]}
                    altText="expertiseIcon"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-primary">{blok?.elements?.[3]?.title}</h3>
                <p className="text-black">{blok?.elements?.[3]?.description}</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
              variants={animateRtoL}
              className={`flex items-start col-span-12 mb-5 md:mb-12 ${styles.KeyPillarsApproachCard}`}
            >
              <div className="flex-shrink-0">
                <div
                  className={`bg-primary rounded-full flex items-center justify-center ${styles.icon}`}
                >
                  <ImageWrapper
                    blok={blok?.elements?.[4]?.blocks?.[0]}
                    altText="expertiseIcon"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-primary">{blok?.elements?.[4]?.title}</h3>
                <p className="text-black">{blok?.elements?.[4]?.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-10 md:mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
            variants={animateBtoT}
            className={`flex items-start col-span-12 lg:mx-auto ${styles.KeyPillarsApproachCard}`}
          >
            <div className="flex-shrink-0">
              <div
                className={`bg-primary rounded-full flex items-center justify-center ${styles.icon}`}
              >
                <ImageWrapper
                  blok={blok?.elements?.[5]?.blocks?.[0]}
                  altText="expertiseIcon"
                />
              </div>
            </div>
            <div>
              <h3 className="text-primary">{blok?.elements?.[5]?.title}</h3>
              <p className="text-black">{blok?.elements?.[5]?.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
