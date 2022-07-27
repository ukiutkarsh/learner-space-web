import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Contact from './Contact';
import Music from './Music';
import Tech from './Tech';
import Home from './Home';
import Sports from './Sports'
import { Router, Route, Switch, useLocation } from 'react-router-dom';
import { useState } from 'react'
import Content from './Content';

function App() {

  const [nothome, setNotHome] = useState(false)
  const [IsMusic, setIsMusic] = useState(false)
  const [IsSport, setIsSport] = useState(false)
  const [IsTech, setIsTech] = useState(false)
  const [IsContact, setIsContact] = useState(false)

  const createContent = () => {
    if (nothome === true & IsContact === false) {
      return <Content args={[IsMusic, IsSport, IsTech, IsContact]} />;
    }
    else if (IsContact===true) {
      return <Contact />
    }
    else {
      return <Home />
    } 
  }

  return (

    <div className="App">
      <Navbar args={[setNotHome, setIsMusic, setIsSport, setIsTech, setIsContact]} sets={false} />
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
