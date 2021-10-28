import React, { Component } from 'react'
import Navbar from './Navbar'
import "../styling/ThankYou.css"

export class ThankYou extends Component {
    returnToHome = () => {
        window.location.href="http://localhost:3000/"
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1 className='header'>Thank you for your Order!</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                            <div>We hope you shop with us again!</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <button type='submit' className="btn btn-primary btn-lg" onClick={() => this.returnToHome()}>Return to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThankYou
