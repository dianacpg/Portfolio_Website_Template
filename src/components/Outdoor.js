import React, { useState, useEffect } from 'react';
import './Outdoor.css';
import { SRLWrapper } from 'simple-react-lightbox';

const images = [
  { id: '8', imageName: 'quarteira1.webp', tag: 'quarteira' },
  { id: '9', imageName: 'quarteira2.webp', tag: 'quarteira' },
  { id: '10', imageName: 'alentejo2.webp', tag: 'alentejo2222' },
  { id: '11', imageName: 'alentejo4.webp', tag: 'alentejo2222' },
  { id: '12', imageName: 'alentejo3.webp', tag: 'alentejo2222' },
  { id: '13', imageName: 'alentejo1.webp', tag: 'alentejo2222' },
  { id: '14', imageName: 'reborned1.webp', tag: 'reborned' },
  { id: '15', imageName: 'reborned2.webp', tag: 'reborned' },
  { id: '16', imageName: 'outdoorothers1.webp', tag: 'others' }
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

function Outdoor() {

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
        <TagButton name="quarteira" tagActive={tag === 'quarteira' ? true : false} handleSetTag={setTag} /> /
        <TagButton name="alentejo2222" tagActive={tag === 'alentejo2222' ? true : false} handleSetTag={setTag} /> /
        <TagButton name="reborned" tagActive={tag === 'reborned' ? true : false} handleSetTag={setTag} /> /
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




export default Outdoor;
