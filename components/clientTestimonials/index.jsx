import React, { useRef } from "react";
import Slider from "react-slick";

// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./clientTestimonials.module.scss";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";
import quote from "@/public/Images/icons/quote-white.png";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
//     >
//       <ChevronRight className="w-6 h-6 text-red-600" />
//     </button>
//   );
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
//     >
//       <ChevronLeft className="w-6 h-6 text-red-600" />
//     </button>
//   );
// }

const ClientTestimonials = ({ blok }) => {
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };

  return (
    <section className={`overflow-hidden ${styles.clientTestimonials}`}  {...storyblokEditable(blok)} id={blok?.id}>
      <div className={styles.sectionHeader}>
        {blok?.title?.[0] && <StoryblokComponent blok={blok.title[0]} />}

        <div className={`hidden lg:flex ${styles.arrows}`}>
          <button
            onClick={handlePrevClick}
            className="bg-white p-2 border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white/80 p-2  border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>

      {/* ----- Client Testimonial Slider ----- */}
      <div className={styles.carouselContainer}>
        {blok?.testimonials?.length > 0 && (
          <div className="client-tesimonials -mx-5">
            <Slider {...settings} ref={sliderRef}>
              {blok.testimonials.map((testimonial) => (
                <div key={testimonial?._uid} className="h-full px-5">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        )}

        <div
          className={`mt-14 mx-auto justify-center flex lg:hidden ${styles.arrows}`}
        >
          <button
            onClick={handlePrevClick}
            className="bg-white p-2 border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white/80 p-2  border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;

function Testimonial({ content, author, role }) {
  return (
    <div className={`h-full ${styles.testimonialCard}`}>
      <div
        className={`relative bg-primary rounded-[6px] text-white shadow-xl h-full flex flex-col ${styles.testimonialBody}`}
      >
        <div
          className={`absolute left-0 right-0 mx-auto bg-primary rounded-full flex items-center justify-center p-3 shadow-2xl ${styles.quoteImage}`}
        >
          <Image width="30" height="30" src={quote} alt="quote" />
        </div>

        <div className={`flex flex-col flex-grow ${styles.content}`}>
          <p className={styles.text}>{content}</p>
          <div className="mt-auto ml-auto text-left">
            <p className={`text-white ${styles.author}`}>{author},</p>
            <p className={`text-white ${styles.role}`}>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
