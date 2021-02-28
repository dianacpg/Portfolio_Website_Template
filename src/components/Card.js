import React, { Component } from "react";
import Cardprops from "./Cardprops.js";
import "./Card.css";

class Card extends Component {
  state = {
    cardlist: [
      {
        src: "https://picsum.photos/200/300",
        path: "/indoor",
        category: "INDOOR",
        id: 1,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/indoor",
        category: "INDOOR",
        id: 2,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/indoor",
        category: "INDOOR",
        id: 3,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/indoor",
        category: "INDOOR",
        id: 4,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/indoor",
        category: "OUTDOOR",
        id: 5,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/outdoor",
        category: "outdoor",
        id: 6,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/outdoor",
        category: "OUTDOOR",
        id: 7,
      },
      {
        src: "https://picsum.photos/200/300",
        path: "/indoor",
        category: "INDOOR",
        id: 8,
      },
    ],
  };
  render() {
    return (
      <div className="cards-container">
        <Cardprops cardList={this.state.cardlist} />
      </div>
    );
  }
}

export default Card;
