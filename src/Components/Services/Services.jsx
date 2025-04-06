import React from "react";
import ServicesCSS from "./../Services/Service.module.css";
import { useScroll } from "../../ScrollContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const { services } = useScroll();

  useEffect(() => {
    AOS.init({ duration: 1500, offset: 30, easing: "ease-in-out" });
  }, []);

  return (
    <div className={`${ServicesCSS.Service_wrapper} section`} ref={services}>
      <h2 className="section__Title" data-aos="slide-up">
        Our Best <span>Services</span>
      </h2>

      <div className={ServicesCSS.Service_cards}>
        <div
          className={ServicesCSS.Service_card}
          data-aos="slide-up"
          data-aos-delay="100"
        >
          <i className="ri-hotel-line"></i>
          <h3>Basic Facilities</h3>
          <p>- Hassle-Free Parking</p>
          <p>- Power Backup</p>
          <p>- High-Speed Wi-Fi</p>
          <p>- Daily Housekeeping</p>
          <p>- 24/7 Hot Water</p>
        </div>
        <div
          className={ServicesCSS.Service_card}
          data-aos="slide-up"
          data-aos-delay="200"
        >
          <i className="ri-hotel-bed-line"></i>
          <h3>Room Amenities</h3>
          <p>- Comfortable Bedding</p>
          <p>- Private Balcony</p>
          <p>- Room Service</p>
          <p>- AC & Non-AC Rooms</p>
          <p>- Personal Wardrobe & Desk</p>
        </div>
        <div
          className={ServicesCSS.Service_card}
          data-aos="slide-up"
          data-aos-delay="300"
        >
          <i className="ri-goblet-line"></i>
          <h3>Dining Options</h3>
          <p>- Homemade Kerala Cuisine</p>
          <p>- Home-Grown Produce</p>
          <p>- Complementary Breakfast</p>
          <p>- Kerala Sadhya on Request</p>
          <p>- Homemade Snacks & Spices</p>
        </div>
        <div
          className={ServicesCSS.Service_card}
          data-aos="slide-up"
          data-aos-delay="400"
        >
          <i className="ri-restaurant-line"></i>
          <h3>Special Features</h3>
          <p>- Mini Library & Board Games</p>
          <p>- Volleyball & Outdoor Games</p>
          <p>- Campfire & BBQ Nights</p>
          <p>- Nature Walks & Birdwatching</p>
          <p>- Pet-Friendly Stay</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
