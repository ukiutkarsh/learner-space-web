import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Contact from './Contact';
import Music from './Music';
import Tech from './Tech';
import Home from './Home';
import Cart from './cart'
import { Router, Route, Switch, useLocation } from 'react-router-dom';
import { useState } from 'react'
import Content from './Content';
import React, { Component }  from 'react';

function App(props) {

  const [nothome, setNotHome] = useState(false)
  const [IsMusic, setIsMusic] = useState(false)
  const [IsSport, setIsSport] = useState(false)
  const [IsTech, setIsTech] = useState(false)
  const [IsContact, setIsContact] = useState(false)
  const [IsCart, setCart] = useState(false)

  const createContent = () => {
    if (nothome === true & IsContact === false & IsCart===false) {
      return <Content args={[IsMusic, IsSport, IsTech, IsContact]} items={props.items}/>;
    }
    else if (IsCart===true & IsContact === false) {
      return <Cart items={props.items} />;
    }
    else if (IsContact===true) {
      return <Contact items={props.items}/>
    }
    else {
      return <Home items={props.items}/>
    } 
  }

  return (

    <div className="App">
      <Navbar args={[setNotHome, setIsMusic, setIsSport, setIsTech, setIsContact, setCart]} sets={false} />
      {createContent()}


      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}

      <br />
      <h1 className='footer'>Made with ❤️ By Utkarsh</h1>
      <br /><br />

    </div>
  );
}

export default App;
