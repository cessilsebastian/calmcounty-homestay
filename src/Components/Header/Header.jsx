import React from "react";
import headerCSS from "./../Header/Header.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Parallax, EffectFade } from "swiper/modules";
import { useScroll } from "../../ScrollContext";

function Header() {
  const { home } = useScroll();
  return (
    <div className={headerCSS.header_wrapper} ref={home}>
      <Swiper
        // slidesPerView={1}
        // spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={true}
        speed={2500}
        effect="fade"
        fadeEffect={{
          crossFade: true, // Optional: this makes the transition smoother
        }}
        modules={[Autoplay, Parallax, EffectFade]}
        className={headerCSS.swiper}
      >
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">
                The Calm County Homestay
              </small>
              <h2 data-swiper-parallax="-400">
                Experience the Beauty of Silence
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">
                The Calm County Homestay
              </small>
              <h2 data-swiper-parallax="-400">
                Your Peaceful Escape in the Heart of Nature
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">
                The Calm County Homestay
              </small>
              <h2 data-swiper-parallax="-400">
                A Slice of Village Life with Views that Heal.
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${headerCSS.Header_slide} ${headerCSS.slide4}`}>
            <div className={headerCSS.content}>
              <small data-swiper-parallax="-200">
                The Calm County Homestay
              </small>
              <h2 data-swiper-parallax="-400">Stay With Us, Feel at Home</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
