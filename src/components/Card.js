import React from "react";
import Cardprops from "./Cardprops.js";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="cards-container">
        <Cardprops
          src={process.env.PUBLIC_URL + "/images/enchufada1.webp"}
          path="/indoor"
          category="INDOOR"
        />
        <Cardprops
          src={process.env.PUBLIC_URL + "/images/mechelas1.webp"}
          path="/indoor"
          category="INDOOR"
        />
        <Cardprops
          src={process.env.PUBLIC_URL + "/images/others3.webp"}
          path="/indoor"
          category="INDOOR"
        />

        <Cardprops
          src={process.env.PUBLIC_URL + "/images/enchufada6.webp"}
          path="/indoor"
          category="INDOOR"
        />

        <Cardprops
          src={process.env.PUBLIC_URL + "/images/reborned1.webp"}
          path="/indoor"
          category="OUTDOOR"
        />

        <Cardprops
          src={process.env.PUBLIC_URL + "/images/alentejo2.webp"}
          path="/outdoor"
          category="outdoor"
        />
        <Cardprops
          src={process.env.PUBLIC_URL + "/images/outdoorothers1.webp"}
          path="/outdoor"
          category="OUTDOOR"
        />
        <Cardprops
          src={process.env.PUBLIC_URL + "/images/others6.webp"}
          path="/indoor"
          category="INDOOR"
        />
      </div>
    </>
  );
}

export default Card;
