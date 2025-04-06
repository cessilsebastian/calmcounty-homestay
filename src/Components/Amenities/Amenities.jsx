import React from "react";
import amenitiesCSS from "./../Amenities/Amenities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import img1 from "./../../assets/amenities/amen1.webp";
import img2 from "./../../assets/amenities/amen2.webp";
import img3 from "./../../assets/amenities/amen3.webp";
import img4 from "./../../assets/amenities/amen4.webp";
import { useScroll } from "../../ScrollContext";

function Amenities() {
  const { amenities } = useScroll();
  return (
    <div
      className={`${amenitiesCSS.amenities_wrapper} section`}
      ref={amenities}
    >
      <h2 className="section__Title">
        Our Best <span>Amenities</span>
      </h2>

      <Swiper
        className={amenitiesCSS.swiper}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        speed={2000}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img1} alt="Patio" />
            <div className={amenitiesCSS.content}>
              <h2>Outdoor Patio</h2>
              <p>
                Wake up to stunning sunrises and soak in the tranquility on our
                picturesque patio. Capture unforgettable moments, breathe in the
                fresh air, and unwind with breathtaking views and a refreshing
                breeze. Perfect for memories, relaxation, and pure enjoyment!
              </p>
              <a href="tel:+917907756911">
                <button>Book Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img2} alt="Balcony" />
            <div className={amenitiesCSS.content}>
              <h2>Spacious Balcony</h2>
              <p>
                Our spacious balcony isn't just for sipping coffee (though it's
                perfect for that too!) — it's your go-to spot for cozy
                gatherings, sunset parties, or even small celebrations under the
                stars. With stunning views of the paddy fields and the calming
                countryside breeze, it's the ideal setting for creating
                unforgettable moments with family and friends. Whether it's a
                laid-back evening or a lively event, the balcony transforms into
                your personal slice of paradise.
              </p>
              <a href="tel:+917907756911">
                <button>Book Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img3} alt="Veranda" />
            <div className={amenitiesCSS.content}>
              <h2>Open Verandas</h2>
              <p>
                Our spacious open verandas, set against a backdrop of lush
                greenery and swaying palms, is the perfect place to start your
                day with yoga, meditation, or simple mindful breathing. With the
                soothing sounds of nature and the fresh morning breeze, this
                peaceful space invites you to relax, recharge, and reconnect.
                Whether it's a solo stretch session or a small group gathering,
                the calm atmosphere makes every moment feel grounding and
                special.
              </p>
              <a href="tel:+917907756911">
                <button>Book Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={amenitiesCSS.amenities__item}>
            <img src={img4} alt="Nature" />
            <div className={amenitiesCSS.content}>
              <h2>Nature Walks</h2>
              <p>
                Step into serenity with peaceful nature walks around Calm
                County. Wander through lush green trails, breathe in the scent
                of wildflowers, and listen to the soothing sounds of birdsong
                and rustling leaves. Whether it's a morning stroll under golden
                sunlight or an evening walk with cool breezes and fireflies,
                every step brings you closer to nature's magic. Perfect for
                reflection, photos, or just getting lost in the beauty of the
                countryside.
              </p>
              <a href="tel:+917907756911">
                <button>Book Now</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Amenities;
