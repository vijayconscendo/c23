import React from "react";
import styles from "./storyCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const StoryCard = ({ blok }) => {
  let classNames = {
    chip: " bg-primary text-white",
    topic: "text-primary",
    description: "text-black",
  };

  return (
    blok?._uid && (
      <div
        className={`w-full overflow-hidden ${styles.storyCard}`}
        {...storyblokEditable(blok)}
      >
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden ${styles.cardImage}`}
        >
          {blok?.showRightTag && (
            <div className={`bg-primary text-white ${styles.rightTag}`}>
              {blok?.chipName}
            </div>
          )}
          {blok?.showDateAsTag && (
            <div className={`bg-primary text-white ${styles.leftTag}`}>
              {blok?.date?.split(" ")?.[0] || "01"}
              <br />
              {blok?.date?.split(" ")?.[1] || "Jan"}
            </div>
          )}

          <Image
            alt="Digital Transformation VR Interface"
            className={`w-full object-cover transition-transform duration-300 ${styles.image}`}
            fill
            src={blok?.image}
          />
        </div>
        <div
          className={`flex flex-col justify-between flex-1 ${
            blok?.borderAll ? "border border-[#db2d38]" : ""
          }`}
        >
          <div className={blok?.borderAll ? "p-2" : ""}>
            <div className={styles.cardHeader}>
              {blok?.showDate && (
                <div
                  className={`text-gray-600 font-medium italic ${styles.dateText}`}
                >
                  {blok?.date}
                </div>
              )}
              {blok?.showChip && (
                <div className={`${styles.chip} ${classNames.chip} `}>
                  {blok?.chipName}
                </div>
              )}

              <h2
                className={`${
                  blok?.customStyles?.[0] || classNames.topic
                } font-bold ${styles.cardTitle} ${
                  blok?.showChip ? "" : "mt-2"
                }`}
              >
                <Link
                  href={blok?.redirectLink?.cached_url || "/"}
                  target="_blank"
                >
                  {blok?.topic}
                </Link>
              </h2>
            </div>
            <div className={styles.cardContent}>
              <p
                className={`${classNames.description} font-medium line-clamp-5 ${styles.cardText}`}
              >
                {blok?.description}
              </p>
            </div>
          </div>

          <div className={styles.cardFooter}>
            {blok?.ctaText && (
              <Link
                href={blok?.redirectLink?.cached_url || "/"}
                target="_blank"
                className={`text-primary font-medium uppercase ${
                  styles.readMore
                } ${blok?.borderAll ? "p-2" : ""}`}
              >
                <span>{blok?.ctaText}</span>
                <div className={`bg-primary ${styles.underLine}`}></div>
              </Link>
            )}

            {blok?.hasBottomBorder && (
              <div className={`bg-primary ${styles.borderBottom}`}></div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default StoryCard;
