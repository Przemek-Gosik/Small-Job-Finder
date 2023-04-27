import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles from './styles.module.css'
import slide_1 from './images/slide_1.jpg'
import slide_2 from './images/slide_2.jpg'
import slide_3 from './images/slide_3.jpg'
const slideImages = [
  {
    url: slide_1,
    title:'Witamy',
    caption: 'W serwisie Small Job Finder!'
  },
  {
    url: slide_2,
    title:'Dołącz do nas',
    caption: 'Dołącz do wielu zadowolonych użytkowników'
  },
  {
    url: slide_3,
    title:'Znajdź pracę dla siebie',
    caption: 'Mnóśtwo ofert z wielu kategorii'
  },
];

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
          <div className={styles.container} key={slideImage}>
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,backgroundRepeat:"no-repeat",
              backgroundSize:"cover",height:600}}>
                <div className={styles.text_block}>
                  <h4>{slideImage.title}</h4>
                  <p>{slideImage.caption}</p>
                </div>
              </div>
            </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default SlideShow;