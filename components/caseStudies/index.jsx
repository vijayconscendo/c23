import React from "react";
import styles from "./caseStudies.module.scss";
import StoryCard from "../genericComponents/storyCard";
import Image from "next/image";
import dots from "@/public/Images/patterns/dots4.png";
import Button from "../ui/Button/button";
import SectionTitle from "../genericComponents/title";

const CaseStudies = () => {
  return (
    <section className={`relative ${styles.caseStudies}`}>
      <div className={styles.sectionHeader}>
        <SectionTitle
          title="CASE STUDIES"
          subTitle="Real Stories. Real Impact."
        />
        <Button
          className={`lg:flex hidden ${styles.viewAllBtn}`}
          variant="outline"
        >
          View All
        </Button>
      </div>

      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-y-14 ${styles.storyGrid}`}
      >
        <StoryCard showDate={true} ctaText="READ MORE" />
        <StoryCard showDate={true} ctaText="READ MORE" />
        <StoryCard showDate={true} ctaText="READ MORE" />
      </div>
      <Image className={styles.dots} src={dots} alt="dot pattern" />
      <div className="mt-16 flex w-full justify-center lg:hidden">
        <Button className={styles.viewAllBtn} variant="outline">
          View All
        </Button>
      </div>
    </section>
  );
};

export default CaseStudies;
