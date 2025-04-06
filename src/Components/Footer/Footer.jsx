import React from "react";
import footerCSS from "./../Footer/Footer.module.css";
import { useScroll } from "../../ScrollContext";
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiAirbnb,
  SiGooglemaps,
  SiGoogle,
} from "react-icons/si";

function Footer() {
  const { footer } = useScroll();

  return (
    <footer className={`${footerCSS.footer_wrapper} section`} ref={footer}>
      {/* <footer className={footerCSS.footer_wrapper}> */}
      <div className={footerCSS.FooterLinks}>
        <div className={footerCSS.logo}>
          <h2>The Calm County Homestay</h2>
          <p>
            Escape the noise and discover the quiet charm of village life at
            Calm County. Nestled among lush paddy fields, our homestay offers
            the perfect blend of comfort and nature. Come, unwind, and let the
            calm take over.
          </p>
        </div>
      </div>
      <div className={footerCSS.FooterLinks}>
        <h3>Follow Us</h3>
        <div className={footerCSS.SocialLinks}>
          <a
            href="https://www.instagram.com/calm_county?igsh=dGVheHlwOXV3aDZv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram className={footerCSS.icon} />
          </a>
          <a
            href="https://www.facebook.com/share/18pMjm9KeX/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFacebook className={footerCSS.icon} />
          </a>
          <a
            href="https://wa.me/917907756911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp className={footerCSS.icon} />
          </a>
        </div>
        <h3>Find Us</h3>
        <div className={footerCSS.SocialLinks}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <SiGoogle className={footerCSS.icon} />
          </a>
          <a
            href="https://maps.app.goo.gl/Mha3ndQoY5XZkf6a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglemaps className={footerCSS.icon} />
          </a>
          <a
            href="https://www.airbnb.ca/rooms/1387027717583524574?check_in=2025-04-18&check_out=2025-04-19&guests=1&adults=6&s=67&unique_share_id=a95ae73c-f5db-40c8-bd7f-c72c924d8fcf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAirbnb className={footerCSS.icon} />
          </a>
        </div>
      </div>
      <div className={footerCSS.FooterLinks}>
        <h3>Contact</h3>
        <p>
          Address:
          <span>
            Calm County Homestay
            <br />
            Payyampally (P.O.) Mananthavady Wayanad, Kerala 670646
          </span>
        </p>
        <p>
          Email: <span>calmcounty@gmail.com</span>
        </p>
        <p>
          Phone: <span>+91 9961825943, +91 7907756911</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
