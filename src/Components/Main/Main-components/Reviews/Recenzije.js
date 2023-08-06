import React, {useState, useEffect} from "react";
import './Recenzije.css';
import reviewData from "./ReviewsData";
import quotes from './double-quotes-l.svg';


const Recenzije = () => {
  const [people] = useState(reviewData);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    } 
    else if(index > lastIndex){
      setIndex(0);
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return() => {
      clearInterval(slider)
    }
  }, [index])

  return(
    <section className="section">
       
          <h2 className="title-review">Recenzije zadovoljnih kupaca</h2>
       
       <div className="section-center">
         {people.map((item, indexPeople) => {
            const {id, name, review, backgroundColor} = item; 
            let position = 'nextSlide';
            if(indexPeople === index){
              position = 'activeSlide';
            }
            if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)){
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <div style={{background: `${backgroundColor}`}} className="review-container">
                 <h1 className="ikona"><i class="fa-solid fa-quote-left fa-bounce"></i></h1>
                 <p className="review">{review}</p>
                 <h2 className="name">- {name}</h2>
                 </div>
              </article>
            )
         })}
       </div>
    </section>
  )
}

export default Recenzije;
