import React, { useEffect, useRef, useState } from "react";
import styles from "./keyMetrics.module.scss";

// Images & Icons
import Image from "next/image";
import plusIcon from "@/public/Images/icons/plus-white.png";
import circleShape from "@/public/Images/patterns/circle-fade.png";
import divider from "@/public/Images/patterns/metrick-devider.png";
import shape2 from "@/public/Images/patterns/metrik-shape2.png";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const KeyMetrics = ({ blok }) => {
  return (
    <section
      className={`relative bg-primary ${styles.keyMetrics}`}
      {...storyblokEditable(blok)}
    >
      <Image className="absolute left-0 top-0" src={circleShape} alt="circle" />
      <Image className="absolute bottom-0 right-0" src={shape2} alt="circle" />
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-0 md:gap-x-8 gap-y-10 ${styles.metricGrid}`}
      >
        {blok?.metrics?.length > 0 &&
          blok.metrics.map((item, index) => (
            <div className={`relative ${styles.metricCard}`} key={index}>
              <div className={styles.metricCardContent}>
                <div
                  className={`flex items-center justify-center ${styles.number}`}
                >
                  {/^\d+$/.test(item?.title) ? ( // Check if the title contains only numbers
                    <>
                      <Counter start={0} end={Number(item?.title)} />
                    </>
                  ) : (
                    <h3 className="text-white">{item?.title}</h3> // Show the title directly if it's not a number
                  )}
                  <Image src={plusIcon} alt="plus icon" />
                </div>
                <div className={`bg-white ${styles.line}`}></div>
                <p className="text-white">{item?.description}</p>
              </div>
              <Image
                className={`absolute right-0 ${styles.divider}`}
                src={divider}
                alt="circle"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default KeyMetrics;

const Counter = ({ start, end }) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.7 } // Trigger when 20% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible && count < end) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            if (end > 100) {
              return prevCount + 10;
            }
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 40);
    }
    return () => clearInterval(interval);
  }, [isVisible, count, end]);

  return (
    <h3 className="text-white" ref={counterRef}>
      {count}
    </h3>
  );
};
