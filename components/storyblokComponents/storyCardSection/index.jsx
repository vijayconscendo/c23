import Image from "next/image";
import styles from "./storyCardSection.module.scss";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import dots from "@/public/Images/patterns/dots4.png";

function StoryCardSection({ blok }) {
  return (
    <div
      className={`${styles.storyGridSection} ${
        blok?.hasSpacing ? "pb-12 pt-[70px]" : "pb-12"
      }`}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      {blok?.title?.length > 0 && (
        <StoryblokComponent blok={blok?.title?.[0]} />
      )}
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-y-20 ${styles.storyGrid}`}
      >
        {blok?.cards?.length > 0 &&
          blok.cards.map((card) => (
            <StoryblokComponent key={card?._uid} blok={card} />
          ))}
      </div>
      {blok?.dotsPosition?.length > 0 && (
        <Image className={`${blok.dotsPosition?.[0]} ${styles.dots}`} src={dots} alt="dot pattern" />
      )}
    </div>
  );
}

export default StoryCardSection;
