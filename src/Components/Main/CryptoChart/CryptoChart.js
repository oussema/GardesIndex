import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './CryptoChart.css';

const CryptoChart = () => {
  return (
    <TradingViewWidget className="outerChart"
    symbol="BINANCE:ETHUSDT" 
    theme={Themes.DARK}
    locale="fr"
    />
  ) 
};

export default CryptoChart;




