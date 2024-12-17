import React from "react";
import styles from "./blogdetails.module.scss";
import BlogDetailComponent from "@/components/blogDetailComponent";

const BlogDetails = () => {
  return (
    <div className={styles.blogDetailsPage}>
      <BlogDetailComponent />
    </div>
  );
};

export default BlogDetails;
