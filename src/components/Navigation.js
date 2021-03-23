import React from "react";
//import PropTypes from "prop-types";

function Navigation(){
    return (
        <div >
            <div style={nav_bar}>
                    <a href="http://localhost/cust/my-account">
                        <img src="/img/ecoL.png"/>
                    </a>
                {/* <div style={logoDiv}>
                   
                </div> */}
            </div>
        </div>
    );
}

const nav_bar={
    background:'tomato',
    padding: '0.5rem',
    font: '2rem'
  
}

const logoDiv={
    background:'white',
    width:'200px'
}
 
export default Navigation;