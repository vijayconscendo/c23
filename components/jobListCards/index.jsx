import React, { useState, useRef, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import styles from "./jobLisrCards.module.scss";

// Images
import Image from "next/image";
import searchIcon from "@/public/Images/icons/search-icon.png";
import expIcon from "@/public/Images/icons/exp-icon.png";
import mapPin from "@/public/Images/icons/map-pin.png";

import { ChevronDown, ChevronUp } from "lucide-react";
import { storyblokEditable } from "@storyblok/react";
import { useRouter } from "next/router";

const JobListCards = ({ blok }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const router = useRouter();

  const options = [
    { value: "option1", label: "All Relevant Job Results" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 3" },
    { value: "option5", label: "Option 3" },
    { value: "option6", label: "Option 3" },
    { value: "option7", label: "Option 3" },
    { value: "option8", label: "Option 3" },
    { value: "option9", label: "Option 3" },
  ];

  const technologiesList = [
    "Javascript",
    "Salesforce",
    "HTML",
    "React",
    "Next",
    "CSS",
  ];

  const handleApply = () => {
    router.push("/careers/job-details");
  };

  return (
    <section
      className={styles.jobListCards}
      {...storyblokEditable(blok)}
      id={blok?.text}
    >
      {/* ----- SearchBox ----- */}
      <div className={`relative w-full ${styles.searchContainer}`}>
        <div className={styles.inputBox}>
          <div className={styles.searchIcon}>
            <Image src={searchIcon} alt="searchIcon" />
          </div>
          <input
            type="text"
            placeholder="Search for role or location based"
            className="w-full text-base"
          />
        </div>
        <button className="bg-primary text-white px-8">Search</button>
      </div>
      {/* ----- End SearchBox ----- */}

      {/* ----- Filters ----- */}
      <div className={styles.filtersSection}>
        <div className={styles.techChipList}>
          <div className={styles.techChip}>Lorem Ipsum </div>
          <div className={styles.techChip}>Lorem Ipsum </div>
          <div className={styles.techChip}>Lorem Ipsum </div>
          <div className={styles.techChip}>Lorem Ipsum </div>
        </div>
        <div className={styles.filterDropdown}>
          <Select>
            <SelectTrigger
              className={`px-4 py-6 bg-white border-black focus:ring-0 ${styles.selectTrigger}`}
            >
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className={`bg-white ${styles.selectContent}`}>
              <SelectGroup className={`${styles.selectGroup}`}>
                <SelectItem className={`${styles.selectItem}`} value="light">
                  Light
                </SelectItem>
                <SelectItem className={`${styles.selectItem}`} value="dark">
                  Dark
                </SelectItem>
                <SelectItem className={`${styles.selectItem}`} value="system">
                  System
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* ----- End Filters ----- */}

      {/* ----- Job List ----- */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${styles.jobCardGrid}`}
      >
        {[1, 2, 3, 4, 5].map((card, index) => (
          <div className={styles.jobCard} key={index}>
            <div className={styles.jobContent}>
              <h2 className="text-black">Lorem Ipsum Developer</h2>

              <Technologies technologiesList={technologiesList} />
              <div className={styles.jobLocAddType}>
                <div>
                  <Image src={mapPin} alt="location" />
                  <span>Johannesburg, S.A</span>
                </div>
                <div>
                  <Image src={expIcon} alt="job type" />
                  <span>Remote - Full time</span>
                </div>
              </div>
              <p className={styles.explevel}>
                Experience Level : <span>0-2 years</span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleApply}
              className={`text-white bg-primary ${styles.applyBtn}`}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
      {/* ----- End Job List ----- */}
    </section>
  );
};

export default JobListCards;

// Technologies
const Technologies = ({ technologiesList }) => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const technologies = showTechnologies
    ? technologiesList
    : technologiesList.slice(0, 3);
  return (
    <ul className={styles.technologyList}>
      {technologies.map((technology, index) => (
        <li key={index}>
          <div className={styles.technology}>{technology}</div>
        </li>
      ))}
      {!showTechnologies && (
        <li onClick={() => setShowTechnologies(true)}>
          <div
            className={`text-white ${styles.technology} ${styles.overflowCount}`}
          >
            {technologiesList.length - 3}+
          </div>
        </li>
      )}
    </ul>
  );
};
