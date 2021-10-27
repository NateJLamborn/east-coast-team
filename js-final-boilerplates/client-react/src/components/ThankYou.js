import React, { Component } from 'react'
import Navbar from './Navbar'

export class ThankYou extends Component {
    returnToHome = () => {
        window.location.href="http://localhost:3000/"
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>Thank you for your Order!</h1>
                <button type='submit' className="btn btn-primary btn-lg" onClick={() => this.returnToHome()}>Return to Home</button>
            </div>
        )
    }
}

export default ThankYou
