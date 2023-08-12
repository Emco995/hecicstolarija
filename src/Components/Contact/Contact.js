import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5ecarih', 'template_n0vhxgu', form.current, 'v24Q9juHjKMOj1h_W')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div className={styles.contactContainer}>
            <div  className={styles.map}>
              <h1>Where To Find Us ? <span><i class="fa-solid fa-hand-pointer fa-rotate-180"></i></span></h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11305.96758521378!2d18.4200406!3d44.8929882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c3d0afbab09ef%3A0xebf922bc2caf5274!2sJYSK!5e0!3m2!1shr!2sba!4v1691332186677!5m2!1shr!2sba" width="100%" height="500px" border="0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.contactInfoLeft}>
                    <h1>Kontaktiraj nas</h1>
                    <p>Hećić Stolarija d.o.o. firma za prodaju i proizvodnju namještaja</p>
                    <p>Adresa: 25. Novembra br. 20, Gradačac</p>
                    <p>stolarija.hecic@hotmail.com
                        <br></br>
                       tel: +387 61 886 715</p>
                    <p className={styles.contactIcons}><a href="https://www.facebook.com/stolarijahecic"><i class="fa-brands fa-facebook fa-fade"></i></a>  <a href="https://www.facebook.com/stolarijahecic"><i class="fa-brands fa-instagram fa-fade"></i></a></p>   
                </div>

                <div className={styles.contactInfoRight}>
                   <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                      <div className={styles.nameNumber}>
                        <label for='ime'></label>
                        <input name="user_name" className={styles.inputName} id="ime" type="text" placeholder="Vaše Ime" required></input>

                        <label for='broj'></label>
                        <input name="user_number" className={styles.inputNumber} id="broj" type="number" placeholder="Vaš Broj" required></input>
                      </div>
                      <div className={styles.emailMessage}>
                        <label for='email'></label>
                        <input name="user_email" className={styles.inputEmail} id="email" type="email" placeholder="Vaš Email" required></input>

                        <label for='message'></label>
                        <textarea name="message" className={styles.inputMessage} id="message" placeholder="Vaša Poruka"></textarea>
                      </div>
                      <button type="submit" className={styles.contactFormButton}>Pošalji</button>
                   </form>
                </div>
            </div>

            <div className={styles.contactLastSection}>
            <div className={styles.contactFooter}>
            <div className={styles.contactLogoPart}>
                <img src='./logo.png'></img>
            </div>
            <div className={styles.contactLeftPart}>
                <h2>O nama</h2>
                <p>Za vaše potpuno iskustvo kupnje stojimo Vam na usluzi tokom cijelog procesa. Od ideje do realizacije, a i nakon toga. Pomoći ćemo Vam u osmišljavanju i odabiru idealnog rješenja za Vaš dom, pobrinuti se da dobijete proizvod koji želite pod uvjetima koji Vam najviše odgovaraju.</p>
            </div>
            <div className={styles.contactCentralPart}>
                <h2>Plaćanje</h2>
                <p>Kupovinu u našem salonu možete obaviti gotovinski, čime ostvarujete popust od 10% (OSIM NA ARTIKLE KOJI SU VEĆ NA AKCIJI), ili pomoću kreditnih kartica do 12 mjeseci (bez popusta)!!</p>
            </div>
            <div className={styles.contactRightPart}>
                <h2 className={styles.workTime}>Kontakt i radno vrijeme</h2>
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
        <p className={styles.contactRights}><i class="fa-regular fa-copyright"></i> All rights reserved</p>
            </div>
        </div>
    )
}

export default Contact;