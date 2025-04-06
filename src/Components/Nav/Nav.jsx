import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../../ScrollContext";

function Nav() {
  const menu = useRef();
  const navbar = useRef();
  const navigate = useNavigate();
  const { about, home, services, rooms, amenities, footer } = useScroll();

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.showNav);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.current.classList.add(navCSS.navbarScroll);
    } else {
      navbar.current.classList.remove(navCSS.navbarScroll);
    }
  });

  return (
    <div className={navCSS.nav_wrapper} ref={navbar}>
      <div className={navCSS.nav_left}>
        <div className={navCSS.logo}>
          <a onClick={() => scrollToSection(home)}>CALM COUNTY</a>
        </div>
      </div>

      <ul ref={menu}>
        <li>
          <a
            onClick={() => {
              scrollToSection(home);
              menuHandler();
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection(about);
              menuHandler();
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection(services);
              menuHandler();
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection(rooms);
              menuHandler();
            }}
          >
            Rooms
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection(amenities);
              menuHandler();
            }}
          >
            Amenities
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              scrollToSection(footer);
              menuHandler();
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className={navCSS.nav_right}>
        <div className={navCSS.Nav_btns}>
          <a href="tel:+917907756911">
            <button>
              <i
                className="ri-phone-fill"
                style={{ fontSize: "24px", color: "white" }}
              ></i>{" "}
              Book Now
            </button>
          </a>
          <i
            className="ri-menu-4-line"
            id={navCSS.bars}
            onClick={menuHandler}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
