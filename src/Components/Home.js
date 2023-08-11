import React  from "react";
import Navbar from "./Header/Navbar/Navbar";
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default Home;