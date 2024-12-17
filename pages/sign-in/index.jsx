import React, { useState } from "react";
import styles from "./signIn.module.scss";

// Images
import Image from "next/image";
import linkedin from "@/public/Images/icons/devicon-linkedin.png";
import gmail from "@/public/Images/icons/google-gmail.png";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { getStoryblokApi } from "@storyblok/react";

function SignIn() {
  return (
    <section className={styles.signinpage}>
      <div className="min-h-screen">
        <div className={styles.signInForm}>
          <h1>Join C23 – Sign In or Create an Account to Apply</h1>
          <div className={styles.signInCard}>
            <Input
              name="email"
              id="email"
              label="Email address"
              labelClassName="#00000066"
            />
            <Input
              name="password"
              id="password"
              type="password"
              label="Password"
              labelClassName="#00000066"
              forgotPwdCta={true}
            />

            <button
              type="button"
              className={`bg-primary text-white ${styles.signInButton}`}
            >
              Sign in
            </button>
            <p className={styles.signinusing}>
              <span>(or)</span> Sign in using
            </p>

            {/* -----SSO Login Button----- */}

            <div
              className={`flex items-center justify-between gap-10 w-full ${styles.sociallogButtons}`}
            >
              <button
                type="button"
                className=" flex items-center justify-center gap-3 border-2 w-full border-primary text-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out rounded-md font-semibold"
              >
                LinkedIn
                <Image width={23} height={23} src={linkedin} alt="linkedin" />
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3  border-2 w-full border-primary text-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out rounded-md font-semibold"
              >
                Gmail
                <Image width={23} height={23} src={gmail} alt="linkedin" />
              </button>
            </div>
            {/* -----End SSO Login Button----- */}

            {/* ----- User Existance ----- */}
            <p className={styles.userExistText}>
              New User? <Link href="/">Signup here</Link>{" "}
            </p>
            {/* ----- End User Existance ----- */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;

export async function getStaticProps() {
  let sbParams = {
    version: process.env.STORYBLOK_VERSION, // or 'published'
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
