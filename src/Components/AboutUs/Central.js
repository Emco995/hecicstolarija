import React from "react";
import './Central.css';

const Central = () => {
    return(
        <div className="central">
           <div className="central-background">
            <h1>O Nama</h1>
           </div>


           <div className="central-main">
             <div className="central-main-left">
                <h1>Hećić Stolarija</h1>
                <p>Hećić Stolarija d.o.o. je firma za prodaju namještaja, osnovana još 2000. godine sa sjedištem u Gradačcu.
                   U počecima malo obiteljsko poduzeće, uz naporan rad napreduje i kroz svoj razvoj opredjeljuje se i specijalizira prema prodaji kvalitetnog i funkcionalnog namještaja.</p>
             </div>
             <div className="central-main-right">
                <img src='./logo.png' alt="" className='central-logo'></img>
             </div>
           </div>


           <div className="main-bottom-central">
               <h1>Ukratko...</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
           </div>


           <div className="central-reviews">
           <div className="central-help">
              <h3><i class="fa-solid fa-question fa-fade"></i> Savjeti i pomoć</h3>
              <p>Treba li vam savjet ili pomoć u bilo kojem trenutku, prije, tokom ili nakon kupnje? Pomoć možete zatražiti osobnim dolaskom u prodajne salone, putem telefona ili e-maila.</p>
           </div>
           <div className="central-delivery">
              <h3><i class="fa-solid fa-truck fa-fade"></i> Dostava</h3>
              <p>Svu kupljenu robu isporučujemo vlastitim prevozom i to besplatno do 40 km udaljenosti, a preko u dogovoru sa kupcem.</p>
           </div>
           <div className="central-construction">
              <h3><i class="fa-solid fa-screwdriver-wrench fa-fade"></i> Montaža</h3>
              <p>Za montažu namještaja kod kojeg je preporučljivo unajmiti stručnjaka (kao što je slučaj kod spavaćih soba, Kuhinja itd.), rado ćemo Vam pomoći i ponuditi da Vam naši monteri namontiraju namještaj po povoljnim cijenama.</p>
           </div>
           <div className="central-guarantee">
              <h3><i class="fa-regular fa-heart fa-fade"></i> Garancija</h3>
              <p>Nudimo granciju na namještaj 12 mjeseci, ako se budete ravnali prema datim uputama.</p>
           </div>
           </div>


           <div className="central-footer-container">
           <div className="central-footer">
            <div className="central-logo-part">
                <img src='./logo.png'></img>
            </div>
            <div className="central-left-part">
                <h2>O nama</h2>
                <p>Za vaše potpuno iskustvo kupnje stojimo Vam na usluzi tokom cijelog procesa. Od ideje do realizacije, a i nakon toga. Pomoći ćemo Vam u osmišljavanju i odabiru idealnog rješenja za Vaš dom, pobrinuti se da dobijete proizvod koji želite pod uvjetima koji Vam najviše odgovaraju.</p>
            </div>
            <div className="central-mid-part">
                <h2>Plaćanje</h2>
                <p>Kupovinu u našem salonu možete obaviti gotovinski, čime ostvarujete popust od 10% (OSIM NA ARTIKLE KOJI SU VEĆ NA AKCIJI), ili pomoću kreditnih kartica do 12 mjeseci (bez popusta)!!</p>
            </div>
            <div className="central-right-part">
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
            </div>
        </div>
        <hr></hr>
        <p className="central-rights"><i class="fa-regular fa-copyright"></i> All rights reserved</p>
           </div>
        </div>
    )
}

export default Central;