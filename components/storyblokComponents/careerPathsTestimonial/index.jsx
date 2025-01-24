import { render } from "storyblok-rich-text-react-renderer";
import styles from "./careerPathsTesimonial.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Optional modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import quoteLeft from "@/public/Images/icons/quote-left.png";
import quoteRight from "@/public/Images/icons/quote-right.png";

function CareerPathsTestimonial({ blok }) {
  return (
    <section
      className={`overflow-hidden ${styles.newsContainer}`}
      {...storyblokEditable(blok)}
      id={blok?.id}
    >
      <div className={styles.sectionHeader}>
        {blok?.title?.length > 0 && (
          <StoryblokComponent blok={blok?.title?.[0]} />
        )}

        <div className={`hidden lg:flex ${styles.arrows}`}>
          <button className="custom-prev bg-white p-2 border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all">
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button className="custom-next bg-white p-2  border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all">
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{
            el: ".pathsroty-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <div className="client-tesimonials">
            {/* Testimonial cards */}
            {blok?.testimonialItems?.map((testimonial) => (
              <SwiperSlide key={testimonial?._uid}>
                <div className="py-20 flex flex-col md:flex-row items-start gap-y-4 gap-x-7 lg:gap-x-10 xl:gap-x-[75px]">
                  <Image
                    src={quoteLeft}
                    alt="quoteLeft"
                    className={styles.quoteIcon}
                  />
                  <div>
                    {testimonial?.heading && (
                      <h4 className="text-xl lg:text-2xl xl:text-[32px] leading-normal text-primary mb-4 font-semibold">
                        {testimonial?.heading}
                      </h4>
                    )}
                    {testimonial?.content && (
                      <p className="text-base lg:text-xl xl:text-2xl leading-relaxed text-black">
                        {render(testimonial.content)}
                      </p>
                    )}
                    {testimonial?.author && (
                      <p className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold text-end mt-3 leading-normal">
                        {testimonial.author}
                      </p>
                    )}
                  </div>
                  {!testimonial?.author && (
                    <Image
                      className={`mt-auto ml-auto ${styles.quoteIcon}`}
                      src={quoteRight}
                      alt="quoteRight"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div
            className="pathsroty-pagination"
            style={{ textAlign: "center", marginTop: "20px" }}
          ></div>
        </Swiper>
        <div className={`mt-14 justify-center flex lg:hidden ${styles.arrows}`}>
          <button className="custom-prev bg-white p-2 border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all">
            <ChevronLeft className="w-14 h-14 font-bold" />
          </button>
          <button className="custom-next bg-white p-2  border-2 border-primary text-primary shadow-lg hover:bg-primary hover:text-white transition-all">
            <ChevronRight className="w-14 h-14 font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default CareerPathsTestimonial;
