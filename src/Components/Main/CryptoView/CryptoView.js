import React from 'react';
import './CryptoView.css'
const CryptoView = ({ Rank, icon, Name, Price, MarketCap, VWAP, Supply, Volume, Change }) => {
    return (
        <tbody>
            <tr >
                <td>{Rank}</td>
                <td>{Name}</td>
                <td>${Price}</td>
                <td>${MarketCap}</td>
                <td>${VWAP}</td>
                <td>{Supply}</td>
                <td>${Volume}</td>
                <td className={(Change > 0) ? "up" : "down"}>{Change}%</td>
            </tr>

        </tbody>
    )
}

export default CryptoView