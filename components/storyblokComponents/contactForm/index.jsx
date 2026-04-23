import styles from "./contactform.module.scss";
import Link from "next/link";
import Button from "@/components/ui/Button/button";
import { StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const API_PROXY = "/api/submitToGoogleForm";

const ContactForm = ({ blok }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const fields = {
        inquiryType:  data.inquiryType  || "",
        firstName:    data.firstName    || "",
        lastName:     data.lastName     || "",
        email:        data.email        || "",
        mobile:       data.mobile       || "",
        organization: data.organization || "",
        role:         data.role         || "",
        country:      data.country      || "",
        comments:     data.comments     || "",
        consent:      data.consent ? "Yes" : "No",
      };

      const res = await fetch(API_PROXY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast({ variant: "success", title: "Your message has been sent successfully!" });
      reset();
    } catch {
      toast({ variant: "destructive", title: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={blok?.id} className={styles.contactForm}>
      <div className="w-full max-w-6xl">
        {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-11 mt-10">

          <div>
            <input
              type="text"
              placeholder="Inquiry Type"
              className={styles.input}
              {...register("inquiryType", { required: "Inquiry Type is required" })}
            />
            {errors?.inquiryType && (
              <span className="text-primary">{errors.inquiryType.message}</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-11">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
                {...register("firstName", { required: "First Name is required" })}
              />
              {errors?.firstName && (
                <span className="text-primary">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className={styles.input}
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors?.lastName && (
                <span className="text-primary">{errors.lastName.message}</span>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors?.email && (
              <span className="text-primary">{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Mobile Number"
              className={styles.input}
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{7,20}$/,
                  message: "Enter a valid mobile number",
                },
              })}
            />
            {errors?.mobile && (
              <span className="text-primary">{errors.mobile.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Organization Name"
              className={styles.input}
              {...register("organization")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Your Role / Function"
              className={styles.input}
              {...register("role")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Country / Region"
              className={styles.input}
              {...register("country", { required: "Country / Region is required" })}
            />
            {errors?.country && (
              <span className="text-primary">{errors.country.message}</span>
            )}
          </div>

          <div>
            <textarea
              placeholder="How can we help you?"
              rows={4}
              className={styles.textarea}
              {...register("comments", { required: "This message is required" })}
            />
            {errors?.comments && (
              <span className="text-primary">{errors.comments.message}</span>
            )}
          </div>

          <div>
            <div className={`flex items-start gap-4 my-4 ${styles.checkInfo}`}>
              <input
                type="checkbox"
                className="min-h-[30px] min-w-[30px]"
                {...register("consent", { required: "Please accept the privacy policy to proceed" })}
              />
              <label>
                I consent to the processing of my personal information for this
                request in alignment with{" "}
                <Link href="#" className="text-red-500 hover:text-red-600">
                  Cloud23&apos;s Privacy Policy
                </Link>
              </label>
            </div>
            {errors?.consent && (
              <span className="text-primary">{errors.consent.message}</span>
            )}
          </div>

          <Button
            className={styles.submitBtn}
            variant="outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting…" : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
