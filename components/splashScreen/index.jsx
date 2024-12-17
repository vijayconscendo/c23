import React from "react";
import styles from "./splashscreen.module.scss";
import Image from "next/image";
import logo from "../../public/Images/logo.png";

const SplashScreen = () => {
  return (
    <div className={`flex flex-row ${styles.splashScreen}`}>
      <div className={styles.logoContainer}>
        <div
          className={styles.logo}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <Image src={logo} alt="logo" />
        </div>
        <div className={styles.loadingtext}>
          <span>Loading</span>
        </div>
      </div>
      <div className={`w-6/12 ${styles.leftColumn}`}></div>
      <div className={`w-6/12 ${styles.rightColumn}`}></div>
    </div>
  );
};

export default SplashScreen;
