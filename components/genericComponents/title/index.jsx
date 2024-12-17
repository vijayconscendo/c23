import React from "react";
import css from "../commonComponent.module.scss";
import { storyblokEditable } from "@storyblok/react";

/**
 * Title component
 * @prop {string} title Section title
 * @prop {string} subTitle subtitle of section
 * @prop {boolean} underline show underline under title & subtitle if true, otherwise hide
 * @prop {object} customClass apply custom classes if sent, otherwise uses default props
 */

function SectionTitle({ blok }) {
  let classNames = {
    title: blok?.styles?.includes("title-white")
      ? "text-white"
      : "text-primary",
    subTitle: blok?.styles?.includes("subTitle-red")
      ? "text-primary"
      : "text-black",
    underline: blok?.styles?.includes("underline-white")
      ? "bg-white"
      : "bg-primary",
  };

  return (
    blok?._uid && (
      <div className={css.sectionTitle} {...storyblokEditable(blok)}>
        <span className={classNames.title}>{blok?.title}</span>
        {blok?.subTitle && (
          <h2 className={classNames.subTitle}>{blok?.subTitle}</h2>
        )}
        {blok?.underline && (
          <div className={`${classNames.underline} ${css.line}`}></div>
        )}
      </div>
    )
  );
}

export default SectionTitle;
