import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import ImageWrapper from "../storyblokComponents/imageWrapper";

function MessageFromCEO({ blok }) {
  return (
    <section {...storyblokEditable(blok)}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok?.title?.[0]} />}
      <div className="flex">
        <div>
          {blok?.message?.length > 0 &&
            blok.message.map((msg) => render(msg?.text))}
        </div>
        {blok?.image?.[0] && (
          <ImageWrapper blok={blok.image[0]} altText="CEO" />
        )}
        <div></div>
      </div>
    </section>
  );
}

export default MessageFromCEO;
