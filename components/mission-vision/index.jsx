import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";
import ImageWrapper from "../storyblokComponents/imageWrapper";
import styles from "./mission-vision.module.scss";

function MissionAndVision({ blok }) {
  return (
    <section
      className={styles.missionAndVision}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <div
        className={`${styles.gridblock} flex flex-col md:flex-row md:gap-x-4 gap-y-10 w-full justify-between`}
      >
        {blok?.content?.length > 0 &&
          blok.content.map((item) => (
            <div key={item?._uid} className="flex items-start">
              <ImageWrapper blok={item?.blocks?.[0]} altText={item?.title} />
              <div>
                <h2 className="text-primary">{item?.title}</h2>
                <p className="text-black">{item?.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default MissionAndVision;
