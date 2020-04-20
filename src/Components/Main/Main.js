import React, { useEffect, useState } from 'react';
import CryptoView from './CryptoView/CryptoView';
import CryptoViewLabel from './CryptoViewLabel/CryptoViewLabel';
import GardesIndex from './GardesIndex/GardesIndex';
import GardesIndexDescription from './GardesIndexDescription/GardesIndexDescription'
import './Main.css'
const Main = () => {
    const [Data, setData] = useState(null);
    const [ListId,setListID]=useState([]);
    const [Count,setCount]=useState(10);
    const [MarketCap,setMarketCap]=useState(0);
    const [Volume24H,setVolume24H]=useState(0);
    useEffect(() => {

        const Api = fetch('https://api.coincap.io/v2/assets')
            .then(res => res.json())
            .then(data => data.data)
            .catch((e) => console.log(e))

        const makeData = async () => {
            const data = await Api;
            //console.log(data)
            let listOfCrypto = []
            let listOfCryptoId= []
            let sumMarketCap=0;
            let sumVolume24H=0;
            for (let i = 0; i < Count; i++) {
                listOfCrypto.push(data[i]);
                listOfCryptoId.push(data[i].id);
                sumMarketCap+=Math.round(data[i].marketCapUsd * 100) / 100;
                sumVolume24H+=Math.round(data[i].volumeUsd24Hr * 100) / 100;
            }
            const listCry = listOfCrypto.map((d) => {
                return <CryptoView  key={d.id} icon={d.symbol.toLowerCase()} Rank={d.rank} Name={d.name} Price={Math.round(d.priceUsd * 100) / 100} MarketCap={Math.round(d.marketCapUsd * 100) / 100}
                    VWAP={Math.round(d.vwap24Hr * 100) / 100} Supply={Math.round(d.supply)} Volume={Math.round(d.volumeUsd24Hr * 100) / 100} Change={Math.round(d.changePercent24Hr * 100) / 100} />
            })
            setData(listCry);
            setListID(listOfCryptoId);
            setMarketCap(sumMarketCap);
            setVolume24H(sumVolume24H);
            
        }
        makeData();

    }, [Count])
    const changeCount =(c)=>{
        setCount(c)
    }
    //console.log(Volume24H)
    return (
        <div className="outerMain">
            <div className="ListButtonGardesIndex">
            <ul >
                <li><button onClick={()=>{changeCount(10)}}>GardesIndex 10</button></li>
                <li><button onClick={()=>{changeCount(20)}}>GardesIndex 20</button></li>
                <li><button onClick={()=>{changeCount(30)}}>GardesIndex 30</button></li>
                <li><button onClick={()=>{changeCount(50)}} >GardesIndex 50</button></li>
                <li><button onClick={()=>{changeCount(100)}} >GardesIndex 100</button></li>
            </ul>
            </div>
            <div>
                {(Volume24H && MarketCap) ? <GardesIndexDescription count={Count} marketCap={MarketCap} volume24H={Volume24H}/>: null}
                {(ListId.length===Count) ? <GardesIndex count={Count} Id={ListId} /> :null}
            </div>
            <table>
                <CryptoViewLabel />
                {Data}
            </table>
        </div>
    )

}

export default Main;