import React from "react";
import styles from "./blogDetail.module.scss";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import blogBannerImg from "@/public/Images/banners/home-banner.png";

const BlogDetailComponent = () => {
  return (
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
            <Link href="blog-detals-1">
              <span>
                Digital Transformation As A Service (DTAAS): A Comprehensive
                Guide by Cloud23
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* ----- Details Grid ----- */}
      <div className="w-full mt-10">
        <div>
          <h1
            className={`font-semibold w-full md:max-w-[1200px] ${styles.blogTitle}`}
          >
            Digital Transformation As A Service (DTAAS): A Comprehensive Guide
            by Cloud23
          </h1>
          <div
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
          </div>
          <div className={styles.blogImage}>
            <Image src={blogBannerImg} alt="blog image" />
          </div>
          <div className={styles.content}>
            <h2>Introduction</h2>
            <p>
              In an era where technology and business are inextricably linked,
              Digital Transformation As A Service (DTAAS) emerges as a
              groundbreaking approach. Cloud23’s unique blend of technology,
              business transformation, and design thinking has positioned us as
              pioneers in this field. This comprehensive guide explores the
              concept, methodology, and benefits of DTAAS.
            </p>
            <h2>What is Digital Transformation As A Service (DTAAS)?</h2>
            <p>
              DTAAS is not merely a technological shift; it’s a holistic
              transformation that aligns technology, business strategy, and
              human-centered design. It’s about creating meaningful change that
              delivers value to both the organisation and its customers.
            </p>
            <h2>The Cloud23 Approach to DTAAS</h2>
            <h3>Understanding Client Needs</h3>
            <ul>
              <li>
                <p>
                  <span>Empathetic Analysis : </span> Understanding the client’s
                  business objectives, challenges, and customer needs.
                </p>
              </li>
              <li>
                <p>
                  <span>Design Thinking : </span>
                  Applying human-centered design principles to ensure solutions
                  are innovative and user-friendly.
                </p>
              </li>
            </ul>
            <h3>Understanding Client Needs</h3>
            <ul>
              <li>
                <p>
                  <span>Empathetic Analysis : </span> Understanding the client’s
                  business objectives, challenges, and customer needs.
                </p>
              </li>
              <li>
                <p>
                  <span>Design Thinking : </span>
                  Applying human-centered design principles to ensure solutions
                  are innovative and user-friendly.
                </p>
              </li>
            </ul>
            <h3>Understanding Client Needs</h3>
            <ul>
              <li>
                <p>
                  <span>Empathetic Analysis : </span> Understanding the client’s
                  business objectives, challenges, and customer needs.
                </p>
              </li>
              <li>
                <p>
                  <span>Design Thinking : </span>
                  Applying human-centered design principles to ensure solutions
                  are innovative and user-friendly.
                </p>
              </li>
            </ul>
            <h3>Understanding Client Needs</h3>
            <ul>
              <li>
                <p>
                  <span>Empathetic Analysis : </span> Understanding the client’s
                  business objectives, challenges, and customer needs.
                </p>
              </li>
              <li>
                <p>
                  <span>Design Thinking : </span>
                  Applying human-centered design principles to ensure solutions
                  are innovative and user-friendly.
                </p>
              </li>
            </ul>
            <h3>Understanding Client Needs</h3>
            <ul>
              <li>
                <p>
                  <span>Empathetic Analysis : </span> Understanding the client’s
                  business objectives, challenges, and customer needs.
                </p>
              </li>
              <li>
                <p>
                  <span>Design Thinking : </span>
                  Applying human-centered design principles to ensure solutions
                  are innovative and user-friendly.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailComponent;
