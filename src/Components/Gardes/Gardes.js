import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Gardes.css'
const Gardes=()=>{
    return(
        <div>
            <Header/>
            <div className="outerGardes">
                <h1 style={{marginTop:'50px'}}>Why Gardes Index ?</h1>
                <div className="innerGardes">
                <img src={require("../../Assets/icons/gardesUp.jpg")}/>
                <p className="GardesDescription">
                The idea come from the Stock Market Indexes, S&P 500 groups 500 companies.
                So when you invest your money in S&P 500 for example, you are putting your money
                hoping that S&P 500 Indexe go up. By investing in such Market you are dividing your investing
                risk over 500 shares (companies). So Gardes Index work the same way like Stock Market Indexes,
                It gives you information about a some of crypto currencies how they are doing. For example Gardes
                Index 20, groups the first 20 Crypto currencies by Market Caps, so if you invest in the first 20 Cryptos
                by bying the same amount of each one, the Gardes Index 20 will tell how much you are gaining profit if 
                Gardes Index 20 is going up, and how much you loose if Gardes Index 20 is going down. 
                </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Gardes;