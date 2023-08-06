import React, {useEffect} from "react";
import Header from "./Header/Header";
import Central from "./AboutUs/Central";

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <Header></Header>
            <Central></Central>
        </div>
    )
}

export default AboutUs;