import React, { useState } from "react";
import styles from "./requestDemo.module.scss";
import SectionTitle from "../genericComponents/title";
import Button from "../ui/Button/button";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const RequestDemo = ({ blok }) => {
  return (
    <>
      <section className={styles.requestDemo} {...storyblokEditable(blok)}>
        <div className="flex flex-col lg:flex-row gap-x-16 gap-y-6 items-center">
          <div className="w-full lg:w-5/12">
            {blok?.title?.[0] ? (
              <StoryblokComponent blok={blok.title[0]} />
            ) : (
              <SectionTitle title={title} subTitle={subTitle} />
            )}

            <p className={styles.desc}>{blok?.description || description}</p>
          </div>
          <div className="w-full lg:w-7/12">
            <div>
              <BorderedFloatingInput label="Name" type="text" name="name" />
              <div className="flex flex-col md:flex-row gap-x-5">
                <div className="w-full lg:w-6/12">
                  <BorderedFloatingInput
                    label="Company Name"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="w-full lg:w-6/12">
                  <BorderedFloatingInput
                    label="Country"
                    type="text"
                    name="name"
                  />
                </div>
              </div>
              <BorderedFloatingInput label="Email" type="text" name="name" />
              <BorderedFloatingInput
                label="Additional Comments"
                type="text"
                name="name"
                size="large"
              />
              <Button
                className={styles.submitBtn}
                variant="outline"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
      {blok?.hasDownloadLink && (
        <p className={styles.infoWithLink} {...storyblokEditable(blok)}>
          Learn more about the digital transformation of core banking......
          <Link href="/">Download Guide</Link>
        </p>
      )}
    </>
  );
};

export default RequestDemo;

const BorderedFloatingInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error = "",
  className = "",
  size = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => setIsFocused(false);

  return (
    <div className={`relative w-full mb-10 lg:mb-14 ${className}`}>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" "
          className={`
              peer
              w-full
              border
              bg-white
              outline-none
              transition-all
              duration-300
              ${
                isFocused
                  ? "border-black"
                  : "border-black hover:border-gray-400"
              }
              ${
                size === "large"
                  ? "min-h-[120px] py-6 px-4 align-top"
                  : "xl:h-20 lg:h-16 h-14 px-4 py-4"
              }
              ${error ? "border-red-500 ring-2 ring-red-200" : ""}
            `}
          style={{
            verticalAlign: size === "large" ? "top" : "middle",
          }}
        />
        <label
          className={`
              absolute
              left-3
              top-0
              px-1
              bg-white
              transition-all
              duration-300
              pointer-events-none
              ${
                isFocused || value
                  ? "text-black text-md -translate-y-1/2 top-0"
                  : `text-[#0000004D] text-base lg:text-xl xl:text-2xl ${
                      size === "large" ? "top-2" : "top-1/2 -translate-y-1/2"
                    }`
              }
              ${error ? "text-red-500" : ""}
            `}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-red-500 text-xs mt-1 pl-4">{error}</p>}
    </div>
  );
};
