import React, {useState, useEffect} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [active, setActive] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

   

    //   useEffect(() => {
    //     const changeNavBackground = () => {
    //         if(window.scrollY >= 80 ){
    //          setNavbar(true);
    //         } else {
    //          setNavbar(false);
    //         }
    //      }
    //      window.addEventListener('scroll', changeNavBackground);
    // })

    // const [navbar, setNavbar] = useState(false);

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
        // <div className={navbar ? 'navbar active' : 'navbar'}>
        //     <img src='./logo.png' alt="" className='logo'></img>
        //     <ul>
        //         <li><a href="/">Početna</a></li>
        //         <li><a href="#">Galerija</a></li>
        //         <li><a href="#">O nama</a></li>
        //         <li><a href="#">Kontakt</a></li>
        //     </ul>
        // </div>


        <div className="header">
        <div className="menu-icon">
           <i onClick={showMenu} className="fa-solid fa-bars"></i>
        </div>
       
        <div className={(active ? 'navbar active' : 'navbar')}> 
        <img src='./logo.png' alt="" className='logo'></img>
            <ul>
                 <div className="closed"><i onClick={showMenu} className="fa-solid fa-xmark"></i></div>
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