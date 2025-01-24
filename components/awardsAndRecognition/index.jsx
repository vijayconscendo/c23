import React from "react";
import ImageWrapper from "../storyblokComponents/imageWrapper";

function AwardSection({ blok }) {
  return (
    <section className="py-14">
      <div className="w-full flex flex-col md:flex-row justify-between gap-x-5 xl:gap-x-10 gap-y-10 items-end h-full px-0 xl:px-36 overflow-hidden">
        <div className="w-full lg:min-w-[360px] lg:h-[420px] xl:min-w-[345px] xl:h-[460px] flex items-end md:justify-center object-fill">
          {blok?.image?.[0] && (
            <ImageWrapper blok={blok.image[0]} altText={blok?.awardName} />
          )}
        </div>

        <div className="w-full md:w-auto">
          <p className="py-0.5 px-4 text-white text-lg lg:text-xl xl:text-2xl rounded-full bg-primary inline-flex mb-4 leading-normal">
            {blok?.category}
          </p>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-2 leading-relaxed font-semibold text-primary">
            {blok?.awardName}
          </h2>
          <h3 className="text-xl lg:text-2xl xl:text-[32px] leading-relaxed font-medium text-black mb-5">
            {blok?.year}
          </h3>
          <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-black">
            {blok?.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AwardSection;
