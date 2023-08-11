import React from "react";
import styles from "./Central.module.css";

const Central = () => {
  return (
    <div className={styles.central}>
      <div className={styles.centralBackground}>
        <h1>O Nama</h1>
      </div>

      <div className={styles.centralMain}>
        <div className={styles.centralMainLeft}>
          <h1>Hećić Stolarija</h1>
          <p>
            Hećić Stolarija d.o.o. je firma za prodaju namještaja, osnovana još
            2000. godine sa sjedištem u Gradačcu. U počecima malo obiteljsko
            poduzeće, uz naporan rad napreduje i kroz svoj razvoj opredjeljuje
            se i specijalizira prema prodaji kvalitetnog i funkcionalnog
            namještaja.
          </p>
        </div>
        <div className={styles.centralMainRight}>
          <img src="./logo.png" alt="" className={styles.centralLogo}></img>
        </div>
      </div>

      <div className={styles.mainBottomCentral}>
        <h1>Ukratko...</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,rem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries
        </p>
      </div>

      <div className={styles.centralHelper}>
        <div className={styles.centralHelp}>
          <h3>
            <i class="fa-solid fa-question fa-fade"></i> Savjeti i pomoć
          </h3>
          <p>
            Treba li vam savjet ili pomoć u bilo kojem trenutku, prije, tokom
            ili nakon kupnje? Pomoć možete zatražiti osobnim dolaskom u prodajne
            salone, putem telefona ili e-maila.
          </p>
        </div>
        <div className={styles.centralDelivery}>
          <h3>
            <i class="fa-solid fa-truck fa-fade"></i> Dostava
          </h3>
          <p>
            Svu kupljenu robu isporučujemo vlastitim prevozom i to besplatno do
            40 km udaljenosti, a preko u dogovoru sa kupcem.
          </p>
        </div>
        <div className={styles.centralConstruction}>
          <h3>
            <i class="fa-solid fa-screwdriver-wrench fa-fade"></i> Montaža
          </h3>
          <p>
            Za montažu namještaja kod kojeg je preporučljivo unajmiti stručnjaka
            (kao što je slučaj kod spavaćih soba, Kuhinja itd.), rado ćemo Vam
            pomoći i ponuditi da Vam naši monteri namontiraju namještaj po
            povoljnim cijenama.
          </p>
        </div>
        <div className={styles.centralGuarantee}>
          <h3>
            <i class="fa-regular fa-heart fa-fade"></i> Garancija
          </h3>
          <p>
            Nudimo granciju na namještaj 12 mjeseci, ako se budete ravnali prema
            datim uputama.
          </p>
        </div>
      </div>

      <div className={styles.centralFooterContainer}>
        <div className={styles.centralFooter}>
          <div className={styles.centralLogoPart}>
            <img src="./logo.png"></img>
          </div>
          <div className={styles.centralLeftPart}>
            <h2>O nama</h2>
            <p>
              Za vaše potpuno iskustvo kupnje stojimo Vam na usluzi tokom
              cijelog procesa. Od ideje do realizacije, a i nakon toga. Pomoći
              ćemo Vam u osmišljavanju i odabiru idealnog rješenja za Vaš dom,
              pobrinuti se da dobijete proizvod koji želite pod uvjetima koji
              Vam najviše odgovaraju.
            </p>
          </div>
          <div className={styles.centralMidPart}>
            <h2>Plaćanje</h2>
            <p>
              Kupovinu u našem salonu možete obaviti gotovinski, čime
              ostvarujete popust od 10% (OSIM NA ARTIKLE KOJI SU VEĆ NA AKCIJI),
              ili pomoću kreditnih kartica do 12 mjeseci (bez popusta)!!
            </p>
          </div>
          <div className={styles.centralRightPart}>
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
        {/* <hr></hr> */}
        <p className={styles.centralRights}>
          <i class="fa-regular fa-copyright"></i> All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Central;
