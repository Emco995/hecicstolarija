import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
import dataSlider from "./dataSlider";
import ButtonSlider from "./ButtonSlider";
import catalog from "../../Components/Main/Main-components/Components Assets/katalog.pdf";

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div>
      <div className={styles.uvod}>
        <h1>Galerija</h1>
        <p>
          Veliki izbor namještaja na jednom mjestu. Pratimo najnovije svjetske
          trendove kako bi vam omogućili najveći izbor po najprihvatljivijim
          cijenama.
        </p>
      </div>
      <div className={styles.containerSliderTop}>
        <div className={styles.leftSlideTop}>
          {dataSlider.map((obj, index) => {
            return (
              <div
                style={{ backgroundColor: `${obj.backgroundColor}` }}
                key={obj.id}
                className={
                  slideIndex === index + 1
                    ? `${styles.slide} ${styles.activeAnim}`
                    : `${styles.slide}`
                }
              >
                <h2
                  style={{
                    color: `${obj.color}`,
                    fontFamily: `${obj.fontFamily}`,
                  }}
                >
                  {obj.title}
                </h2>
                <p
                  style={{
                    width: `${obj.width}`,
                    color: `${obj.color}`,
                    fontFamily: `${obj.fontFamily}`,
                  }}
                  className="subtitle"
                >
                  {obj.subTitle}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.rightSlideTop}>
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1
                    ? `${styles.slide} ${styles.activeAnim}`
                    : `${styles.slide}`
                }
              >
                <img
                  src={process.env.PUBLIC_URL + `Images/img${index + 1}.JPG`}
                  alt=""
                ></img>
              </div>
            );
          })}
          <ButtonSlider
            moveSlide={nextSlide}
            direction={styles.up}
          ></ButtonSlider>
          <ButtonSlider
            moveSlide={prevSlide}
            direction={styles.down}
          ></ButtonSlider>
        </div>

        <div className={styles.katalog}>
          <h2 className={styles.catalogTitle}>Preuzmi Katalog</h2>
          <a
            href={catalog}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Preuzmi <i class="fa-solid fa-download fa-shake"></i>
            </button>
          </a>

          <div className={styles.galLastSection}>
        <div className={styles.galFooter}>
          <div className={styles.galLogoPart}>
            <img src="./logo.png"></img>
          </div>
          <div className={styles.galLeftPart}>
            <h2>O nama</h2>
            <p>
              Za vaše potpuno iskustvo kupnje stojimo Vam na usluzi tokom
              cijelog procesa. Od ideje do realizacije, a i nakon toga. Pomoći
              ćemo Vam u osmišljavanju i odabiru idealnog rješenja za Vaš dom,
              pobrinuti se da dobijete proizvod koji želite pod uvjetima koji
              Vam najviše odgovaraju.
            </p>
          </div>
          <div className={styles.galMidPart}>
            <h2>Plaćanje</h2>
            <p>
              Kupovinu u našem salonu možete obaviti gotovinski, čime
              ostvarujete popust od 10% (OSIM NA ARTIKLE KOJI SU VEĆ NA AKCIJI),
              ili pomoću kreditnih kartica do 12 mjeseci (bez popusta)!!
            </p>
          </div>
          <div className={styles.galRightPart}>
            <h2>Kontakt i radno vrijeme</h2>
            <p>
              Ponedjeljak-Petak: 7:00-15:00
              <br></br>
              Subota: 8:00-16:00
              <br></br>
              Nedjelja: neradno
            </p>

            <p> stolarija.hecic@hotmail.com tel: +387 61 886 715</p>
          </div>
        </div>
        <p className={styles.galRights}>
          <i class="fa-regular fa-copyright"></i> All rights reserved
        </p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
