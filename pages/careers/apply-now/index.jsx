import Link from "next/link";
import Image from "next/image";
import Input from "@/components/ui/Input";
import { useState } from "react";
import CongratsPage from "@/components/congrats";
import { getStoryblokApi } from "@storyblok/react";
import rightArrowDouble from "@/public/Images/icons/right-arrow-double.png";
import careers from "../careers.module.scss";
import styles from "./applyNow.module.scss";

// ─────────────────────────────────────────────────────────────
// Google Form configuration
// 1. Create a Google Form with the 9 fields listed below.
// 2. In the form, click ⋮ → "Get pre-filled link", fill one
//    field at a time, copy the URL, and extract each entry ID.
// 3. Replace the placeholder values below (or set them as
//    environment variables in .env.local):
//      NEXT_PUBLIC_APPLY_FORM_ACTION=https://docs.google.com/forms/d/e/<FORM_ID>/formResponse
//      NEXT_PUBLIC_APPLY_ENTRY_FULL_NAME=entry.XXXXXXXXX
//      ... (one per field)
// ─────────────────────────────────────────────────────────────
const FORM_ACTION =
  process.env.NEXT_PUBLIC_APPLY_FORM_ACTION ||
  "https://docs.google.com/forms/d/e/1FAIpQLSda31SrImKzzKZzz0swQUgk4505H0Q6Pt8aV0HAI8jHI0m3IQ/formResponse";

const ENTRIES = {
  fullName:           "entry.1938088376",
  email:              "entry.1947512149",
  phone:              "entry.2089485738",
  location:           "entry.1296552097",
  jobRole:            "entry.1183375666",
  totalExperience:    "entry.708428528",
  relevantExperience: "entry.369804658",
  skills:             "entry.1668311134",
  resumeLink:         "entry.1896250116",
};

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  jobRole: "",
  totalExperience: "",
  relevantExperience: "",
  skills: "",
  resumeLink: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE   = /^https?:\/\/.+/i;

function validate(data) {
  const errs = {};
  if (!data.fullName.trim())           errs.fullName           = "Full Name is required";
  if (!data.email.trim())              errs.email              = "Email is required";
  else if (!EMAIL_RE.test(data.email)) errs.email              = "Enter a valid email address";
  if (!data.phone.trim())              errs.phone              = "Phone Number is required";
  if (!data.location.trim())           errs.location           = "Current Location is required";
  if (!data.jobRole.trim())            errs.jobRole            = "Job Role / Position is required";
  if (!data.totalExperience.trim())    errs.totalExperience    = "Total Experience is required";
  if (!data.relevantExperience.trim()) errs.relevantExperience = "Relevant Experience is required";
  if (!data.skills.trim())             errs.skills             = "Skills are required";
  if (!data.resumeLink.trim())         errs.resumeLink         = "Resume Link is required";
  else if (!URL_RE.test(data.resumeLink)) errs.resumeLink      = "Enter a valid URL (e.g. Google Drive link)";
  return errs;
}

export default function ApplyNow() {
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [errors, setErrors]       = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [submitError, setSubmitError]   = useState("");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      // Required Google Forms system fields
      params.append("fvv", "1");
      params.append("pageHistory", "0");
      params.append("fbzx", Date.now().toString());
      // Form data
      Object.entries(ENTRIES).forEach(([key, entryId]) => {
        params.append(entryId, formData[key] || "");
      });

      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });

      setIsSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) return <CongratsPage />;

  return (
    <div className={careers.jobApplication}>
      {/* ── Breadcrumbs ── */}
      <div className={careers.breadcrumbs}>
        <ul>
          <li>
            <Link href="/careers">
              <span>Careers</span>
              <Image src={rightArrowDouble} alt="" />
            </Link>
          </li>
          <li>
            <Link href="/careers/apply-now">
              <span>Apply Now</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* ── Page heading ── */}
      <div className={careers.instructions}>
        <h1>Job Application</h1>
        <p className={careers.caption}>
          Fill in the details below and submit your application. Our team will
          review it and get back to you shortly.
        </p>
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Personal &amp; Professional Details</h2>

          {/* Full Name */}
          <div className="flex flex-col gap-y-2 mb-2">
            <div className="w-full">
              <Input
                label="Full Name"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange("fullName")}
                error={!!errors.fullName}
              />
              {errors.fullName && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.fullName}</p>
              )}
            </div>
          </div>

          {/* Email | Phone */}
          <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
            <div className="w-full md:w-6/12">
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange("email")}
                error={!!errors.email}
              />
              {errors.email && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.email}</p>
              )}
            </div>
            <div className="w-full md:w-6/12">
              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange("phone")}
                error={!!errors.phone}
              />
              {errors.phone && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Current Location | Job Role */}
          <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
            <div className="w-full md:w-6/12">
              <Input
                label="Current Location"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange("location")}
                error={!!errors.location}
              />
              {errors.location && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.location}</p>
              )}
            </div>
            <div className="w-full md:w-6/12">
              <Input
                label="Job Role / Position"
                id="jobRole"
                name="jobRole"
                required
                value={formData.jobRole}
                onChange={handleChange("jobRole")}
                error={!!errors.jobRole}
              />
              {errors.jobRole && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.jobRole}</p>
              )}
            </div>
          </div>

          {/* Total Experience | Relevant Experience */}
          <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
            <div className="w-full md:w-6/12">
              <Input
                label="Total Experience"
                id="totalExperience"
                name="totalExperience"
                placeholder="e.g. 5 years"
                required
                value={formData.totalExperience}
                onChange={handleChange("totalExperience")}
                error={!!errors.totalExperience}
              />
              {errors.totalExperience && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.totalExperience}</p>
              )}
            </div>
            <div className="w-full md:w-6/12">
              <Input
                label="Relevant Experience"
                id="relevantExperience"
                name="relevantExperience"
                placeholder="e.g. 3 years"
                required
                value={formData.relevantExperience}
                onChange={handleChange("relevantExperience")}
                error={!!errors.relevantExperience}
              />
              {errors.relevantExperience && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.relevantExperience}</p>
              )}
            </div>
          </div>

          {/* Skills — textarea */}
          <div className={styles.textareaContainer}>
            <label htmlFor="skills">
              Skills <span className={styles.required}>*</span>
            </label>
            <textarea
              id="skills"
              name="skills"
              rows={3}
              placeholder="Enter your key skills relevant to the job role"
              value={formData.skills}
              onChange={handleChange("skills")}
              required
            />
            {errors.skills && (
              <p className={styles.errorMsg}>{errors.skills}</p>
            )}
          </div>

          {/* Resume Link */}
          <div className="flex flex-col gap-y-2 mb-2">
            <div className="w-full">
              <Input
                label="Resume Link (Drive URL)"
                id="resumeLink"
                name="resumeLink"
                type="url"
                placeholder="https://drive.google.com/..."
                required
                value={formData.resumeLink}
                onChange={handleChange("resumeLink")}
                error={!!errors.resumeLink}
              />
              {errors.resumeLink && (
                <p className="text-primary text-sm mt-[-32px] mb-10">{errors.resumeLink}</p>
              )}
            </div>
          </div>
        </div>

        {submitError && (
          <p className="text-primary text-base mt-4 text-right">{submitError}</p>
        )}

        <div className={styles.submitRow}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold disabled:opacity-60 hover:opacity-90 transition duration-300 ease-in-out"
          >
            {isSubmitting ? "Submitting…" : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

export async function getStaticProps({ preview }) {
  const sbParams = {
    version: preview ? "draft" : "published",
    token: process.env.STORYBLOK_ACCESS_TOKEN,
  };

  const storyblokApi = getStoryblokApi();
  let config = false;
  try {
    const { data } = await storyblokApi.get("cdn/stories/config", sbParams);
    config = data ? data.story : false;
  } catch {
    config = false;
  }

  return {
    props: { config },
    revalidate: 3600,
  };
}
