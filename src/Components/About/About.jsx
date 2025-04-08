import React, { useEffect } from "react";
import { useScroll } from "../../ScrollContext.jsx";
import aboutCSS from "./About.module.css";
import aboutImg from "../../assets/slider/aboutImg.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const { about } = useScroll();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
      once: true,
    });
  }, []);

  return (
    <div className={aboutCSS.about_wrapper} ref={about}>
      <div className={aboutCSS.about_img} data-aos="slide-up">
        <img src={aboutImg} alt="About Calm County Homestay" />
      </div>
      <div className={aboutCSS.about_content}>
        <small className={aboutCSS.sectionHeading}>
          The Calm County Homestay
        </small>
        <h2 className={aboutCSS.sectionTitle}>
          Experience the Beauty of <span>Silence</span>
        </h2>
        <p data-aos="fade-up">
          Welcome to Calm County Homestay, where tranquility meets nature.
          Nestled in a peaceful rural setting, our homestay offers a perfect
          getaway from the hustle and bustle of city life.
        </p>

        <div className={aboutCSS.features}>
          {[
            ["fas fa-feather", "Peaceful Location"],
            ["fas fa-coffee", "Complementary Breakfast"],
            ["fas fa-wifi", "Free High-Speed Wifi"],
            ["fas fa-car", "Parking"],
            ["fas fa-bed", "Cozy Accommodation"],
            ["fa fa-battery-full", "Power Backup"],
            ["fa fa-fire", "Campfire Facilities"],
            ["fa fa-drumstick-bite", "BBQ Facilities"],
          ].map(([icon, label], i) => (
            <div className={aboutCSS.featureItem} key={i} data-aos="fade-up">
              <i className={icon}></i> <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
