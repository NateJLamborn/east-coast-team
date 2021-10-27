import React, { Component } from 'react'
//import axios from 'axios'
import Navbar from './Navbar'

export class Cart extends Component {
    constructor(props) {
        super(props)
        let currentCartTitle = localStorage.getItem("CartTitles")
        let currentCartPrices = localStorage.getItem("CartPrices")
        this.state = {
             emptyCart: false,
             currentCartTitle: currentCartTitle,
             currentCartPrices: currentCartPrices,
             cartTitleList: [],
             cartPriceList: []
        }
    }
    
    checkCartStatus = () => {
        console.log(this.state.emptyCart)
        console.log(this.state.currentCartTitle)
        console.log(this.state.currentCartPrices)
        console.log(this.state.cartTitleList)
        console.log(this.state.cartPriceList)
    }

    getCart = () => {
        let currentCartTitle = localStorage.getItem("CartTitles");
        let currentCartPrices = localStorage.getItem("CartPrices")
        if (!currentCartTitle && !currentCartPrices){
            this.setState({emptyCart: true})
            console.log("there is no cart")
        } else {
            this.setState({emptyCart: false})
            console.log("there is a cart")
            this.setState({cartTitleList: this.state.currentCartTitle.split(',')})
            this.setState({cartPriceList: this.state.currentCartPrices.split(',')})
        }
    }

    checkout = () => {
        localStorage.removeItem("CartTitles")
        localStorage.removeItem("CartPrices")
        window.location.href="http://localhost:3000/ThankYou"
    }

    componentDidMount(){
        this.getCart();
    }

    render() {
        if (this.state.emptyCart === true){
            return (
                <div>
                    <Navbar></Navbar>
                    <em>No items in Cart</em>
                </div>
            )
        }
        return (
            <div>
                <Navbar></Navbar>
                <button type='button' onClick={() => this.checkCartStatus()}>Test</button>
                <button onClick={() => this.checkout()}>Check Out</button>
            </div>
        )
    }
}

export default Cart