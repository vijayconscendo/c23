import styles from "./contactform.module.scss";
import Link from "next/link";
import Button from "@/components/ui/Button/button";
import { StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import api from "@/utils/api-instance";
import { useEffect } from "react";
import { getCookie, setCookie } from "@/utils/storage";
import countryCodes from "@/utils/countryCodes.json";
import { Controller } from "react-hook-form";
import Select from "react-select";
import errorHandler from "@/utils/error-handler";

const ContactForm = ({ blok }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      leadJson: {
        FirstName: data?.firstName,
        LastName: data?.lastName,
        Company: data?.organization,
        Email: data?.email,
        MobilePhone: `${data?.countryCode} ${data?.mobile}`,
        Role__c: data?.role,
        Description: data?.comments,
        Consent__c: data?.consent ? "true" : "false",
        InquiryType__c: data?.inquiryType,
        Country: data?.country,
      },
    };
    try {
      const response = await api.post("/api/createLead", payload);
      if (response?.["Status"]) {
        toast({ variant: "success", title: response?.message });
        reset();
      }
    } catch (err) {
      errorHandler(err);
    }
  };

  const getToken = async () => {
    try {
      const response = await api.get("api/token");
      if (response?.access_token) {
        setCookie("leadToken", response.access_token);
      }
    } catch (err) {
      errorHandler(err);
    }
  };

  useEffect(() => {
    const hasLeadToken = getCookie("leadToken");
    if (!hasLeadToken) {
      getToken();
    }
  }, []);

  return (
    <section id={blok?.id} className={` ${styles.contactForm}`}>
      <div className="w-full max-w-6xl ">
        {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-11 mt-10">
          <div className="w-full">
            <select
              name="inquiryType"
              {...register("inquiryType", {
                required: "Inquiry Type is required",
              })}
              className={styles.select}
              placeholder="Inquiry Type"
            >
              <option value="">Please choose Inquiry type</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="general">General</option>
            </select>
            {errors?.inquiryType && (
              <span className="text-primary">
                {errors?.inquiryType?.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-11">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors?.firstName && (
                <span className="text-primary">
                  {errors?.firstName?.message}
                </span>
              )}
            </div>

            <input
              type="text"
              name="lastName"
              {...register("lastName")}
              placeholder="Last Name"
              className={styles.input}
            />
          </div>

          <input
            type="email"
            className={styles.input}
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Email"
          />
          {errors?.email && (
            <span className="text-primary">{errors?.email?.message}</span>
          )}

          <div className={styles.countryCodeWrapper}>
            <CountryCodeSelect
              control={control}
              name="countryCode"
              error={errors.countryCode?.message}
            />
            <div className="w-full">
              <input
                type="tel"
                className={styles.input}
                name="mobile"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^\d{10,15}$/,
                    message: "Enter a valid mobile number",
                  },
                })}
                placeholder="Mobile Number"
              />
              {errors?.mobile && (
                <span className="text-primary">{errors?.mobile?.message}</span>
              )}
            </div>
          </div>

          <input
            type="text"
            className={styles.input}
            name="organization"
            {...register("organization", {
              required: "Organization name is required",
            })}
            placeholder="Organization Name"
          />
          {errors?.organization?.message && (
            <span className="text-primary">
              {errors?.organization?.message}
            </span>
          )}

          <input
            type="text"
            name="role"
            className={styles.input}
            {...register("role", { required: "Role is required" })}
            placeholder="Your Role / Function"
          />
          {errors?.role && (
            <span className="text-primary">{errors?.role?.message}</span>
          )}

          <input
            type="text"
            name="country"
            {...register("country")}
            className={styles.input}
            placeholder="Country / Region"
          />

          <textarea
            name="comments"
            {...register("comments")}
            placeholder="How can we help you?"
            rows={4}
            className={styles.textarea}
          />

          <div className={`flex items-start gap-4 my-4 ${styles.checkInfo}`}>
            <input
              type="checkbox"
              name="consent"
              {...register("consent")}
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
          <Button className={styles.submitBtn} variant="outline" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

const CountryCodeSelect = ({ control, name, error }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: "Country code is required" }}
      render={({ field: { onChange, value, ref } }) => (
        <div className={styles.countryCodeSelect}>
          <Select
            inputRef={ref}
            options={countryCodes}
            value={
              countryCodes.find((option) => option.value === value) || null
            }
            onChange={(selectedOption) => onChange(selectedOption?.value)}
            placeholder="Select Country Code"
            className="react-select-control"
            classNamePrefix="reactSelect"
            isClearable
          />
          {error && <span className="text-primary">{error}</span>}
        </div>
      )}
    />
  );
};
