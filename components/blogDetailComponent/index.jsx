import React from "react";
import styles from "./blogDetail.module.scss";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Calendar } from "lucide-react";
import ImageWrapper from "../storyblokComponents/imageWrapper";
import { render } from "storyblok-rich-text-react-renderer";

const BlogDetailComponent = ({ blok }) => {
  return (
    <div className={styles.blogDetailsPage}>
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
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <Calendar />
                  <span>{blok?.date}</span>
                </div>
              </div>
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

            <div className={styles.content}>
              {blok?.content?.map((item, index) => {
                if (item?.component === "textAndBlock") {
                  return (
                    <>
                      <h2>{item?.title}</h2>
                      <p>{item?.description}</p>
                    </>
                  );
                } else if (item?.component === "blogContentListSection") {
                  return (
                    <>
                      <h2>{item?.title}</h2>
                      {item?.content?.map((listItem) => (
                        <>
                          <h3>{listItem?.title}</h3>
                          <ul>
                            {listItem?.points?.map((point, index) => (
                              <li key={index}>
                                <p>
                                  <span>{point.key} </span> {point.value}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </>
                      ))}
                    </>
                  );
                } else if (item?.component === "skills") {
                  return <p key={index}>{item?.skills}</p>;
                } else if (item?.component === "richTextWithTitle") {
                  return (
                    <>
                      <h2>{item?.title}</h2>
                      <p>{render(item?.text)}</p>
                    </>
                  );
                }
              })}
              {/* <h2> {render(blok?.content?.[0]?.title)}</h2>
              {render(blok?.content?.[0]?.text)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailComponent;
