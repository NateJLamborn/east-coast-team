import React from 'react'
import Navbar from './Navbar'

export const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container-fluid text-center'> 
                <h1>About Us</h1>
                <p>We sell t-shirts!</p>       
            </div>
        </div>
    )   
}
