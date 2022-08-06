import './style.css';
import { useCart } from "react-use-cart";
import { useState } from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './cart';

const Music = (props) => {
    var items = props.items;
    var [number, setNumber] = useState(items[0]);
    const increase = () => {
        setNumber(number = number + 1)
        return number
    }
    const AddItems = (item) => {
        const count = increase()
        items[1][items[1].length] = (item);
        items[0] = count;
        alert("The item "+item.name+" is successfully added to the cart.")
    }

    const Music = [{ name: "Guitar", img: "/images/guitar.jpg", price: "Rs 10000" },
    { name: "Piano", img: "/images/piano.jpeg", price: "Rs 15000" }]

    return (
        <div className='style'>
            <h1>Music Inventory</h1>
            <img className='image' src="logo512.png"></img>
            <h3 className='name'>Ram</h3>
            <h3 className='designation'>Web Developer</h3>
            <br />
            <p className='review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corruptiiiiiiiiii ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corrupti ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun

            </p><br /><br />
            <h1>Items in Music Inventory</h1><br/>
            <ol className="listOfItems">
                <hr style={{ width: "50%", margin: "auto" }}></hr><br />
                {Music.map((item, index) => (
                    <div className="cartElement">
                        <li><h3>{item.name}</h3>
                            <br />
                            <img className='image1' src={item.img} />
                            <br /><br />
                            <h3>Price :- {item.price}</h3>
                            <br />
                            <button onClick={() => { AddItems(item) }}>Add To Cart</button>
                            <br/><br/>
                            <hr style={{ width: "50%", margin: "auto" }}></hr><br />
                        </li>
                    </div>
                ))}
            </ol>

            {/* <img className='image1' src={Music[0].img} ></img>
            <img className='image1' src={Music[1].img} ></img>
            <div className='row'><h2 className='button1'>{Music[0].name} </h2>
            <h2 className='button2'>{Music[1].name} </h2></div>
            <button className='button1' 
            onClick={ () => {AddItems(Music[0])}}
            >Add To Cart</button>
            <button className='button2' onClick={() => {AddItems(Music[1])}}>Add To Cart</button> */}

            <br />
        </div>

    )
}


export default Music;