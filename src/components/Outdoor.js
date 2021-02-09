import React, { useState, useEffect } from "react";
import "./Outdoor.css";
import { SRLWrapper } from "simple-react-lightbox";

const images = [
  { id: "5", imageName: "image5.jpg", tag: "tag5" },
  { id: "6", imageName: "image6.jpg", tag: "tag6" },
  { id: "7", imageName: "image7.jpg", tag: "tag7" },
  { id: "8", imageName: "image8.jpg", tag: "tag8" },
];

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

function Outdoor() {
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
          name="tag5"
          tagActive={tag === "tag5" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="tag6"
          tagActive={tag === "tag6" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="tag7"
          tagActive={tag === "tag7" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="tag8"
          tagActive={tag === "tag8" ? true : false}
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
}

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
