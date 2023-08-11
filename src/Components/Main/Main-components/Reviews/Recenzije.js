import React, { useState, useEffect } from "react";
import styles from "./Recenzije.module.css";
import reviewData from "./ReviewsData";
import quotes from "./double-quotes-l.svg";

const Recenzije = () => {
  const [people] = useState(reviewData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  

  return (
    <section className={styles.section}>
      <h2 className={styles.titleReview}>Recenzije zadovoljnih kupaca</h2>

      <div className={styles.sectionCenter}>
        {people.map((item, indexPeople) => {
          const { id, name, review, backgroundColor } = item;
          let position = `${styles.nextSlide}`;
          if (indexPeople === index) {
            position = `${styles.activeSlide}`;
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = `${styles.lastSlide}`;
          }
          return (
            <article className={position} key={id}>
              <div
                style={{ background: `${backgroundColor}` }}
                className={styles.reviewContainer}
              >
                <h1 className={styles.ikona}>
                  <i class="fa-solid fa-quote-left fa-bounce"></i>
                </h1>
                <p className={styles.review}>{review}</p>
                <h2 className={styles.name}>- {name}</h2>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Recenzije;
