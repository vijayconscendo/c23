import React from "react";
import styles from "./job-details.module.scss";
import Image from "next/image";
import location from "@/public/Images/icons/location.png";
import remoteWork from "@/public/Images/icons/suitcase.png";
import save from "@/public/Images/icons/save.png";
import share from "@/public/Images/icons/share.png";
import { getStoryblokApi } from "@storyblok/react";
import { useRouter } from "next/router";
import { ArrowBigRight } from "lucide-react";

function JobDetails() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/careers/job-application");
  };
  return (
    <section className={styles.jobDetailContainer}>
      {/* ----- Page Banner ----- */}
      <div className={styles.pageBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Salesforce Full-Stack Developer </h1>
          {/* ----- Location & Job Type----- */}
          <ul className={styles.location}>
            <li>
              <Image src={location} alt="location" />
              <span className={`font-semibold`}>South Africa</span>
            </li>
            <li>
              <Image src={remoteWork} alt="location" />
              <span className={`font-medium`}>Remote - Full time</span>
            </li>
          </ul>

          {/* ----- Action Buttons ----- */}
          <div className={styles.actionButtons}>
            <button
              onClick={handleRedirect}
              type="button"
              className={`border-2 border-primary font-semibold text-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out ${styles.applyNowBtn}`}
            >
              <span>Apply Now</span>
            </button>
            <div className="flex items-center gap-12 hidden">
              <button type="button" className={styles.btnWithIcon}>
                <Image src={save} alt="save" />
                <span>SAVE JOB</span>
              </button>
              <button type="button" className={styles.btnWithIcon}>
                <Image src={share} alt="share" />
                <span>SHARE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ----- End Page Banner ----- */}

      {/* ----- Job Details Content ----- */}
      <div className={styles.contentBlock}>
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-8 md:gap-x-12">
          <div className="order-2 md:order-1 md:flex-1 md:basis-7/12">
            <div>
              <div className={`${styles.blockTitle}`}>
                <h2>Experience Levels:</h2>
              </div>
              <div className={styles.details}>
                <ul>
                  <li>
                    <p>
                      <strong>Junior/Entry-Level : </strong> 0-2 years of
                      experience
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mid-Level : </strong> 2-5 years of experience
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Senior-Level : </strong> 5+ years of experience
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className={`mt-12 ${styles.blockTitle}`}>
                <h2>Skill Sets:</h2>
              </div>
              <div className={styles.details}>
                <h3 className="flex items-center gap-2">
                  <ArrowBigRight /> Junior/Entry-Level:
                </h3>
                <ul>
                  <li>
                    <p>
                      Bachelor’s degree in Computer Science or related field.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong attention to detail and excellent problem-solving
                      skills.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong verbal/written communication and data presentation
                      skills, including an ability to effectively communicate
                      with both business and technical teams.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.details}>
                <h3 className="flex items-center gap-2">
                  <ArrowBigRight /> Mid-Level:
                </h3>
                <ul>
                  <li>
                    <p>
                      Bachelor’s degree in Computer Science or related field.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong attention to detail and excellent problem-solving
                      skills.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong verbal/written communication and data presentation
                      skills, including an ability to effectively communicate
                      with both business and technical teams.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.details}>
                <h3 className="flex items-center gap-2">
                  <ArrowBigRight /> Senior-Level :
                </h3>
                <ul>
                  <li>
                    <p>
                      Bachelor’s degree in Computer Science or related field.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong attention to detail and excellent problem-solving
                      skills.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong verbal/written communication and data presentation
                      skills, including an ability to effectively communicate
                      with both business and technical teams.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className={styles.blockTitle}>
              <h2>Job Details</h2>
            </div>
            <div className={styles.details}>
              <p>
                The Salesforce Full Stack Developer position will work closely
                with functional leaders, organizational units, and subject
                matter experts in developing solutions. This position will be
                responsible for all technical aspects of Salesforce.com,
                including data migrations, data quality, systems integrations,
                3rd party applications, AppExchange products, integration, and
                custom code.
              </p>
            </div> */}

            {/* <div className={`mt-12 ${styles.blockTitle}`}>
              <h2>Job Responsibilities</h2>
            </div> */}
            {/* <div className={styles.details}>
              <ul>
                <li>
                  <p>
                    Ownership of all technical aspects of Salesforce.com,
                    including data migrations, data quality, systems
                    integrations, 3rd party applications, AppExchange products,
                    and custom code
                  </p>
                </li>
                <li>
                  <p>
                    Responsible for developing in Visualforce, Apex, Java, AJAX,
                    and other technologies to build customized solutions that
                    support business requirements and drive key business
                    decisions
                  </p>
                </li>
                <li>
                  <p>
                    Technical leadership, setting best practices including
                    integration and application development, deployment, testing
                    (unit and systems), and iterative refinement
                  </p>
                </li>
                <li>
                  <p>
                    Seek out ways to utilize SFDC to improve processes and
                    productivity, and make recommendations to support an
                    organization scaling at a rapid pace
                  </p>
                </li>
                <li>
                  <p>
                    Define, communicate, and manage a change management
                    (release) process to develop and implement new
                    applications/code and updates to existing applications/code
                  </p>
                </li>
                <li>
                  <p>
                    Work with team remotely and should be able to self-manage
                    with respect to the work items on a day to day basis.
                  </p>
                </li>
              </ul>
            </div> */}

            {/* <div className={`mt-12 ${styles.blockTitle}`}>
              <h2>Job Requirements</h2>
            </div> */}
            {/* <div className={styles.details}>
              <ul>
                <li>
                  <p>
                    Interactively plagiarize covalent “outside the box” thinking
                    vis-a-vis.
                  </p>
                </li>
                <li>
                  <p>
                    Holisticly communicate integrated channels via backend
                    interfaces. Authoritatively.
                  </p>
                </li>
                <li>
                  <p>
                    Globally actualize effective processes through synergistic
                    ROI. Interactively.
                  </p>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="order-1 md:order-2 md:flex-1 md:basis-5/12">
            <div className="w-full lg:ml-auto">
              <h2 className={styles.titleTypeTwo}>Job Overview</h2>
              <div className={styles.jobOverview}>
                <ul>
                  <li>
                    <h4>Job Category</h4>
                    <p>: Technology</p>
                  </li>
                  <li>
                    <h4>Role</h4>
                    <p>: Developer</p>
                  </li>
                  <li>
                    <h4>Location</h4>
                    <p>: Johannesburg, South Africa</p>
                  </li>
                  <li>
                    <h4>Date Published</h4>
                    <p>: 21 Oct 2024</p>
                  </li>
                  <li>
                    <h4>Employment Type</h4>
                    <p>: Full-Time</p>
                  </li>
                  <li>
                    <h4>Work Model</h4>
                    <p>: Hybrid</p>
                  </li>
                  <li>
                    <h4>Hours Required</h4>
                    <p>: 40hrs/Week</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetails;

export async function getStaticProps({ preview }) {
  let sbParams = {
    version: preview ? "draft" : "published", // or 'published'
    token: process.env.STORYBLOK_ACCESS_TOKEN,
  };

  const storyblokApi = getStoryblokApi();
  let { data: config } = await storyblokApi.get("cdn/stories/config", sbParams);

  return {
    props: {
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}
