import React from 'react'

const GardesIndexDescription = ({ count, marketCap, volume24H }) => {
    return (
        <div className="MainDecription">
            <div></div>
            <p className="MainDescriptionText">Gardes Index {count} represent the first {count} Crypto currencies listed by Market Cap volume</p>
            <div className="MarketCapStyle">
                <div>Market Cap</div>
                <div>${marketCap}</div>
            </div>
            <div className="VolumeStyle">
                <div>Volume (24H)</div>
                <div>${volume24H}</div>
            </div>
        </div>
    )
}

export default GardesIndexDescription;