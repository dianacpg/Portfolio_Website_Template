import React from "react";
import "./Home.css";
import Card from "./Card";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div id="background">
        <div className="blanckspace">
          <p> </p>
        </div>
        <div className="bgsections">
          <Card />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
