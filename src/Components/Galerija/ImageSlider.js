import React, {useState} from "react";
import './ImageSlider.css';
import dataSlider from './dataSlider';
import ButtonSlider from './ButtonSlider';
import catalog from '../../Components/Main/Main-components/Components Assets/katalog.pdf';

const ImageSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

   const nextSlide = () => {
      if(slideIndex !== dataSlider.length){
         setSlideIndex(slideIndex + 1)
      } else if(slideIndex === dataSlider.length){
       setSlideIndex(1)
      }
   }

   const prevSlide = () => {
       if(slideIndex !== 1){
           setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
         setSlideIndex(dataSlider.length)
        }
   }

    return(
      <div>
        <div className="uvod">
            <h1>Galerija</h1>
            <p>Veliki izbor namještaja na jednom mjestu. Pratimo najnovije svjetske trendove kako bi vam omogućili najveći izbor po najprihvatljivijim cijenama.</p>
        </div>
        <div className='container-slider'>
        <div className="left-slide">
        {dataSlider.map((obj, index) => {
          return (
              <div style={{backgroundColor: `${obj.backgroundColor}`}} key={obj.id} 
                   className={slideIndex === index + 1 ? 'slide active-anim'  : 'slide'}> 
                 <h2 style={{color: `${obj.color}`, fontFamily: `${obj.fontFamily}`}}>{obj.title}</h2>
                 <p style={{width: `${obj.width}`, color:`${obj.color}`, fontFamily: `${obj.fontFamily}`}} className="subtitle">{obj.subTitle}</p>
              </div>
          )
      })}
      </div>   

      <div className="right-slide">
      {dataSlider.map((obj, index) => {
          return (
              <div key={obj.id} 
                   className={slideIndex === index + 1 ? 'slide active-anim'  : 'slide'}> 
                  <img 
                    src={process.env.PUBLIC_URL + `Images/img${index + 1}.JPG`} 
                    alt="">
                  </img>
              </div>
          )
      })}
      <ButtonSlider moveSlide={nextSlide} direction={'up'}></ButtonSlider>
      <ButtonSlider moveSlide={prevSlide} direction={'down'}></ButtonSlider> 
  </div>
  <div className="katalog">
            <h2>Preuzmi Katalog</h2>
            <a href={catalog}
             download="Example-PDF-document"
             target="_blank"
             rel="noreferrer">
        <button>Preuzmi <i class="fa-solid fa-download fa-shake"></i></button>
      </a>
        </div>
  </div>
</div>
    )
}

export default ImageSlider;