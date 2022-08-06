import './Navbar.css';
import { NavLink, Router } from 'react-router-dom';
import React, { Component }  from 'react';

function Navbar(props) {
  return (
    <navbar>
      <ul>
        <li><button onClick={() => { props.args[5](false); props.args[0](false); props.args[1](false); props.args[2](false); props.args[3](false); props.args[4](false) }}>Home</button></li>
        <li><button onClick={() => { props.args[5](false); props.args[0](true); props.args[1](true); props.args[2](false); props.args[3](false); props.args[4](false) }}>Music Inventory</button></li>
        <li><button onClick={() => { props.args[5](false); props.args[0](true); props.args[2](true); props.args[1](false); props.args[3](false); props.args[4](false) }}>Sports Inventory</button></li>
        <li><button onClick={() => { props.args[5](false); props.args[0](true); props.args[3](true); props.args[1](false); props.args[2](false); props.args[4](false) }}>Tech Inventory</button></li>

        {/* <li><a><NavLink to="/home" onClick={()=>{props.args[0,1,2,3,4](false)} }>Home</NavLink></a></li>
              <li><a><NavLink to="/music" onClick={()=>{props.args[0,1](true) ;props.args[2,3,4](false)}}>Music Inventory</NavLink></a></li>
              <li><a><NavLink to="/sports" onClick={()=>{props.args[0,2](true); props.args[1,3,4](false)}}>Sports Inventory</NavLink></a></li>
              <li><a><NavLink to="/tech" onClick={()=>{props.args[0,3](true); props.args[1,2,4](false)}}>Tech Inventory</NavLink></a></li> */}
      </ul>
      <div>
      {/* <a><NavLink to="/home" onClick={()=>{props.args[0,1,2,3,4](false)} }>Home</NavLink></a></li> */}
              
      <a onClick={() => { props.args[5](true); props.args[0](true); props.args[4](false); props.args[1](false); props.args[2](false); props.args[3](false) }} className="logo">Cart</a>
        <a onClick={() => { props.args[5](false); props.args[0](true); props.args[4](true); props.args[1](false); props.args[2](false); props.args[3](false) }} className="logo">Contact Us</a>
      </div>
    </navbar>
    // <div className="App1">
    //   <header className="App-header1">
    //     hiiiiiiiiiiiiii
    //   </header>
    // </div>
  );
}

export default Navbar;