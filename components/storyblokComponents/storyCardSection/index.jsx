import Image from "next/image";
import styles from "./storyCardSection.module.scss";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import dots from "@/public/Images/patterns/dots4.png";
import Button from "@/components/ui/Button/button";
import { useRouter } from "next/router";

function StoryCardSection({ blok }) {
  const { push } = useRouter();
  return (
    <div
      className={`${styles.storyGridSection} ${
        blok?.hasSpacing ? "pb-12 pt-[70px]" : "pb-12"
      }`}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <div className={styles.sectionHeader}>
        {blok?.title?.length > 0 && (
          <StoryblokComponent blok={blok?.title?.[0]} />
        )}
        {blok?.ctaText && (
          <Button
            className={`lg:flex hidden ${styles.viewAllBtn}`}
            variant="outline"
            onClick={() =>
              push(blok?.ctaLink?.cached_url || blok?.ctaLink?.url || "/")
            }
          >
            {blok?.ctaText}
          </Button>
        )}
      </div>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-y-20 ${styles.storyGrid}`}
      >
        {blok?.cards?.length > 0 &&
          blok.cards.map((card) => (
            <StoryblokComponent key={card?._uid} blok={card} />
          ))}
      </div>
      {blok?.dotsPosition?.length > 0 && (
        <Image
          className={`${blok.dotsPosition?.[0]} ${styles.dots}`}
          src={dots}
          alt="dot pattern"
        />
      )}
    </div>
  );
}

export default StoryCardSection;
