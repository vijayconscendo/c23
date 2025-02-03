import { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Add Controller import
import styles from "./requestDemo.module.scss";
import SectionTitle from "../genericComponents/title";
import Button from "../ui/Button/button";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const RequestDemo = ({ blok }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange", // Enable real-time validation
    defaultValues: {
      name: "",
      company: "",
      country: "",
      email: "",
      comments: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section className={styles.requestDemo} {...storyblokEditable(blok)}>
        <div className="flex flex-col lg:flex-row gap-x-16 gap-y-6 items-center">
          <div className="w-full lg:w-5/12">
            {blok?.title?.[0] ? (
              <StoryblokComponent blok={blok.title[0]} />
            ) : (
              <SectionTitle title={blok?.title} subTitle={blok?.subTitle} />
            )}
            <p className={styles.desc}>{blok?.description}</p>
          </div>
          <div className="w-full lg:w-7/12">
            <div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name field */}
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <BorderedFloatingInput
                      label="Name"
                      type="text"
                      error={errors.name?.message}
                      {...field}
                    />
                  )}
                />

                <div className="flex flex-col md:flex-row gap-x-5">
                  {/* Company field */}
                  <div className="w-full lg:w-6/12">
                    <Controller
                      name="company"
                      control={control}
                      rules={{
                        required: "Company name is required",
                      }}
                      render={({ field }) => (
                        <BorderedFloatingInput
                          label="Company Name"
                          type="text"
                          error={errors.company?.message}
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {/* Country field */}
                  <div className="w-full lg:w-6/12">
                    <Controller
                      name="country"
                      control={control}
                      rules={{
                        required: "Country is required",
                      }}
                      render={({ field }) => (
                        <BorderedFloatingInput
                          label="Country"
                          type="text"
                          error={errors.country?.message}
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Email field */}
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <BorderedFloatingInput
                      label="Email"
                      type="email"
                      error={errors.email?.message}
                      {...field}
                    />
                  )}
                />

                {/* Comments field */}
                <Controller
                  name="comments"
                  control={control}
                  render={({ field }) => (
                    <BorderedFloatingInput
                      label="Additional Comments"
                      type="text"
                      size="large"
                      error={errors.comments?.message}
                      {...field}
                    />
                  )}
                />

                <Button
                  type="submit"
                  className={styles.submitBtn}
                  variant="outline"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
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

// Updated BorderedFloatingInput to work with Controller
const BorderedFloatingInput = ({
  label,
  type = "text",
  error,
  className = "",
  size = "default",
  value,
  onChange,
  onBlur,
  name,
  ...props
}) => {
  // We can now use value directly from the Controller
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e) => {
    setIsFocused(false);
    // Call the onBlur from Controller
    onBlur?.(e);
  };

  return (
    <div className={`relative w-full mb-10 lg:mb-14 ${className}`}>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder=" "
          className={`
            peer
            w-full
            border
            bg-white
            outline-none
            transition-all
            duration-300
            ${isFocused ? "border-black" : "border-black hover:border-gray-400"}
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
          {...props}
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

export default RequestDemo;
