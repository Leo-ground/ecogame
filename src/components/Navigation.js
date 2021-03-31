import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

function Navigation(){
    return (
        <div >
            <div style={nav_bar}>
                <Link to="/" style={btn}>Home</Link>
                <Link to="/about" style={btn}>About</Link>
            </div>
            <div style={logoDiv}>
                <a href="http://localhost/cust/my-account">
                        <img src="/img/ecoL.png"/>
                    </a>
                </div>
            
        </div>
    );
}

const nav_bar={
    background:'#90c62b',
    padding: '0.1rem',
    font: '2rem',
    display:'flex'
  
}

const logoDiv={
    background:'white',
    width:'200px'
}

const btn ={
    background: '#90c62b',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '0 0 0 10px',
    font:'50px'
}
 
export default Navigation;