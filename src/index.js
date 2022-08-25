import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './cart'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from 'react-use-cart';


var items=[]
var itemname=[], itemimg=[]
items[0]=0
items[1]=itemname
items[2]=itemimg
export default items

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App items={items}/>
    </BrowserRouter>
    {/* <h1 className='footer'>Made with ❤️ By Utkarsh</h1> */}
    {/* <CartProvider>
    <Cart />
    </CartProvider> */}
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

