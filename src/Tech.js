import './style.css'
import React, { Component } from 'react';
import { useState } from 'react';

const Tech = (props) => {
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

    const Tech = [{ name: "Computer", img: "/images/computer.jpeg", price: "Rs 125000" },
    { name: "Monitor", img: "/images/monitor.jpeg", price: "Rs 75000" }]
    return (
        <div className='style'>
            <h1>Technical Inventory</h1>
            <img className="image" src="logo512.png" ></img>
            <h3 className='name'>Kartik</h3>
            <h3 className='designation'>My friend</h3>
            <br />
            <p className='review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corruptiiiiiiiiii ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corrupti ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
            </p><br /><br />
            <h1>Items in Tech Inventory</h1><br/>
            <ol className="listOfItems">
                <hr style={{ width: "50%", margin: "auto" }}></hr><br />
                {Tech.map((item, index) => (
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

            {/* <img className='image1' src={Tech[0].img} ></img>
            <img className='image1' src={Tech[1].img} ></img>
            <h2 className='button1'>{Tech[0].name} </h2>
            <h2 className='button2'>{Tech[1].name} </h2>
            <button className='button1' 
            onClick={ () => {AddItems(Tech[0])}}
            >Add To Cart</button>
            <button className='button2' onClick={() => {AddItems(Tech[0])}}>Add To Cart</button>
             */}
            <br />


        </div>
    )
}

export default Tech;