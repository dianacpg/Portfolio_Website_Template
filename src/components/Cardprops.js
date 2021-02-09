import React from "react";
import { Link } from "react-router-dom";

function Cardprops(props) {
  return (
    <div className="wrapper">
      <Link to={props.path} className="image">
        <img src={props.src} alt="colection" className="image__img" />
        <div className="image__overlay">
          <div className="image__tittle">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}

export default Cardprops;
