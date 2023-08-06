import { useState, useRef, useEffect } from "react";
import img1 from "./BackgroundImages/img1.jpg";
import img2 from "./BackgroundImages/img2.jpg";
import img3 from "./BackgroundImages/img3.jpg";
import img4 from "./BackgroundImages/img4.jpg";
import img5 from "./BackgroundImages/img5.jpg";
import img6 from "./BackgroundImages/img6.jpg";
import img7 from "./BackgroundImages/img7.jpg";
import img8 from "./BackgroundImages/img8.jpg";
import img9 from "./BackgroundImages/img9.jpg";
import img10 from "./BackgroundImages/img10.jpg";
import "./Background.css";

const Background = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();

  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 4000);
    return () => {
      clearInterval(sliderInterval);
    };
  },);

  return (
    <div className="imgWrapper">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
                index === currentSlide ? "imageActive homeImg" : "image"
            }
          />
        );
      })}
    </div>
  );
};

export default Background;
