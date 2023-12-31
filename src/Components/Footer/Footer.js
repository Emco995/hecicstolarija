import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.lastSection}>
        <div className={styles.footer}>
            <div className={styles.logoPart}>
                <img src='./logo.png'></img>
            </div>
            <div className={styles.leftPart}>
                <h2>O nama</h2>
                <p>Za vaše potpuno iskustvo kupnje stojimo Vam na usluzi tokom cijelog procesa. Od ideje do realizacije, a i nakon toga. Pomoći ćemo Vam u osmišljavanju i odabiru idealnog rješenja za Vaš dom, pobrinuti se da dobijete proizvod koji želite pod uvjetima koji Vam najviše odgovaraju.</p>
            </div>
            <div className={styles.centralPart}>
                <h2>Plaćanje</h2>
                <p>Kupovinu u našem salonu možete obaviti gotovinski, čime ostvarujete popust od 10% (OSIM NA ARTIKLE KOJI SU VEĆ NA AKCIJI), ili pomoću kreditnih kartica do 12 mjeseci (bez popusta)!!</p>
            </div>
            <div className={styles.rightPart}>
                <h2>Kontakt i radno vrijeme</h2>
                <p>
                       Ponedjeljak-Petak: 7:00-15:00
                       <br></br>
                       Subota: 8:00-16:00
                       <br></br>
                       Nedjelja: neradno</p>

                       <p>  stolarija.hecic@hotmail.com
                       tel: +387 61 886 715
                       </p>

                       <p>Adresa: 25. Novembra br. 20, Gradačac</p>
            </div>
        </div>
        <p className={styles.rights}><i class="fa-regular fa-copyright"></i> All rights reserved</p>
        </div>
    )
}

export default Footer