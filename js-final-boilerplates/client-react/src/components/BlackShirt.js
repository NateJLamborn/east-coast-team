import React, { Component } from 'react'
import Navbar from './Navbar';
import "../styling/BlackShirt.css"
import BlackShirtImg from "../images/Black Shirt.jpg"

export class BlackShirt extends Component {
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
            
                    <h1>This is the Black Shirt page</h1>
                    <a href='http://localhost:3000/whiteshirt'><img src={BlackShirtImg} alt="" className='shirt'></img></a>
                    <h3>For All Your Black Shirt Festivities</h3>
                    <h4>Different From Our Other Shirt!</h4>
                    <p>Reviews</p>
                        <div class='text-center'>
                            <ul>
                                <p>That Gym Guy- Very soft</p>
                                
                                
                                <p>College Dude- Helped me pass class</p>
                                
                                
                                <p>That One Dog- Much Wow</p>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg contShopping" onClick={this.continueShopping}>Continue Shopping</button>
                </div>
            </div>
        )
    }
}

export default BlackShirt
