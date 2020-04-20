import React, { useEffect, useState } from 'react';
import MyChart from './MyChart/MyChart';
import Loader from './Loader/Loader';
import './GardesIndex.css';
const GardesIndex = ({count,Id}) => {
    const [Data, setData] = useState([]);
    const [t, setT] = useState('m1');
    const [period, setPeriod] = useState('24H')
    const [isLoading, setIsLoading] = useState(true);
    const [fix]=useState(0);
    useEffect(() => {
        let promiseData = [];
        //let gardesIndex = ['bitcoin', 'ethereum', 'ripple', 'bitcoin-cash', 'bitcoin-sv', 'litecoin', 'eos', 'binance-coin', 'tezos', 'chainlink']
        let gardesIndex= Id;
        //console.log('listId for grades Index',Id)
        promiseData = gardesIndex.map(cryptoName => {
            return fetch(`https://api.coincap.io/v2/assets/${cryptoName}/history?interval=${t}`)
                .then(res => res.json())
                .then(data => data.data.map(d => ([d.time, parseFloat(d.priceUsd)])))
                .then(result => result)
                .catch(e => console.log(e))
        })

        const makeData = async () => {
            let dataFromPromise = [];
            for (let i = 0; i < count; i++) {
                dataFromPromise.push(await promiseData[i])
            }
            //console.log('chacke promise',dataFromPromise)
            let i = 0;
            let data = []
            while (i < (dataFromPromise[0].length - 1)) {
                let index = dataFromPromise[0][i][0];
                let sum = 0;
                for (let j = 0; j < count; j++) {
                    sum += dataFromPromise[j][i][1]
                }
                data.push([index, sum]);
                i++;
            }
            //console.log(data);
            setData(data);
            setIsLoading(false);
        }
        makeData();
        //console.log(promiseData)
    }, [t,fix])
    useEffect(() => {
        setIsLoading(true)
    }, [t])
    const change=()=>{
        return Math.round(((Data[Data.length - 1][1] - Data[0][1]) / Data[0][1]) * 10000) / 100;
    }
    const price=()=>{
        return (Math.round(Data[Data.length - 1][1] * 100) / 100);
    }
    return (<div className="outerGardesIndex">
        <div className="innerGardesIndex">
        <div>{isLoading ? <Loader /> :
        <div >
            <div className="GardesIndexPrice"><div style={{textAlign:"center"}}>GardesIndex {count} </div><div style={{textAlign:"center", color:"rgb(128,128,128)"}}>$ {price()}</div></div>
            <div className="GardesIndexChange"><div style={{textAlign:"center"}}>CHANGE</div><div style={{textAlign:"center"}} className={(change()>0) ? "up" : "down"}>{change()}%</div></div>
            <div className="GardesMyChart"><MyChart donne={Data} /></div>
            <div className="ListButtonTime">
                <button onClick={() => { setT('m1'); setPeriod('24H') }}>1 Day</button>
                <button onClick={() => { setT('m15'); setPeriod('1 W') }}>1 Week</button>
                <button onClick={() => { setT('m30'); setPeriod('2 W') }}>2 Week</button>
                <button onClick={() => { setT('h1'); setPeriod('1 M') }}>1 Month</button>
                <button onClick={() => { setT('h2'); setPeriod('2 M') }}>2 Month</button>
                <button onClick={() => { setT('h6'); setPeriod('6 M') }}>6 Month</button>
                <button onClick={() => { setT('h12'); setPeriod('1 Y') }}>1 Year</button>
            </div>

        </div>

    }</div>
    </div>
    </div>)
}

export default GardesIndex;
