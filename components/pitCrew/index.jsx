import React from "react";
import styles from "./pitCrew.module.scss";
import CrewCard from "../genericComponents/crewCard";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const PitCrew = ({ blok }) => {
  return (
    <div className={styles.pitCrew} {...storyblokEditable(blok)} id={blok?.id}>
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[66px]">
        {blok?.members?.length > 0 &&
          blok.members.map((member) => (
            <CrewCard blok={member} key={member?._uid} {...storyblokEditable(member)}/>
          ))}
      </div>
    </div>
  );
};

export default PitCrew;
