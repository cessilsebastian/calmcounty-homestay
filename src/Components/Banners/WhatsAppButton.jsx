import React from "react";
import WhatsappCSS from "./../Banners/WhatsAppButton.module.css";
import { SiWhatsapp } from "react-icons/si";

function WhatsAppButton() {
  return (
    <div className={WhatsappCSS.icon_wrapper}>
      <a
        href="https://wa.me/917907756911"
        target="_blank"
        rel="noopener noreferrer"
        className={WhatsappCSS.icon_btn}
      >
        <SiWhatsapp className={WhatsappCSS.icon} />
        <span className={WhatsappCSS.icon_text}>Message us</span>
      </a>

      <a href="tel:917907756911" className={WhatsappCSS.icon_btn}>
        <i className={`ri-phone-line ${WhatsappCSS.icon}`}></i>
        <span className={WhatsappCSS.icon_text}>Call us</span>
      </a>
    </div>
  );
}

export default WhatsAppButton;
