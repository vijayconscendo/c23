import { render } from "storyblok-rich-text-react-renderer";
import styles from "./careerPathsTesimonial.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Optional modules
import { Navigation, Autoplay } from "swiper/modules";

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
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <div className="client-tesimonials -mx-5">
            {/* Testimonial cards */}
            {blok?.testimonialItems?.map((testimonial) => (
              <SwiperSlide key={testimonial?._uid}>
                <div>
                  {testimonial?.heading && <h4>{testimonial?.heading}</h4>}
                  {testimonial?.content && render(testimonial.content)}
                  {testimonial?.author && <p>{testimonial.author}</p>}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className={`mt-6 flex lg:hidden ${styles.arrows}`}>
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
