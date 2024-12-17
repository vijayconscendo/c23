import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./coreValues.module.scss";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Images
import Image from "next/image";
import dots from "@/public/Images/patterns/dots5.png";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const CoreValues = ({ blok }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextValue = () => {
    setDirection(-1);
    if (blok?.values?.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blok.values.length);
    }
  };

  const prevValue = () => {
    setDirection(1);
    if (blok?.values?.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + blok.values.length) % blok.values.length
      );
    }
  };

  const selectValue = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  return (
    <section
      className={styles.coreValues}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <div className={styles.sectionHeader}>
        {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      </div>
      {/* View In Desktop */}
      <div
        className={`flex flex-col lg:flex-row items-center justify-between ${styles.carouselGrid}`}
      >
        <div className={`w-full lg:w-1/2 mb-12 ${styles.tabsBlock}`}>
          <ul>
            {blok?.values?.length > 0 &&
              blok.values.map((value, index) => (
                <li
                  key={index}
                  className={`transition-colors duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "bg-primary text-white"
                      : "text-black hover:text-black"
                  }`}
                  onClick={() => selectValue(index)}
                >
                  {value?.title}
                </li>
              ))}
          </ul>
        </div>
        <div
          className={`w-full lg:w-1/2 relative h-full ${styles.carouselBlock}`}
        >
          <div className="flex items-center justify-center">
            <div
              className={`relative rounded-full ${styles.carouselCircleBox}`}
            >
              <AnimatePresence initial={false}>
                {blok?.values?.length > 0 &&
                  blok.values.map((value, index) => (
                    <motion.div
                      key={value?._uid}
                      className={`absolute text-white rounded-full flex flex-col justify-center items-center p-16 ${styles.carouselCircle}`}
                      initial={{
                        rotate: (currentIndex - index) * 72 + direction * 72,
                        opacity: index === currentIndex ? 1 : 0.3,
                        scale: index === currentIndex ? 1 : 0.8,
                      }}
                      animate={{
                        rotate: (currentIndex - index) * 72,
                        opacity: index === currentIndex ? 1 : 0.3,
                        scale: index === currentIndex ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.5 }}
                      style={{
                        originX: 0.5,
                        originY: 2.5,
                        //   minWidth: "320px",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div
                        className={`absolute -top-16 -left-2 font-bold text-primary ${styles.valueNum}`}
                      >
                        {index < 9 ? `0${index + 1}` : index}
                      </div>
                      <h3 className="text-center">{value?.title}</h3>
                      {index === currentIndex && (
                        <p className="text-center overflow-hidden">
                          {value?.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden absolute bottom-0 right-0 space-x-2">
            <button
              onClick={prevValue}
              className="bg-white text-red-600 rounded-full p-2 hover:bg-red-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextValue}
              className="bg-white text-red-600 rounded-full p-2 hover:bg-red-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* End View In Desktop */}
      <div className={styles.coreValuesMobileView}>
        <Select
          value={blok?.values?.[currentIndex]?.title}
          onValueChange={(value) => {
            const index = blok?.values?.findIndex(
              (item) => item?.title === value
            );
            setCurrentIndex(index);
          }}
        >
          <SelectTrigger
            className={`px-4 py-6 bg-white border-primary focus:ring-0 ${styles.selectTrigger}`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className={`bg-white ${styles.selectContent}`}>
            <SelectGroup className={`${styles.selectGroup}`}>
              {blok?.values?.map((value, index) => (
                <SelectItem
                  key={index}
                  value={value?.title}
                  className={`${styles.selectItem}`}
                >
                  {value?.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className={styles.selctedContent}>
          <h2>
            {currentIndex < 9 ? `0${currentIndex + 1}` : currentIndex}
            {blok?.values?.[currentIndex]?.title}
          </h2>
          <p>{blok?.values?.[currentIndex]?.description}</p>
        </div>
      </div>
      <Image className={styles.dotsPattern} src={dots} alt="dots pattern" />
    </section>
  );
};

export default CoreValues;
