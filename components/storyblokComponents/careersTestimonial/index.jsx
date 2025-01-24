import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

import quoteIcon from "@/public/Images/icons/quote-icon.png";

import styles from "./careerTestimonial.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Manually import Swiper styles
import "swiper/swiper-bundle.css";

function CareersTestimonial({ blok }) {
  return (
    <section className={styles.careersTestimonial}>
      {blok.title1 && <h2>{blok.title1}</h2>}
      {blok.title2 && <h2>{blok.title2}</h2>}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        spaceBetween={65}
        slidesPerView={1}
        pagination={{
          el: ".custompagination",
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".customnext", // Custom class for next button
          prevEl: ".customprev", // Custom class for previous button
        }}
        speed={1000}
        easing="ease-in-out"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 65,
          },
        }}
        className="career-testimonial-swiper"
      >
        {blok?.testimonialItems?.length > 0 &&
          blok.testimonialItems.map((testimonial) => {
            return (
              <SwiperSlide
                key={testimonial?._uid}
                className="career-swiper-slide"
              >
                <div className={styles.swiperCard}>
                  <div className={styles.swiperCardHeader}>
                    <Image
                      className={styles.quoteIcon}
                      src={quoteIcon}
                      alt="quote"
                    />
                    {testimonial?.heading && <h4>{testimonial?.heading}</h4>}
                    <p>{testimonial?.content && render(testimonial.content)}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.avatarIcon}>
                      {testimonial?.authorImage && (
                        <img src={testimonial.authorImage} alt="author" />
                      )}
                    </div>
                    <div>
                      {testimonial?.author && <h5>{testimonial?.author} </h5>}
                      {testimonial?.authorDesignation && (
                        <span>{testimonial?.authorDesignation}</span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        <div
          className="custompagination"
          style={{ textAlign: "center", marginTop: "20px" }}
        ></div>
      </Swiper>
      {/* Custom Pagination Container */}
    </section>
  );
}
export default CareersTestimonial;
