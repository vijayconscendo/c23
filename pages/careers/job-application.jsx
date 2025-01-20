import Link from "next/link";
import { FilePond } from "react-filepond";

// Images
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Input from "@/components/ui/Input";
import RadioButton from "@/components/ui/radioButton";
import Dropdown from "@/components/ui/dropdown";
import { Plus } from "lucide-react";
import rightArrowDouble from "@/public/Images/icons/right-arrow-double.png";
import styles from "../careers/careers.module.scss";
import FileUpload from "@/components/fileUpload";
import { useState } from "react";
import CongratsPage from "@/components/congrats";
import { getStoryblokApi } from "@storyblok/react";

export default function JobApplication() {
  const [files, setFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return !isSubmitted ? (
    <div className={styles.jobApplication}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbs}>
        <ul>
          <li>
            <Link href="/careers">
              <span>Careers</span>
              <Image src={rightArrowDouble} alt="right-arrow-double" />{" "}
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <span>Join Our Team</span>
              <Image src={rightArrowDouble} alt="right-arrow-double" />{" "}
            </Link>
          </li>
          <li>
            <Link href="/">
              <span>Job Application</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div>
        <div className={styles.instructions}>
          <h1 className="text-primary font-bold">Job Application</h1>
          <p className={styles.caption}>
            To ensure a smooth and complete submission, please follow the
            instructions below:
          </p>
          <ol className="list-decimal list-inside">
            <li>
              Carefully fill in all the required fields with accurate
              information.
            </li>
            <li>
              Double-check the entered details to avoid any errors or omissions.
            </li>
            <li>
              Attach any necessary documents (e.g., resume, cover letter) in the
              specified formats.
            </li>
            <li>
              Review the application before final submission to confirm
              everything is correct.
            </li>
          </ol>
          <p className={styles.caption}>
            Now, proceed to fill in the details below:
          </p>
        </div>

        {/* Application Form Sections */}
        <Accordion
          type="single"
          collapsible
          className={`w-full border border-[#db2d3861] ${styles.accordionContainer}`}
        >
          <AccordionItem value="resume" className="border-b border-[#db2d3861]">
            <AccordionTrigger
              className={`px-4 py-5 bg-[#DB2D3833] ${styles.accordionTrigger}`}
            >
              Upload Resume
            </AccordionTrigger>
            <AccordionContent className="px-4 py-10">
              <div className="py-0 lg:py-8 text-center">
                <FileUpload />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="personal"
            className="border-b border-[#db2d3861]"
          >
            <AccordionTrigger
              className={`px-4 py-5 bg-[#DB2D3833] ${styles.accordionTrigger}`}
            >
              Personal Information
            </AccordionTrigger>
            <AccordionContent className="px-4 py-10">
              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-4/12">
                  <Input
                    label="First Name"
                    id="fname"
                    name="firstName"
                    required={true}
                  />
                </div>
                <div className="w-full md:w-4/12">
                  <Input label="Middle Name" id="mname" name="middleName" />
                </div>
                <div className="w-full md:w-4/12">
                  <Input
                    label="Last Name"
                    id="lname"
                    name="lastName"
                    required={true}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input
                    label="Date of Birth"
                    id="dob"
                    name="dob"
                    required={true}
                    type="date"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-4/12">
                  <RadioButton
                    label="Gender"
                    required={true}
                    options={[
                      { name: "gender", label: "Male", value: "male" },
                      { name: "gender", label: "Female", value: "female" },
                      { name: "gender", label: "Other", value: "other" },
                    ]}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input
                    id="contact"
                    name="contactNo"
                    label="Contact Number"
                    required={true}
                  />
                </div>
                <div className="w-full md:w-6/12">
                  <Input
                    id="email"
                    name="email"
                    label="Email Address"
                    required={true}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full">
                  <Dropdown
                    label="Nationality / Citizenship"
                    required={true}
                    options={[
                      { label: "India", value: "india" },
                      { label: "US", value: "us" },
                      { label: "Other", value: "other" },
                    ]}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full">
                  <RadioButton
                    label="Identification Number"
                    required={true}
                    hasInput={true}
                    options={[
                      {
                        name: "identification",
                        label: "Passport",
                        value: "passport",
                      },
                      {
                        name: "identification",
                        label: "Aadhar",
                        value: "aadhar",
                      },
                      { name: "identification", label: "PAN", value: "pan" },
                    ]}
                  />
                  <Input />
                </div>
              </div>

              {/* ------------- Address Details ------------- */}
              <h3 className={styles.smallTitle}>Address Details</h3>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Dropdown label="Country of Residence" required={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input label="Address (Line 1)" required={true} />
                </div>
                <div className="w-full md:w-6/12">
                  <Input label="Address (Line 2)" required={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input label="City" required={true} />
                </div>
                <div className="w-full md:w-6/12">
                  <Input label="Zip/Postal Code" required={true} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="education"
            className="border-b border-[#db2d3861]"
          >
            <AccordionTrigger
              className={`px-4 py-5 bg-[#DB2D3833] ${styles.accordionTrigger}`}
            >
              Education & Experience
            </AccordionTrigger>
            <AccordionContent className="px-4 py-10">
              <h3 className={styles.smallTitle}>Educational Qualification</h3>

              <div className="flex flex-col mb-2 gap-y-2">
                <div className="w-full">
                  <Dropdown
                    label="Highest Degree/Qualification Earned"
                    required={true}
                  />
                </div>
                <div className="w-full">
                  <Dropdown label="Field of Study" required={true} />
                </div>
                <div className="w-full">
                  <Dropdown label="Institute Name" required={true} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input label="Graduation Year" required={true} />
                </div>
                <div className="w-full md:w-6/12">
                  <Input label="CGPA / Marks" required={true} />
                </div>
              </div>

              <h3 className={styles.smallTitle}>Work Experience</h3>

              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input label="Job Title" required={true} />
                </div>
                <div className="w-full md:w-6/12">
                  <Input label="Previous Organization Name" required={true} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Input label="Start Date" required={true} type="date" />
                </div>
                <div className="w-full md:w-6/12">
                  <Input label="End Date" required={true} type="date" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-x-10 mb-2 gap-y-2">
                <div className="w-full md:w-6/12">
                  <Dropdown label="Notice Period" required={true} />
                </div>
                <div className="w-full md:w-6/12">
                  <Dropdown label="Employment Type" required={true} />
                </div>
              </div>
              <div className="flex flex-col mb-12 gap-y-2">
                <div className="w-1full flex items-center">
                  <input
                    id="currentlyWorking"
                    type="checkbox"
                    className="h-5 w-5 border-black"
                  />
                  <label
                    htmlFor="currentlyWorking"
                    className="ml-5  text-2xl text-black font-normal"
                  >
                    Currently Working here
                  </label>
                </div>
              </div>
              <div className="flex flex-col mb-2 gap-y-2">
                <div className="w-full">
                  <Input label="Key Responsibilities" required={true} />
                </div>
                <div className="w-full">
                  <Input label="Reason for Leaving (Optional)" />
                </div>
              </div>

              <button type="button" className={styles.addExp}>
                <Plus /> <span>Add Work Experience</span>
              </button>
              <h3 className={styles.smallTitle}>Skills & Certifications</h3>
              <div className="flex flex-col mb-2 gap-y-2">
                <div className="w-full">
                  <Input label="Relevant Skills" required={true} />
                </div>
                <div className="w-full">
                  <Input label="Professional Certifications" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="attachments" className="border-0">
            <AccordionTrigger
              className={`px-4 py-5 bg-[#DB2D3833] ${styles.accordionTrigger}`}
            >
              Attachments
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 lg:py-8">
              <div className={styles.fileUploadGridContainer}>
                <p className={styles.supportFormat}>
                  Supported formats are JPEG,PNG, PDF formats upto 12MB
                </p>
                <div className="h-52">
                  <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={34} // Maximum files
                    server="/upload" // Specify your backend API endpoint here
                    name="files" // File input name for the backend
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action text-black">Browse</span>'
                    acceptedFileTypes={["image/*", "application/pdf"]} // Allowed file types
                    maxFileSize="5MB" // Max file size
                    imagePreviewHeight={150} // Preview image height
                    imageResizeTargetWidth={200} // Resize image width
                    imageResizeTargetHeight={150} // Resize image height
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-between mt-10 flex-wrap gap-x-2 gap-y-5">
          <button className="px-6 py-2 rounded-md text-lg text-primary font-semibold border-2 border-primary hover:bg-primary hover:text-white focus:outline-none transition duration-300 ease-in-out">
            Save as Draft
          </button>
          <button
            className="bg-primary text-white px-6 py-2 rounded-md text-lg font-semibold"
            onClick={() => setIsSubmitted(true)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : (
    <CongratsPage />
  );
}

export async function getStaticProps({ preview }) {
  let sbParams = {
    version: preview ? "draft" : "published",
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
