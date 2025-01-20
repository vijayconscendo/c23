import React from "react";
import styles from "./blogdetails.module.scss";
import BlogDetailComponent from "@/components/blogDetailComponent";
import Layout from "@/components/Layout";
import { getStoryblokApi } from "@storyblok/react";

const BlogDetails = () => {
  return (
    <div className={styles.blogDetailsPage}>
      <BlogDetailComponent />
    </div>
  );
};

export default BlogDetails;

export async function getStaticProps({ preview }) {
  let sbParams = {
    version: preview ? "draft" : "published", // or 'published'
    token: process.env.STORYBLOK_ACCESS_TOKEN,
  };

  const storyblokApi = getStoryblokApi();
  let { data: config } = await storyblokApi.get("cdn/stories/config", sbParams);

  return {
    props: {
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}
