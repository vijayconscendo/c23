import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

function MissionAndVision({ blok }) {
  return (
    <section {...storyblokEditable(blok)} id={blok?.id}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <div className="flex">
        {blok?.content?.length > 0 &&
          blok.content.map((item) => (
            <div key={item?._uid} className="flex">
              <ImageWrapper blok={item?.blocks?.[0]} altText={item?.title} />
              <div>
                <h2>{item?.title}</h2>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default MissionAndVision;
