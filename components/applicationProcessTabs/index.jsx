import React, { useState, useRef, useEffect } from "react";
import styles from "./applicationProcessTabs.module.scss";
import { motion } from "framer-motion";

import dotsPattern from "@/public/Images/patterns/dots5.png";
import rectangleVertical from "@/public/Images/patterns/rectangle-vertical.png";
import Image from "next/image";
import Button from "../ui/Button/button";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/router";

const tabVariants = {
  active: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  inactive: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const ApplicationProcessTabs = ({ blok }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    width: 0,
    left: 0,
    opacity: 0,
  });
  const tabRefs = useRef([]);
  const containerRef = useRef(null);
  const { push } = useRouter();

  useEffect(() => {
    // Check screen size and set mobile state
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Update indicator position
    const updateIndicator = () => {
      const activeTabElement = tabRefs.current[activeTab];
      const containerElement = containerRef.current;

      if (activeTabElement && containerElement) {
        const containerRect = containerElement.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();

        setIndicatorStyle({
          top: tabRect.top - containerRect.top,
          height: tabRect.height,
          width: tabRect.width,
          left: tabRect.left - containerRect.left,
          opacity: 1,
        });
      }
    };

    // Initial checks
    checkMobileView();
    updateIndicator();

    // Add resize and update listeners
    window.addEventListener("resize", checkMobileView);
    window.addEventListener("resize", updateIndicator);

    // Cleanup listeners
    return () => {
      window.removeEventListener("resize", checkMobileView);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section
      className={styles.applicationProcessTabs}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <div className={styles.sectionHeader}>
        {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      </div>

      <div
        className={`flex flex-col lg:flex-row md:gap-8 relative ${styles.tabsContainer}`}
      >
        {/* Tabs Container */}
        <div ref={containerRef} className="w-full lg:w-1/3 relative">
          {/* Floating Indicator */}
          {!isMobile && (
            <div
              className="absolute transition-all duration-500 ease-in-out bg-primary rounded-e-full z-0"
              style={{
                top: `${indicatorStyle.top}px`,
                height: `${indicatorStyle.height}px`,
                width: `${indicatorStyle.width}px`,
                left: `${indicatorStyle.left}px`,
                opacity: indicatorStyle.opacity,
                transform: `scaleX(${activeTab !== null ? 1 : 0})`,
                transformOrigin: "left center",
              }}
            />
          )}

          {/* Mobile Select Dropdown */}
          {isMobile && (
            <select
              value={activeTab}
              onChange={(e) => handleTabClick(Number(e.target.value))}
              className={`w-full p-4 border-2 border-primary font-medium rounded-lg mb-5 ${styles.tabSelectMobile}`}
            >
              {blok?.tabContents?.length > 0 &&
                blok?.tabContents.map((tab, index) => (
                  <option key={tab?._uid} value={index}>
                    {tab?.title}
                  </option>
                ))}
            </select>
          )}

          {/* Tab List (Visible on Desktop) */}
          <ul
            className={` ${styles.tabList}
              ${isMobile ? "hidden" : "block"} 
              relative z-10
            `}
          >
            {blok?.tabContents?.length > 0 &&
              blok.tabContents.map((tab, index) => (
                <li
                  key={tab?._uid}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={`
                  cursor-pointer relative transition-all duration-300 flex items-center 
                  rounded-e-full group
                  ${
                    activeTab === index
                      ? "text-white"
                      : "text-gray-700 hover:bg-primary hover:text-white z-10"
                  }
                `}
                  onClick={() => handleTabClick(index)}
                >
                  <span className="flex-grow">{tab?.title}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Content Area */}
        <div
          className={`w-full lg:w-2/3 overflow-hidden flex flex-col justify-center ${styles.tabcontent}`}
        >
          {blok?.tabContents?.length > 0 &&
            blok.tabContents.map((tab, index) => (
              <motion.div
                key={tab?._uid}
                className="w-full"
                initial={index === activeTab ? "active" : "inactive"}
                animate={index === activeTab ? "active" : "inactive"}
                variants={tabVariants}
              >
                <div
                  key={index}
                  className={`
                ${activeTab === index ? "block" : "hidden"}
                transition-all duration-500 ease-in-out
                ${
                  activeTab === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
                >
                  <div className="bg-white">
                    <h3 className="flex items-center text-primary">
                      {tab.step}
                    </h3>
                    <p className="text-black">{tab.content}</p>
                    <Button
                      variant="outline"
                      className={styles.sectionBtn}
                      onClick={() => push("/careers")}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        {/* Patterns */}
        <Image
          className={styles.dotsPattern}
          src={dotsPattern}
          alt="dots pattern"
        />
      </div>

      {/* Patterns */}
      <Image
        className={styles.rectangle}
        src={rectangleVertical}
        alt="rectangle-vertical"
      />
    </section>
  );
};

export default ApplicationProcessTabs;
