import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import ImageWrapper from "../storyblokComponents/imageWrapper";
import styles from "./messafeFromCEO.module.scss";

function MessageFromCEO({ blok }) {
  return (
    <section className={styles.messageFromCeo} {...storyblokEditable(blok)}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok?.title?.[0]} />}
      <div
        className={`w-full flex flex-col md:flex-row gap-y-10 gap-x-10 lg:gap-x-[92px] md:gap-x-[82px] ${styles.gridblock}`}
      >
        <div
          className={`order-2 md:order-1 w-full md:w-8/12 text-black ${styles.text}`}
        >
          {blok?.message?.length > 0 &&
            blok.message.map((msg) => render(msg?.text))}
        </div>
        <div className="order-1 md:order-2 w-full md:w-4/12">
          <div className="w-full max-w-[529px">
            {blok?.image?.[0] && (
              <ImageWrapper blok={blok.image[0]} altText="CEO" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageFromCEO;
