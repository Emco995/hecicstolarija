import React, {useState, useEffect} from "react";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [active, setActive] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        const changeNavBackground = () => {
            if(window.scrollY >= 80 ){
             setNavbar(true);
            } else {
             setNavbar(false);
            }
         }
         window.addEventListener('scroll', changeNavBackground);
    })

    return(
        <div className={styles.header}>
        <div className={styles.menuIcon}>
           <i onClick={showMenu} className="fa-solid fa-bars"></i>
        </div>
       
        <div className={(active ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`)}> 
        <img src='./logo.png' alt="" className={styles.logo}></img>
            <ul>
                 <div className={styles.closed}><i onClick={showMenu} className="fa-solid fa-xmark"></i></div>
                 <li><Link to="/">Početna</Link></li>
                 <li><Link to="/galerija">Galerija</Link></li>
                 <li><Link to="/about">O nama</Link></li>
                 <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </div> 
        </div>
    )
}

export default Navbar;