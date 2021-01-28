import React, { useState, useEffect } from 'react';
import './Outdoor.css';
import { SRLWrapper } from 'simple-react-lightbox';

const images = [
  { id: '10', imageName: 'enchufada1.jpg', tag: 'enchufada' },
  { id: '11', imageName: 'enchufada2.jpg', tag: 'enchufada' },
  { id: '12', imageName: 'enchufada3.jpg', tag: 'enchufada' },
  { id: '13', imageName: 'enchufada4.jpg', tag: 'enchufada' },
  { id: '14', imageName: 'enchufada5.jpg', tag: 'enchufada' },
  { id: '15', imageName: 'enchufada6.jpg', tag: 'enchufada' },
  { id: '16', imageName: 'enchufada7.jpg', tag: 'enchufada' },
  { id: '22', imageName: 'mechelas2.jpeg', tag: 'Mechelas' },
  { id: '23', imageName: 'mechelas1.jpg', tag: 'Mechelas' },
  { id: '24', imageName: 'mechelas3.jpeg', tag: 'Mechelas' },
  { id: '25', imageName: 'mechelas4.jpg', tag: 'Mechelas' },
  { id: '26', imageName: 'others1.jpeg', tag: 'others' },
  { id: '27', imageName: 'others6.jpg', tag: 'others' },
  { id: '28', imageName: 'others4.jpeg', tag: 'others' },
  { id: '29', imageName: 'others3.jpg', tag: 'others' },
  { id: '30', imageName: 'others5.jpg', tag: 'others' },
  { id: '31', imageName: 'others2.jpg', tag: 'others' },
];

const options = {
  settings: {
    overlayColor: 'rgb(25, 136, 124)',
    autoplaySpeed: 1500,
    transitionSpeed: 900
   },
   buttons: {
    backgroundColor: 'red',
    iconColor: 'rgba(126, 172, 139, 0.8)'
   },
   caption: {
    captionColor: '#a6cfa5',
    captionFontFamily: 'Raleway, sans-serif',
    captionFontWeight: '300',
    captionTextTransform: 'uppercase'
   },
   progressBar: {
    height: '20px',
    fillColor: 'blue',
    backgroundColor: 'white'
   }
};

function Indoor() {

  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(
    () => {
      tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    },
    [tag]
  );

  return (
    <div className="App">
      <div className="tags">
        <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
        <TagButton name="Mechelas" tagActive={tag === 'Mechelas' ? true : false} handleSetTag={setTag} /> /
        <TagButton name="enchufada" tagActive={tag === 'enchufada' ? true : false} handleSetTag={setTag} /> /
        <TagButton name="others" tagActive={tag === 'others' ? true : false} handleSetTag={setTag} />
      </div>
      <SRLWrapper options={options}>
        <div className="container">
          {filteredImages.map(image => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img className="image" src={`/images/${image.imageName}`} alt="" />
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
    <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );

};




export default Indoor;
