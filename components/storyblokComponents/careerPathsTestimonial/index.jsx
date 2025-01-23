import { render } from "storyblok-rich-text-react-renderer";
import styles from "./careerPathsTesimonial.module.scss";

function CareerPathsTestimonial({ blok }) {
  return (
    <div className={styles.careerPathsTestimonial}>
      {blok?.title && render(blok.title)}

      {/* Testimonial cards */}
      {blok?.testimonialItems?.map((testimonial) => (
        <div key={testimonial?._uid}>
          {testimonial?.heading && <h4>{testimonial?.heading}</h4>}
          {testimonial?.content && render(testimonial.content)}
        </div>
      ))}
    </div>
  );
}
export default CareerPathsTestimonial;
