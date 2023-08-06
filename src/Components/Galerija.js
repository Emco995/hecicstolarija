import React, {useEffect} from "react";
import ImageSlider from "./Galerija/ImageSlider";
import Header from "./Header/Header";
import GaleryFooter from "./Galerija/GaleryFooter";

const Galerija = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
        <Header></Header>
        <ImageSlider></ImageSlider>
        <GaleryFooter></GaleryFooter>
        </div>
    )
}

export default Galerija;