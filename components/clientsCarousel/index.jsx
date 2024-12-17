import React from "react";
import CustomCarousel from "../genericComponents/customCarousel";
import styles from "../genericComponents/customCarousel/customCarousel.module.scss";

// Client Logo Images
import stanlib from "@/public/Images/carousel/stanlib.png";
import refauahhealth from "@/public/Images/carousel/refauahhealth.png";
import scp from "@/public/Images/carousel/scp.png";
import standardbank from "@/public/Images/carousel/standardbank.png";
import SectionTitle from "../genericComponents/title";
import fffffff from "@/public/Images/carousel/fffffff.png";

const clientLogos = [
  {
    name: "stanlib",
    src: fffffff,
    alt: "stanlib",
  },
  {
    name: "refauahhealth",
    src: fffffff,
    alt: "refauahhealth",
  },
  {
    name: "scp",
    src: fffffff,
    alt: "scp",
  },
  {
    name: "standardbank",
    src: fffffff,
    alt: "standardbank",
  },
];

const ClientsCarousel = ({ title = "", subTitle = "" }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.sectionHeader}>
        <SectionTitle title={title} subTitle={subTitle} />
      </div>
      <div className={styles.insertedCarousel}>
        <CustomCarousel logos={clientLogos} />
      </div>
    </div>
  );
};

export default ClientsCarousel;
