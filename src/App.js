import './App.css';
import React from 'react'
import Navigation from './components/Navigation'
import {HashRouter, Route} from "react-router-dom";
import About from './routes/About'
import Home from './routes/Home'

  function App(){
    return (
        <HashRouter>
            <Navigation/>
            <Route path="/" exact={true}  component={Home} />
            <Route path="/about"  component={About} />
            {/* <Route path="/about" exact={true}  component={About}/> */}
        </HashRouter>
    );
  }

export default App;
