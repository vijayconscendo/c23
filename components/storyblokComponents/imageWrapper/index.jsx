import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
function ImageWrapper({ blok, className, altText, width, height }) {
  return (
    <Image
      className={`${className}`}
      src={blok?.src}
      width={blok?.width || width}
      height={blok?.height || height}
      alt={altText || "dummyAltText"}
      {...storyblokEditable(blok)}
      style={{
        maxWidth: "100%",
      }}
    />
  );
}

export default ImageWrapper;
