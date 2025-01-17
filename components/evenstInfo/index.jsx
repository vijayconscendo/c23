import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import styles from "./eventsInfo.module.scss";

// Animation
import { motion } from "framer-motion";
import { storyblokEditable } from "@storyblok/react";

const EventsInfo = ({ blok }) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingRef = useRef(null);
  const recapsRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    transform: "translateX(0)",
  });

  const events =
    activeTab === "upcoming"
      ? blok?.eventsList?.filter((item) => item.status === "upcoming")
      : blok?.eventsList?.filter((item) => item.status !== "upcoming");

  useEffect(() => {
    // Get the width and position of the active tab's text
    const activeRef = activeTab === "upcoming" ? upcomingRef : recapsRef;
    if (activeRef.current) {
      const { width, left } = activeRef.current.getBoundingClientRect();
      const parentLeft =
        activeRef.current.parentElement.getBoundingClientRect().left;
      const offset = left - parentLeft;

      setUnderlineStyle({
        width: `${width}px`,
        transform: `translateX(${offset}px)`,
      });
    }
  }, [activeTab]);

  // Animate Varients
  const boxVariantsRightToLeft = {
    hidden: { opacity: 0, x: 100 }, // Initially hidden and positioned off-screen to the right
    visible: { opacity: 1, x: 0 }, // Final position when visible
  };

  return (
    <div
      className={styles.eventsInfo}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      {/* Tabs */}

      <nav className={`flex gap-8 relative ${styles.eventTabs}`}>
        <button
          ref={upcomingRef}
          onClick={() => setActiveTab("upcoming")}
          className={`transition-colors duration-200 ${
            activeTab === "upcoming" ? `text-primary ${styles.activeTab}` : ""
          }`}
        >
          Upcoming Events
        </button>
        <button
          ref={recapsRef}
          onClick={() => setActiveTab("recaps")}
          className={`transition-colors duration-200 ${
            activeTab === "recaps" ? `text-primary ${styles.activeTab}` : ""
          }`}
        >
          Event Recaps
        </button>
        <div
          className="absolute -bottom-[2px] rounded-sm left-0 h-[4px] bg-primary transition-all duration-300 ease-in-out"
          style={underlineStyle}
        />
      </nav>

      {/* Events List */}
      <div className={`grid ${styles.eventsGrid}`}>
        {events.map((event) => (
          <motion.article
            initial="hidden"
            whileInView="visible"
            variants={boxVariantsRightToLeft}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            key={event?._uid}
            className="group overflow-hidden md:rounded-lg bg-white"
          >
            <div className="md:flex">
              {/* Event Image */}
              <div className="relative h-64 w-full md:h-auto md:w-1/3 rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={`Image for event: ${event.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Details */}
              <div className={`flex-1 pt-6 md:px-6 ${styles.eventDetailCard}`}>
                <h2 className="font-bold text-black">
                  {" "}
                  <Link href={event?.redirectLink?.cached_url || "/"}>
                    {event.title}
                  </Link>
                </h2>
                <div
                  className={`flex flex-wrap justify-between gap-4 ${styles.eventTime}`}
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="h-5 w-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span>{event.date}</span>
                  </div>
                </div>
                <p className={styles.eventDesc}>{event.description}</p>
                <Link
                  href={event?.redirectLink?.cached_url || "/"}
                  aria-label={`View details for ${event.title}`}
                  className={`text-primary font-medium uppercase transition-colors duration-200 focus:outline-none ${styles.readMore}`}
                >
                  <span>VIEW EVENT DETAILS</span>
                  <div className={`bg-primary ${styles.underLine}`}></div>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default EventsInfo;
