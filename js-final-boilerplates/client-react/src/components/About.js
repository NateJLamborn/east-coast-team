import React from 'react'
import Navbar from './Navbar'

export const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container-fluid text-center'> 
                <h1>About Us</h1>
                <h2>We sell t-shirts! In not only one color but TWO!!!</h2>
                <h3>Not sure what to wear?</h3>
                <h4>Founded by people who simplify dressing up</h4>  
            </div>
        </div>
    )   
}
