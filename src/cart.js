import './style.css';
import React, { Component } from 'react';
import { useState } from 'react';
// import logo from 'logo512.png';


const Cart = (props) => {
    var items = props.items
    var [itemCounter, setItemCounter] = useState(items[0])
    const [itemss, setItemsName] = useState(items[1])
    
    const remove = () => {
        setItemCounter(0)
        items[0] = 0;
        items[1].length = 0
        alert("Your all items are successfully removed from the cart.")
    }
    const decrementer = () => {
        setItemCounter(itemCounter= itemCounter-1)
        items[0]=itemCounter
      }
    const removeonly = (itemname) => {
        for (var i=0; i<itemss.length; i++) {
            if(itemss[i].name === itemname) {
                itemss.splice(i,1);
            }
        }
        decrementer()
        alert("Your item "+itemname+" is successfully removed from the cart.")
    }

    return (
        <div className='style'>
            <br />
            <h1>Your items in cart</h1>
            {/* {console.log(props.args)}
            <h1> {props.args} </h1> */}
            <div>
                {/* {props.items} */}
                <br />
                <ol className="listOfItems">
                    {itemss.map((item, index) => (
                        <div className="cartElement">
                            <li><h3>{item.name}</h3>
                                <br/>
                                <img className='image1' src={item.img} />
                                <br/>
                                <h3>Price :- {item.price}</h3>
                                <button onClick={() =>removeonly(item.name)}>Remove This Items</button>
                                <br /><br/>
                                <hr /><br/>
                            </li>
                        </div>
                    ))}
                </ol>
            </div>
            {items[0] == 0 ? <h3>There is No Items in the cart as of now<br />Add Items to show it here</h3> : <button onClick={remove}>Remove All Items</button>}
            <br /><br />{/* <img className='image' src="logo512.png"></img>
            <h3 className='name'>Shyam</h3>
            <h3 className='designation'>UI/UX Devloper</h3>
            <br />
            <p className='review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corruptiiiiiiiiii ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corrupti ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
            </p> */}


        </div>
    )
}


export default Cart;