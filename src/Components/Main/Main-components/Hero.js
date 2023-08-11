import React from "react";
import styles from './Hero.module.css'

const Hero = () => {
    return(
        <div className={styles.heroContainer}>
           <div className={styles.hero}>
              <h3><i class="fa-solid fa-question fa-fade"></i> Savjeti i pomoć</h3>
              <p>Treba li vam savjet ili pomoć u bilo kojem trenutku, prije, tokom ili nakon kupnje? Pomoć možete zatražiti osobnim dolaskom u prodajne salone, putem telefona ili e-maila.</p>
           </div>
           <div className={styles.delivery}>
              <h3><i class="fa-solid fa-truck fa-fade"></i> Dostava</h3>
              <p>Svu kupljenu robu isporučujemo vlastitim prevozom i to besplatno do 40 km udaljenosti, a preko u dogovoru sa kupcem.</p>
           </div>
           <div className={styles.construction}>
              <h3><i class="fa-solid fa-screwdriver-wrench fa-fade"></i> Montaža</h3>
              <p>Za montažu namještaja kod kojeg je preporučljivo unajmiti stručnjaka (kao što je slučaj kod spavaćih soba, Kuhinja itd.), rado ćemo Vam pomoći i ponuditi da Vam naši monteri namontiraju namještaj po povoljnim cijenama.</p>
           </div>
           <div className={styles.guarantee}>
              <h3><i class="fa-regular fa-heart fa-fade"></i> Garancija</h3>
              <p>Nudimo granciju na namještaj 12 mjeseci, ako se budete ravnali prema datim uputama.</p>
           </div>
        </div>
    )
}

export default Hero;