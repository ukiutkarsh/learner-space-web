import './Navbar.css';
import { NavLink, Router } from 'react-router-dom';
import React, { Component } from 'react';

function Navbar(props) {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <navbar>
      {/* <ul> */}
      {/* <li><button onClick={() => { props.args[5](false); props.args[0](false); props.args[1](false); props.args[2](false); props.args[3](false); props.args[4](false) }}>Home</button></li> */}
      <a class="active" onClick={() => { props.args[5](false); props.args[0](false); props.args[1](false); props.args[2](false); props.args[3](false); props.args[4](false) }}>Home</a>
      <div id="myLinks">
        <a onClick={() => { props.args[5](false); props.args[0](true); props.args[1](true); props.args[2](false); props.args[3](false); props.args[4](false) }}>Music Inventory</a>
        <a onClick={() => { props.args[5](false); props.args[0](true); props.args[2](true); props.args[1](false); props.args[3](false); props.args[4](false) }}>Sports Inventory</a>
        <a onClick={() => { props.args[5](false); props.args[0](true); props.args[3](true); props.args[1](false); props.args[2](false); props.args[4](false) }}>Tech Inventory</a>
        {/* </div> */}
        {/* <li><a><NavLink to="/home" onClick={()=>{props.args[0,1,2,3,4](false)} }>Home</NavLink></a></li>
              <li><a><NavLink to="/music" onClick={()=>{props.args[0,1](true) ;props.args[2,3,4](false)}}>Music Inventory</NavLink></a></li>
              <li><a><NavLink to="/sports" onClick={()=>{props.args[0,2](true); props.args[1,3,4](false)}}>Sports Inventory</NavLink></a></li>
              <li><a><NavLink to="/tech" onClick={()=>{props.args[0,3](true); props.args[1,2,4](false)}}>Tech Inventory</NavLink></a></li> */}

        {/* <div id="myLinks"> */}
        {/* <br/> */}
        {/* <a><NavLink to="/home" onClick={()=>{props.args[0,1,2,3,4](false)} }>Home</NavLink></a></li> */}

        <a onClick={() => { props.args[5](true); props.args[0](true); props.args[4](false); props.args[1](false); props.args[2](false); props.args[3](false) }} className="logo">Cart</a>
        <a onClick={() => { props.args[5](false); props.args[0](true); props.args[4](true); props.args[1](false); props.args[2](false); props.args[3](false) }} className="logo">Contact</a>
      </div>
      {/* </ul> */}
      <a href="javascript:void(0);" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </a>
      
    </navbar>
    // <div className="App1">
    //   <header className="App-header1">
    //     hiiiiiiiiiiiiii
    //   </header>
    // </div>
  );
}

export default Navbar;