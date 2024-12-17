import styles from "./features.module.scss";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import dots from "@/public/Images/patterns/dots4.png";
import Image from "next/image";

function Features({ blok }) {
  return (
    <div
      className={styles.imageTextBlockSection}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <Image
        width={204}
        height={196}
        src={dots}
        alt="dots pattern"
        className="absolute z-0 top-0 right-0"
      />
      <div className={styles.sectionHeader}>
        <StoryblokComponent blok={blok?.title?.[0]} />
      </div>
      {blok?.features?.length > 0 &&
        blok?.features?.map((feature) => (
          <StoryblokComponent blok={feature} key={feature?._uid} />
        ))}
    </div>
  );
}

export default Features;
