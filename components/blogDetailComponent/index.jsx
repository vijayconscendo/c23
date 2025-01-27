import React from "react";
import styles from "./blogDetail.module.scss";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Calendar } from "lucide-react";
import ImageWrapper from "../storyblokComponents/imageWrapper";
import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react";

const BlogDetailComponent = ({ blok }) => {
  return (
    <div className={styles.blogDetailsPage} {...storyblokEditable(blok)}>
      <div className={styles.blogDetailComponent}>
        <div className={styles.breadcrumbs}>
          <ul>
            <li>
              <Link href="/">
                <span>Home</span>
                <ChevronsRight />
              </Link>
            </li>
            <li>
              <span>{blok?.title}</span>
            </li>
          </ul>
        </div>
        {/* ----- Details Grid ----- */}
        <div className="w-full mt-10">
          <div>
            <h1
              className={`font-semibold w-full md:max-w-[1200px] ${styles.blogTitle}`}
            >
              {blok?.title}
            </h1>
            <div
              className={`flex items-center flex-wrap gap-x-3 md:gap-x-8 border-y-2 py-2 my-7 ${styles.info}`}
            >
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <CircleUserRound />
                  <span>{blok?.username}</span>
                </div>
              </div>
              {blok?.date && (
                <div className="py-2">
                  <div className="flex items-center gap-2">
                    <Calendar />
                    <span>{blok?.date}</span>
                  </div>
                </div>
              )}
            </div>
            {blok?.image?.[0] && (
              <div className={styles.blogImage}>
                <ImageWrapper
                  blok={blok?.image?.[0]}
                  altText="blog image"
                  width={1140}
                  height={500}
                />
              </div>
            )}

            <div className={styles.content}>{render(blok?.data)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailComponent;
