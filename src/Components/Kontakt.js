import React, {useEffect} from "react";
import Navbar from "./Header/Navbar/Navbar";
import Contact from "./Contact/Contact";

const Kontakt = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <Navbar></Navbar>
            <Contact></Contact>
        </div>
    )
}

export default Kontakt;