import React, { useState, useEffect } from "react";
import "./Outdoor.css";
import { SRLWrapper } from "simple-react-lightbox";
import { images } from "./Images.js";

const options = {
  settings: {
    overlayColor: "black",
    autoplaySpeed: 2500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "black",
    iconColor: "white",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  progressBar: {
    height: "10px",
    fillColor: "grey",
    backgroundColor: "black",
  },
  buttons: {
    showDownloadButton: false,
  },
};

const Outdoor = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <div className="tags">
        <TagButton
          name="all"
          tagActive={tag === "all" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="quarteira"
          tagActive={tag === "quarteira" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="alentejo2222"
          tagActive={tag === "alentejo2222" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="reborned"
          tagActive={tag === "reborned" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="others"
          tagActive={tag === "others" ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <SRLWrapper options={options}>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Outdoor;
