import React from "react";
import { Check } from "lucide-react";
import styles from "./applnSucces.module.scss";
import rightArrowDouble from "@/public/Images/icons/right-arrow-double.png";
import Link from "next/link";
import Image from "next/image";

function CongratsPage() {
  return (
    <section className={styles.stepperSection}>
      <div className={styles.jobApplication}>
        <div className={styles.breadcrumbs}>
          <ul>
            <li>
              <Link href="/careers">
                <span>Careers</span>
                <Image src={rightArrowDouble} alt="right-arrow-double" />
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <span>Join Our Team</span>
                <Image src={rightArrowDouble} alt="right-arrow-double" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>Job Application</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.applicationMsg}>
        Your Application Submitted Successfully. You can view the application
        status below
      </p>

      {/* ----- Stepper  ----- */}
      <div className={styles.stepperScroll}>
        <div className={styles.stepperContainer}>
          <div className={`flex items-center ${styles.stepper}`}>
            <div className="flex items-center text-white relative">
              <div className="bg-primary border-primary flex items-center justify-center rounded-full transition duration-500 ease-in-out h-6 w-6 border">
                <Check width={15} height={15} />
              </div>
              <div className="absolute top-0 -ml-24 text-center mt-10 w-52 text-xs font-medium  text-primary">
                <span>Application Received</span>
              </div>
            </div>
            <div className="flex-auto border-t transition duration-500 ease-in-out border-primary"></div>
            <div className="flex items-center text-white relative">
              <div className="bg-primary border-primary flex items-center justify-center rounded-full transition duration-500 ease-in-out h-6 w-6 border">
                <Check width={15} height={15} />
              </div>
              <div className="absolute top-0 -ml-24 text-center mt-10 w-52 text-xs font-medium  text-black">
                <span>Initial review</span>
              </div>
            </div>
            <div className="flex-auto border-t transition duration-500 ease-in-out border-[#DB2D384D]"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-6 w-6 border border-[#DB2D384D]"></div>
              <div className="absolute top-0 -ml-24 text-center mt-10 w-56 text-xs font-medium  text-black">
                <span>Getting to know you</span>
              </div>
            </div>
            <div className="flex-auto border-t transition duration-500 ease-in-out border-[#DB2D384D]"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-6 w-6 border border-[#DB2D384D]"></div>
              <div className="absolute top-0 -ml-24 text-center mt-10 w-56 text-xs font-medium  text-black">
                <span>Interview with our Team</span>
              </div>
            </div>
            <div className="flex-auto border-t transition duration-500 ease-in-out border-[#DB2D384D]"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-6 w-6 border border-[#DB2D384D]"></div>
              <div className="absolute top-0 -ml-24 text-center mt-10 w-56 text-xs font-medium  text-black">
                <span>Offer Extended</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----- Stepper  ----- */}

      {/* ----- Congratulations ----- */}
      <div className={styles.congratsContent}>
        <h2>Congratulations! </h2>
        <p>
          Your application has successfully moved to the next stage, and we are
          excited to get to know you better. Our team will reach out to you
          shortly with details for the upcoming interaction.
        </p>
        <p>
          In the meantime, we encourage you to explore our work, values, and
          ongoing initiatives to familiarize yourself with what we do. This will
          help you understand our culture and how you can be part of our
          journey.
        </p>
        <button
          type="button"
          className="border-2 border-primary text-primary font-semibold rounded-md hover:text-white hover:bg-primary"
        >
          About us
        </button>
      </div>
      {/* ----- End Congratulations ----- */}
    </section>
  );
}

export default CongratsPage;
