import { render } from "storyblok-rich-text-react-renderer";

function CareersTestimonial({ blok }) {
  return (
    <div>
      {blok.title1 && <h2>{blok.title1}</h2>}
      {blok.title2 && <h2>{blok.title2}</h2>}

      {blok?.testimonialItems?.length > 0 &&
        blok.testimonialItems.map((testimonial) => {
          return (
            <div key={testimonial?._uid}>
              {testimonial?.heading && <h4>{testimonial?.heading}</h4>}
              {testimonial?.content && render(testimonial.content)}
              <div>
                {testimonial?.authorImage && (
                  <img src={testimonial.authorImage} alt="author" />
                )}
                {testimonial?.author && <span>{testimonial?.author} </span>}
                {testimonial?.authorDesignation && (
                  <span>{testimonial?.authorDesignation}</span>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default CareersTestimonial;
