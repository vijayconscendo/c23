import React, { useState } from "react";
import styles from "./contactform.module.scss";
import Link from "next/link";
import Button from "@/components/ui/Button/button";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const ContactForm = ({ blok }) => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    organization: "",
    role: "",
    country: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section
      id={blok?.id}
      className={`hidden ${styles.contactForm}`}
      {...storyblokEditable(blok)}
    >
      <div className="w-full max-w-6xl ">
        {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
        <form onSubmit={handleSubmit} className="space-y-11 mt-10">
          <div className="w-full">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={styles.select}
              placeholder="Inquiry Type"
            >
              <option value="inquiryType">Inquiry Type</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="general">General</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-11">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number (Please include country code as well)"
            value={formData.mobile}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="text"
            name="organization"
            placeholder="Organization Name"
            value={formData.organization}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="text"
            name="role"
            placeholder="Your Role / Function"
            value={formData.role}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="text"
            name="country"
            placeholder="Country / Region"
            value={formData.country}
            onChange={handleChange}
            className={styles.input}
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={styles.textarea}
          />

          <div className={`flex items-start gap-4 my-4 ${styles.checkInfo}`}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="min-h-[30px] min-w-[30px]"
            />
            <label>
              I consent to the processing of my personal information for this
              request in alignment with{" "}
              <Link href="#" className="text-red-500 hover:text-red-600">
                Cloud23's Privacy Policy
              </Link>
            </label>
          </div>

          {/* <Button
            type="submit"
            className="w-32 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Submit
          </Button> */}
          <Button className={styles.submitBtn} variant="outline">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
