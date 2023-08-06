import React from "react";
import './Words.css';

const Words = () => {
    return(
        <div>
        <div className='word-namjestaj'>
             <span>N</span>
             <span>A</span>
             <span>M</span>
             <span>J</span>
             <span>E</span>
             <span>Š</span>
             <span>T</span> 
             <span>A</span> 
             <span>J</span> 
             <span className="space"></span>
             <span>P</span>
             <span>O</span>
        </div>
        <div className='word-vasoj'>
             <span>V</span>
             <span>A</span>
             <span>Š</span>
             <span>O</span>
             <span>J</span>
             <span className="space"></span>
             <span>M</span>
             <span>J</span>
             <span>E</span>
             <span>R</span>
             <span>I</span>
        </div>
        <div className="sentence">
          <span>Naručite i Vi Vašu kuhinju iz snova !</span>
        </div>
     </div>
    )
}

export default Words;