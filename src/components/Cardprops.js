import React from "react";
import { Link } from "react-router-dom";

const Cardprops = ({ cardList }) => {
  const cardstotal = cardList.map((card) => {
    return (
      <div className="wrapper" key={cardList.id}>
        <Link to={card.path} className="image">
          <img
            src={`/images/${card.src}`}
            alt="colection"
            className="image__img"
          />
          <div className="image__overlay">
            <div className="image__tittle">{card.category}</div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="totalcards">{cardstotal}</div>;
};

export default Cardprops;
