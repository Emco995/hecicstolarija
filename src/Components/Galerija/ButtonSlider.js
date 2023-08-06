import React from "react";
import './ImageSlider.css';
import downArrow from './Icons/down-arrow.svg';
import upArrow from './Icons/up-arrow.svg';

const ButtonSlider = ({direction, moveSlide}) => {
    console.log(direction, moveSlide)
    return (
        <button onClick={moveSlide}
        className={direction === 'down' ? 'btn-slide up' : 'btn-slide down'}>
           <img src={direction === 'down' ? upArrow : downArrow} alt=""></img>
        </button>
    )
}

export default ButtonSlider;