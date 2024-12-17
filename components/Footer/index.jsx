import Link from "next/link";
import styles from "./footer.module.scss";

// Images
import Image from "next/image";
import cLogo from "../../public/Images/logo-c.png";
import logo23 from "../../public/Images/logo-23.png";
import rightArrowRed from "../../public/Images/icons/right-arrow-red.png";
import locationIcon from "../../public/Images/icons/pin-location.png";
import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  return (
    <footer
      className={styles.footerSec}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <div className={styles.topFooter}>
        <div
          className={`grid lg:grid-cols-12 gap-y-12 ${styles.commonFooterCOntainer}`}
        >
          <div className={`md:col-span-6 lg:col-span-5 ${styles.blockOne}`}>
            <Link href="/" className={styles.footerLogo}>
              <Image src={cLogo} alt="logo" />
              <Image src={logo23} alt="logo" />
            </Link>
            <p>{blok?.desc}</p>
            <div className={styles.socialIcons}>
              {blok?.socialMedial?.map((item) => (
                <Link href={item?.link?.url || ""} key={item?._uid}>
                  <Image
                    width={29}
                    height={29}
                    src={item?.image}
                    alt="youtube"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className={` md:col-span-6 lg:col-span-3 ${styles.blockTwo}`}>
            <h3>Useful Links</h3>
            <ul className={styles.links}>
              {blok?.usefulLinks?.map((item) => (
                <li key={item?._uid}>
                  <Link href={item?.Link?.cached_url || item?.Link?.url}>
                    <Image src={rightArrowRed} alt="rightArrowRed" />
                    <span>{item?.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={` md:col-span-12 lg:col-span-4 ${styles.blockThree}`}>
            <h3>Find Us</h3>
            <ul className={styles.links}>
              {blok?.locations?.map((item) => (
                <li key={item?._uid}>
                  <Link href={item?.Link?.cached_url || ""}>
                    <Image src={locationIcon} alt="location icon" />
                    <span>{item?.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div
          className={`grid lg:grid-cols-12 gap-y-10 ${styles.commonFooterCOntainer}`}
        >
          <div className="col-span-6">
            <p>{blok?.copyRight}</p>
          </div>
          <div className="col-span-6">
            <div className={` lg:justify-end ${styles.links}`}>
              {blok?.otherLinks?.map((item) => (
                <Link href={item?.Link?.cached_url} key={item?._uid}>
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
