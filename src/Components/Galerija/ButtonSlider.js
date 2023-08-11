import React from "react";
import styles from "./ImageSlider.module.css";
import downArrow from "./Icons/down-arrow.svg";
import upArrow from "./Icons/up-arrow.svg";

const ButtonSlider = ({ direction, moveSlide }) => {
//   console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === `${styles.down}` ? `${styles.btnSlideUp} ${styles.up}` : `${styles.btnSlideDown} ${styles.down}`}>
      <img src={direction === `${styles.down}` ? upArrow : downArrow} alt=""></img>
    </button>
  );
};

export default ButtonSlider;
