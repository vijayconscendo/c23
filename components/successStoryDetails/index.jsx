import React from "react";
import styles from "../blogDetailComponent/blogDetail.module.scss";
import Image from "next/image";
import blogBannerImg from "@/public/Images/banners/home-banner.png";
import ImageWrapper from "../storyblokComponents/imageWrapper";

const SuccessStoryDetails = ({ blok }) => {
  return (
    <div className={styles.blogDetailsPage}>
      <div
        className={`md:max-w-[1280px] md:mx-auto px-4 ${styles.blogDetailComponent}`}
      >
        {/* <div className={styles.breadcrumbs}>
          <ul>
            <li>
              <Link href="/">
                <span>Home</span>
                <ChevronsRight />
              </Link>
            </li>
            <li>
              <Link href="blog-detals-1">
                <span>
                  Digital Transformation As A Service (DTAAS): A Comprehensive
                  Guide by Cloud23
                </span>
              </Link>
            </li>
          </ul>
        </div> */}
        {/* ----- Details Grid ----- */}
        <div className="w-full">
          <div>
            <h1 className={`font-semibold mb-4 ${styles.blogTitle}`}>
              {blok?.title}
            </h1>
            {/* <div
              className={`flex items-center flex-wrap gap-x-3 md:gap-x-8 border-y-2 py-2 my-7 ${styles.info}`}
            >
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <CircleUserRound />
                  <span>By UserName</span>
                </div>
              </div>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <Calendar />
                  <span>June 6, 2024</span>
                </div>
              </div>
            </div> */}
            {blok?.image?.[0] && (
              <div className={`${styles.blogImage} mb-7`}>
                <ImageWrapper
                  blok={blok?.image?.[0]}
                  altText="blog image"
                  width={1140}
                  height={500}
                />
              </div>
            )}
            <div className={styles.content}>
              {blok?.details?.length > 0 &&
                blok.details.map((item) => (
                  <>
                    {item?.title && <h2>{item.title}</h2>}
                    {item?.description && <p>{item?.description}</p>}
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryDetails;
