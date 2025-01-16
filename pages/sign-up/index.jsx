import React, { useState } from "react";
import styles from "../sign-in/signIn.module.scss";

// Images

import Link from "next/link";
import Input from "@/components/ui/Input";
import { getStoryblokApi } from "@storyblok/react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className={styles.signinpage}>
      <div className="min-h-screen">
        <div className={styles.signInForm}>
          <h1>New User Registration</h1>
          <div className={styles.signInCard}>
            <Input
              id="uname"
              name="username"
              label="Username"
              labelClassName="#00000066"
            />
            <Input
              id="email"
              name="email"
              label="Email Address"
              labelClassName="#00000066"
            />
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              labelClassName="#00000066"
            />
            <Input
              id="confirmPwd"
              name="confirmPwd"
              label="Confirm Password"
              labelClassName="#00000066"
              type="password"
            />

            <button
              type="button"
              className={`bg-primary text-white ${styles.signInButton}`}
            >
              Sign up
            </button>
            {/* ----- User Existance ----- */}
            <p className={styles.userExistText}>
              Have an Account ? <Link href="/">Signin here</Link>
            </p>
            {/* ----- End User Existance ----- */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;

