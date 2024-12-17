import React, { useRef } from "react";
import SectionTitle from "../genericComponents/title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import styles from "./financialSectors.module.scss";

// Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BankingImg from "@/public/Images/cards/segments-banking-img.png";
import ImageTextBlock from "../genericComponents/imageTextBlock";

const financialSectors = [
  {
    blockTitle: "Retail Banking",
    blockImage: BankingImg,

    blockDesc:
      "In today’s competitive landscape, retail and commercial banks must adapt to changing customer expectations and regulatory requirements. Our Salesforce-powered solutions streamline operations, enhance customer engagement, and provide insights that drive growth. From personalized banking experiences to efficient loan processing, we help banks build strong relationships with their customers while optimizing operational efficiency.",
  },
  {
    blockTitle: "Retail Banking",
    blockImage: BankingImg,

    blockDesc:
      "In today’s competitive landscape, retail and commercial banks must adapt to changing customer expectations and regulatory requirements. Our Salesforce-powered solutions streamline operations, enhance customer engagement, and provide insights that drive growth. From personalized banking experiences to efficient loan processing, we help banks build strong relationships with their customers while optimizing operational efficiency.",
  },
  {
    blockTitle: "Retail Banking",
    blockImage: BankingImg,

    blockDesc:
      "In today’s competitive landscape, retail and commercial banks must adapt to changing customer expectations and regulatory requirements. Our Salesforce-powered solutions streamline operations, enhance customer engagement, and provide insights that drive growth. From personalized banking experiences to efficient loan processing, we help banks build strong relationships with their customers while optimizing operational efficiency.",
  },
  {
    blockTitle: "Retail Banking",
    blockImage: BankingImg,

    blockDesc:
      "In today’s competitive landscape, retail and commercial banks must adapt to changing customer expectations and regulatory requirements. Our Salesforce-powered solutions streamline operations, enhance customer engagement, and provide insights that drive growth. From personalized banking experiences to efficient loan processing, we help banks build strong relationships with their customers while optimizing operational efficiency.",
  },
];
function FinancialSectors() {
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className={`overflow-hidden ${styles.financialSectors}`}>
      <div className={styles.sectionHeader}>
        <SectionTitle
          title="SEGMENTS WE SERVE"
          subTitle="Solutions for Diverse Financial Sectors"
        ></SectionTitle>

        <div className={`hidden lg:flex ${styles.arrows}`}>
          <button
            onClick={handlePrevClick}
            className="bg-white/80 p-2 border-2 border-primary shadow-lg text-primary hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white/80 p-2  border-2 border-primary shadow-lg text-primary hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>

      {/* ----- Client Testimonial Slider ----- */}
      <div className={styles.carouselContainer}>
        <div className="client-tesimonials -mx-5">
          <Slider {...settings} ref={sliderRef}>
            {financialSectors.map((sector, index) => (
              <div key={index} className="h-full px-5">
                <Sector {...sector} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={`mt-5 flex lg:hidden ${styles.arrows}`}>
          <button
            onClick={handlePrevClick}
            className="bg-white/80 p-2 border-2 border-primary shadow-lg text-primary hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white/80 p-2  border-2 border-primary shadow-lg text-primary hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinancialSectors;

function Sector({ blockDesc, blockImage, blockTitle }) {
  const customClass = {
    subTitle: "text-primary",
  };

  return (
    <div className={`h-full`}>
      <div className={`relative rounded-[6px] h-full flex flex-col`}>
        <ImageTextBlock
          noSectionSpacing={true}
          subTitle={blockTitle}
          cardImg={blockImage}
          customClass={customClass}
          desc={blockDesc}
        />
      </div>
    </div>
  );
}
