import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Ressource = () => {
    return (
        <div>
            <Header />
            <div >
                <TradingViewWidget
                    symbol="BINANCE:BTCUSDT"
                    locale="fr"
                    width="1000"
                    height="500"
                />
            </div>
            <Footer />
        </div>
    )
}

export default Ressource;