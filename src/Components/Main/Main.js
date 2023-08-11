import React from "react";
import Background from './BackgroundSlider/Background.js'
import Words from "./Main-components/Words.js";
import Katalog from "./Main-components/Katalog.js";
import Hero from './Main-components/Hero.js'
import styles from './Main.module.css';
import Recenzije from "./Main-components/Reviews/Recenzije.js";

const Main = () => {
    return(
        <div className={styles.mainContainer}>
            <Background></Background>
            <Words></Words>
            <Katalog></Katalog>
            <Hero></Hero>
            <Recenzije></Recenzije>
        </div>
    )
}

export default Main;