import './style.css'
import React, { Component }  from 'react';
const Contact = () => {

    const submitForm = () => {

        var result = window.confirm('Click OK to subscribe our NewLetter and become first to get notified with our latest Inventory?')
        if (result == true) {
            (alert('Thanks for Subscribing our NewsLetter.\nYou will soon be redirected to home page.'));
        }
        else {
            alert('You did not subscribe our NewLetter.\nYou will soon be redirected to home page.')
        }
    }

    return (
        <div className='style'>
            <br />
            <h1>Contact Us</h1>
            <br />
            <div className='container'>
                <img className='image' src="logo512.png"></img>
                <br /><br />
                <p className='review'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corruptiiiiiiiiii ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi a aut vitae molestias corrupti ipsum, ducimus sunt, est excepturi mollitia non aliquid hic ipsa debitis quae sint nostrum consequun
                </p>
                <br />
                <form>
                    <input
                        type="text"
                        class="text-field-contact w-input"
                        maxlength="256"
                        name="name"
                        placeholder="Name "
                        required
                    ></input> <br />
                    <input
                        type="email"
                        class="email"
                        maxlength="256"
                        placeholder="Email"
                        required
                    ></input><br />
                    <input
                        type="text"
                        class="text"
                        maxlength="256"
                        placeholder="Message"
                    ></input><br />
                    <input
                        type="submit"

                        value="Submit"
                        class="button"
                        onSubmit={submitForm}
                        onClick={submitForm}
                    ></input>
                </form>
            </div>

        </div>
    )
}


export default Contact;