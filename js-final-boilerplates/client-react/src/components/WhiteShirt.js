import React, { Component } from 'react'
import Navbar from './Navbar';
import "../styling/BlackShirt.css"
import WhiteShirtImg from "../images/White Shirt.jpg"

export class WhiteShirt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    continueShopping = () => {
        window.location.href="http://localhost:3000/"
    }

    render() {
        return (
            <div>
            <Navbar></Navbar>
                <div className='container-fluid text-center'>
            
                    <h1>This is the White Shirt page</h1>
                    <a href='http://localhost:3000/whiteshirt'><img src={WhiteShirtImg} alt="" className='shirt'></img></a>
                    <h3>For All Your White Shirt Festivities</h3>
                    <h4>Different From Our Other Shirt!</h4>
                    <p>Reviews</p>
                        <div class='text-center'>
                            <ul>
                                <p>That other Gym Guy- wow a new color</p>
                                
                                
                                <p>Other College Dude- goes with anything</p>
                                
                                
                                <p>That Other Dog- Other Wow</p>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg contShopping" onClick={this.continueShopping}>Continue Shopping</button>
                </div>
            </div>
        )
    }
}

export default WhiteShirt
