import React from "react";
import testimonialCSS from "./../Testimonials/Testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "./../../assets/slider/img1.webp";
import img2 from "./../../assets/slider/img1.webp";
import img3 from "./../../assets/slider/img1.webp";

function Testimonial() {
  return (
    <div className={`${testimonialCSS.testimonial_wrapper} section`}>
      <small className="section__Heading">Testimonials</small>
      <h2 className="section__Title">
        What Our Clients <span>Says</span>
      </h2>

      <Swiper
        className={testimonialCSS.swiper}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
        speed={1500}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className={testimonialCSS.testimonial}>
            <img src={img1} alt="testimonial" />
            <div className={testimonialCSS.content}>
              <h3>
                John Doe <span>Manager</span>
              </h3>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sit amet nulla a
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={testimonialCSS.testimonial}>
            <img src={img2} alt="testimonial" />
            <div className={testimonialCSS.content}>
              <h3>
                John Doe <span>Manager</span>
              </h3>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sit amet nulla a
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={testimonialCSS.testimonial}>
            <img src={img3} alt="testimonial" />
            <div className={testimonialCSS.content}>
              <h3>
                John Doe <span>Manager</span>
              </h3>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sit amet nulla a
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={testimonialCSS.testimonial}>
            <img src={img2} alt="testimonial" />
            <div className={testimonialCSS.content}>
              <h3>
                John Doe <span>Manager</span>
              </h3>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sit amet nulla a
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
