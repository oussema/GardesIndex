import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="outerFooter">
            <a href="https://github.com/oussema/GardesIndex" className="linkFooter">
                <img alt="Github"  src={require("../../Assets/icons/github.jpg")} />
                <div>Github</div>
            </a>
            <a href="https://gitcoin.co/oussema" className="linkFooter">
                <img alt="Gitcoin" src={require("../../Assets/icons/gitcoin.png")} />
                <div>Gitcoin</div>
            </a>
            <div style={{ marginLeft: '100px' }}>Donate: 0x74fEE6bBd1dD965Ea90638faF37fD4A861F47178</div>
        </div>
    )
}

export default Footer;
