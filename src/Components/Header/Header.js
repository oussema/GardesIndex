import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="outerHeader">
                <Link to="/"><img alt="logo" src={require("../../Assets/GardesLogo/logo_transparent.png")} /></Link>
                <ul>
                    <Link to="/gardes"><li>Why Gardes Index ?</li></Link>
                    <Link to="/ressources"><li>Ressources</li></Link>
                    <Link to="/gardes"><li>Contribute</li></Link>
                </ul>
            <div className="donationAdress">Donate: 0x74fEE6bBd1dD965Ea90638faF37fD4A861F47178</div>
        </div>
    )
}

export default Header;