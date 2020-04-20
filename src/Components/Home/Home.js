import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './Home.css';
const Home = () => {
    return (
        <div className="outerApp">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;