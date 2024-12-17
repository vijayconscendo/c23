import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import styles from "./commonCarousel.module.scss";
import { useRef } from "react";
import ImageTextBlock from "@/components/genericComponents/imageTextBlock";

function CommonCarousel({ blok }) {
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

  const subTitleClass = { subTitle: "text-primary" };

  return (
    <section
      className={`overflow-hidden ${styles.newsContainer}`}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <div className={styles.sectionHeader}>
        {blok?.sectionTitle?.length > 0 && (
          <StoryblokComponent blok={blok?.sectionTitle?.[0]} />
        )}

        <div className={`hidden lg:flex ${styles.arrows}`}>
          <button
            onClick={handlePrevClick}
            className="bg-white p-2 border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white p-2  border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <div className="client-tesimonials -mx-5">
          <Slider {...settings} ref={sliderRef}>
            {blok?.carouselBlock?.map((item) => (
              <div className="h-full px-5" key={item?._uid}>
                <div className={`h-full`}>
                  <div
                    className={`relative rounded-[6px] h-full flex flex-col`}
                  >
                    <ImageTextBlock
                      isCarousel={true}
                      blok={item}
                      customClass={subTitleClass}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={`mt-6 flex lg:hidden ${styles.arrows}`}>
          <button
            onClick={handlePrevClick}
            className="bg-white p-2 border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-white p-2  border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CommonCarousel;
