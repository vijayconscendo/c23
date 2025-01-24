import React from "react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

function AwardSection({ blok }) {
  return (
    <section>
      <div className="flex justify-between gap-4">
        {blok?.image?.[0] && (
          <ImageWrapper blok={blok.image[0]} altText={blok?.awardName} />
        )}

        <div>
          <p>{blok?.category}</p>
          <h2>{blok?.awardName}</h2>
          <h3>{blok?.year}</h3>
          <p>{blok?.description}</p>
        </div>
      </div>
    </section>
  );
}

export default AwardSection;
