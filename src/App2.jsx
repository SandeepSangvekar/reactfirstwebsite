import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const App2 = () => {
    return <>
    <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/service" exact component={Service}/>
        <Route path="/contact" exact component={Contact}/>
        </Switch>
    </BrowserRouter>
    </>
}
export default App2;