import React, {useEffect} from "react";
import Header from "./Header/Header";
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default Home;