import styles from "./locations.module.scss";

// Images
import Image from "next/image";
import callIcon from "@/public/Images/icons/call.png";
import directionIcon from "@/public/Images/icons/direction.png";
import Link from "next/link";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Locations = ({ blok }) => {
  return (
    <section
      className={styles.locations}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${styles.gridBlock}`}
      >
        {blok?.locations?.map((location) => (
          <LocationCard key={location?._uid} blok={location} />
        ))}
      </div>
    </section>
  );
};

export default Locations;

const LocationCard = ({ blok }) => {
  const {
    image,
    city,
    country,
    continent,
    address,
    phoneNumber,
    directionsLink,
  } = blok;

  return (
    <div className={styles.locationCard}>
      <div
        className={`relative aspect-[16/9] w-full overflow-hidden ${styles.cardImage}`}
      >
        <Image
          alt={city}
          className={`w-full h-full object-cover transition-transform duration-300 ${styles.image}`}
          src={image}
          width={396}
          height={252}
        />
      </div>
      <div className={styles.locationCardContent}>
        <h3>{city}</h3>
        <ul>
          <li>{country}</li>
          <li>{continent}</li>
        </ul>
        <div className={styles.address}>
          <span>Address :</span>
          <p>{address}</p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-x-2 gap-y-4">
        {phoneNumber && (
          <Link href={`tel:${phoneNumber}`} className={styles.link}>
            <Image src={callIcon} alt="Mobile Number" />
            <span>{phoneNumber}</span>
          </Link>
        )}
        {directionsLink && (
          <Link href={directionsLink || ""} className={styles.link}>
            <Image src={directionIcon} alt="Directions" />
            <span>Get Directions</span>
          </Link>
        )}
      </div>
    </div>
  );
};
