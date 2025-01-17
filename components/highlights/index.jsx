import React from "react";
import styles from "./highlights.module.scss";

import Link from "next/link";
import Image from "next/image";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const HighlightsComponent = ({ blok }) => {
  const leftPart = blok?.mainTopic?.[0];
  return (
    <section
      className={styles.highlightsComponent}
      {...storyblokEditable(blok)}
    >
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}

      <div
        className={`grid grid-cols-12 md:gap-x-10 gap-y-14 ${styles.gridBlock}`}
      >
        {/* <!-- Left Column --> */}
        <div className="col-span-12 md:col-span-7">
          <div className={`w-full overflow-hidden ${styles.storyCard}`}>
            <div
              className={`relative aspect-[16/9] w-full overflow-hidden ${styles.cardImage}`}
            >
              {leftPart?.showRightTag && (
                <div className={`bg-primary text-white ${styles.rightTag}`}>
                  {leftPart?.chipName || ""}
                </div>
              )}

              {/* <div className={`bg-primary text-white ${styles.leftTag}`}>
                25
                <br />
                August
              </div> */}
              <Image
                alt="Digital Transformation VR Interface"
                className="w-full object-cover transition-transform duration-300"
                fill
                src={leftPart?.image}
              />
            </div>
            <div className={styles.cardHeader}>
              <div
                className={`text-gray-600 font-medium italic ${styles.dateText}`}
              >
                {leftPart?.showDate && (leftPart?.date || "20 June 2024")}
              </div>
              <h2 className={`text-primary font-bold ${styles.cardTitle}`}>
                <Link href={leftPart?.redirectLink?.cached_url || "/"}>
                  {leftPart?.topic}
                </Link>
              </h2>
            </div>
            <div className={styles.cardContent}>
              <p className={`text-black font-medium ${styles.cardText}`}>
                {leftPart?.description}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <Link
                href={leftPart?.redirectLink?.cached_url || "/"}
                className={`text-primary font-medium uppercase ${styles.readMore}`}
              >
                <span>{leftPart?.ctaText}</span>
                <div className={`bg-primary ${styles.underLine}`}></div>
              </Link>
              <div className={`bg-primary ${styles.borderBottom}`}></div>
            </div>
          </div>
        </div>

        {/* <!-- Right Column --> */}
        <div className="col-span-12 md:col-span-5">
          {blok?.relatedTopics?.length > 0 && (
            <div className={`flex flex-col ${styles.storyCardThumbnailGrid}`}>
              {blok?.relatedTopics.map((item) => (
                <div
                  key={item?._uid}
                  className={`${styles.storyCard} ${styles.storyCardThumbnail}`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative aspect-[16/9] w-full flex-shrink-0 overflow-hidden ${styles.cardImage}`}
                  >
                    <div className={`bg-primary text-white ${styles.rightTag}`}>
                      {item?.rightTag || ""}
                    </div>
                    <Image
                      alt="Digital Transformation VR Interface"
                      className="w-full h-full object-cover transition-transform duration-300"
                      fill
                      src={item?.image}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className={styles.cardHeader}>
                      <div
                        className={`text-gray-600 font-medium italic ${styles.dateText}`}
                      >
                        {item?.date || ""}
                      </div>
                      <h2
                        className={`text-black hover:text-primary font-semibold ${styles.cardTitle}`}
                      >
                        <Link href={item?.redirectLink?.cached_url || "/"}>
                          {item?.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightsComponent;
