import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gardes from  './Components/Gardes/Gardes';
import Ressource from './Components/Ressources/Ressource';
const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/gardes" component={Gardes} />
            <Route path="/ressources" component={Ressource}></Route>
        </Router>
    )
}

export default App;