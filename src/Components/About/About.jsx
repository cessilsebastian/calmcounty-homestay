import React from "react";
import { useScroll } from "../../ScrollContext.jsx";
import aboutCSS from "./../About/About.module.css";
import aboutImg from "./../../assets/slider/aboutImg.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
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
    // <div className={`${aboutCSS.about_wrapper} section`}>
    <div className={aboutCSS.about_wrapper} ref={about}>
      <div className={aboutCSS.about_img} data-aos="slide-up">
        <img src={aboutImg} alt="about_image" />
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

        {/* Features Section */}
        <div className={aboutCSS.features}>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fas fa-feather"></i> <span>Peaceful Location</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fas fa-coffee"></i>
            <span>Free Breakfast</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fas fa-wifi"></i> <span>Free High-Speed Wifi</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fas fa-car"></i> <span>Parking</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fas fa-bed"></i> <span>Cozy Accomodation</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fa fa-battery-full"></i> <span>Power Backup</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fa fa-fire"></i> <span>Campfire Facilities</span>
          </div>
          <div className={aboutCSS.featureItem} data-aos="fade-up">
            <i className="fa fa-drumstick-bite"></i> <span>BBQ Facilities</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
