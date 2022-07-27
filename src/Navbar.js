import './Navbar.css';
import { NavLink,Router } from 'react-router-dom';

function Navbar(props) {
    return (
      <navbar>
          <ul>
              <li><a onClick={()=>{props.args[0](false)} }>Home</a></li>
              <li><a onClick={()=>{props.args[0](true);props.args[1](true);props.args[2](false);props.args[3](false);props.args[4](false)}}>Music Inventory</a></li>
              <li><a onClick={()=>{props.args[0](true);props.args[2](true);props.args[1](false);props.args[3](false);props.args[4](false)}}>Sports Inventory</a></li>
              <li><a onClick={()=>{props.args[0](true);props.args[3](true);props.args[1](false);props.args[2](false);props.args[4](false)}}>Tech Inventory</a></li>
             
              {/* <li><a><NavLink to="/home" onClick={()=>{props.args[0,1,2,3,4](false)} }>Home</NavLink></a></li>
              <li><a><NavLink to="/music" onClick={()=>{props.args[0,1](true) ;props.args[2,3,4](false)}}>Music Inventory</NavLink></a></li>
              <li><a><NavLink to="/sports" onClick={()=>{props.args[0,2](true); props.args[1,3,4](false)}}>Sports Inventory</NavLink></a></li>
              <li><a><NavLink to="/tech" onClick={()=>{props.args[0,3](true); props.args[1,2,4](false)}}>Tech Inventory</NavLink></a></li> */}
          </ul>

          <a onClick={()=>{props.args[0](true);props.args[4](true);props.args[1](false);props.args[2](false);props.args[3](false)}} className="logo">Contact Us</a>

      </navbar>
      // <div className="App1">
      //   <header className="App-header1">
      //     hiiiiiiiiiiiiii
      //   </header>
      // </div>
    );
  }
  
  export default Navbar;