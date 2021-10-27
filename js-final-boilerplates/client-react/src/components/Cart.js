import React, { Component } from 'react'
//import axios from 'axios'
import Navbar from './Navbar'

export class Cart extends Component {
    constructor(props) {
        super(props)
        let currentCart = localStorage.getItem("Cart")
        this.state = {
             emptyCart: false,
             currentCart: currentCart,
             cartList: []
        }
    }
    
    checkCartStatus = () => {
        console.log(this.state.emptyCart)
        console.log(this.state.currentCart)
        console.log(this.state.cartList)
    }

    getCart = () => {
        let currentCart = localStorage.getItem("Cart");
        if (!currentCart){
            this.setState({emptyCart: true})
            console.log("there is no cart")
            console.log(this.state.currentCart)
        } else {
            this.setState({emptyCart: false})
            console.log("there is a cart")
            console.log(this.state.currentCart)
            this.setState({cartList: this.state.currentCart.split(',')})
        }
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
            </div>
        )
    }
}

export default Cart
