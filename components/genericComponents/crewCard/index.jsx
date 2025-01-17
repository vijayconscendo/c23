import React, { useState } from "react";
import styles from "./crewCard.module.scss";
import Image from "next/image";
import crewbg from "@/public/Images/patterns/crew-bg.png";
import car from "@/public/Images/team/car.png";
import cancelIcon from "@/public/Images/icons/cancel-icon.png";
import ImageWrapper from "@/components/storyblokComponents/imageWrapper";
import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const CrewCard = ({ blok }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative ${styles.crewCard}`}
        onClick={() => setIsModalOpen(true)}
        {...storyblokEditable(blok)}
      >
        <div className={`relative ${styles.topHeader}`}>
          <Image className={styles.crewBg} src={crewbg} alt="crewbg" />
          <ImageWrapper
            className={styles.person}
            blok={blok?.image?.[0]}
            altText="person"
          />
          <Image className={styles.carImg} src={car} alt="car" />
        </div>
        <div className={styles.content}>
          <h3>{blok?.name}</h3>
          <p>{blok?.role}</p>
        </div>
      </div>

      {/* Open Modal  */}

      {/* {isOpen && ( */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        {...storyblokEditable(blok)}
      >
        <div className={`flex ${styles.modalContent}`}>
          <div className="md:px-5">
            <h2 className="text-primary">{blok?.name}</h2>
            <span className="text-primary">{blok?.role}</span>
            {render(blok?.content || "")}
          </div>
          <div className={`bg-primary h-full ${styles.profile}`}>
            <ImageWrapper blok={blok?.image?.[0]} altText="person" />
            <Image className={styles.carImg} src={car} alt="car" />
          </div>
        </div>
      </Modal>
      {/* )} */}
    </>
  );
};

export default CrewCard;

// Modal

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2 md:p-6 lg:p-9">
        <div className="relative w-full transform rounded-lg bg-white p-6 shadow-xl transition-all">
          {/* Header */}
          <div className="flex items-center justify-end mb-4">
            <button
              onClick={onClose}
              className="w-10 rounded-full p-0.5 hover:bg-gray-100 transition-colors"
            >
              <Image src={cancelIcon} alt="cancelIcon" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
