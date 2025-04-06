import React from "react";
import attractionCSS from "./../Attractions/Attractions.module.css";
import { useScroll } from "../../ScrollContext";

function Attractions() {
  const { attractions } = useScroll();
  return (
    <div
      className={`${attractionCSS.attraction_wrapper} section`}
      ref={attractions}
    >
      <small className="section__Heading">Attractions</small>
      <h2 className="section__Title">
        Explore <span>Wayanad</span>
      </h2>
    </div>
  );
}

export default Attractions;
