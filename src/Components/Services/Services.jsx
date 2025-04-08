import React, { useEffect } from "react";
import ServicesCSS from "./../Services/Service.module.css";
import { useScroll } from "../../ScrollContext";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceData = [
  {
    icon: "ri-hotel-line",
    title: "Basic Facilities",
    features: [
      "Hassle-Free Parking",
      "Power Backup",
      "High-Speed Wi-Fi",
      "Daily Housekeeping",
      "24/7 Hot Water",
    ],
  },
  {
    icon: "ri-hotel-bed-line",
    title: "Room Amenities",
    features: [
      "Comfortable Bedding",
      "Private Balcony",
      "Room Service",
      "AC & Non-AC Rooms",
      "Personal Wardrobe & Desk",
    ],
  },
  {
    icon: "ri-goblet-line",
    title: "Dining Options",
    features: [
      "Homemade Kerala Cuisine",
      "Home-Grown Produce",
      "Complementary Breakfast",
      "Kerala Sadhya on Request",
      "Homemade Snacks & Spices",
    ],
  },
  {
    icon: "ri-restaurant-line",
    title: "Special Features",
    features: [
      "Mini Library & Board Games",
      "Volleyball & Outdoor Games",
      "Campfire & BBQ Nights",
      "Nature Walks & Birdwatching",
      "Android TV in all Rooms",
    ],
  },
];

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
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={ServicesCSS.Service_card}
            data-aos="slide-up"
            data-aos-delay={`${(index + 1) * 100}`}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <ul>
              {service.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
