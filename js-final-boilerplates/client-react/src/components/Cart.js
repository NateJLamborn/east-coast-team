import React, { Component } from 'react'
//import axios from 'axios'
import Navbar from './Navbar'
import "../styling/Cart.css"

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

    listTitles() {
        const cartItems = this.state.cartTitleList
        return cartItems
            .map((item) => <div key={item} className='titles'>{item}</div>)
    }

    listPrices() {
        const cartPrices = this.state.cartPriceList
        return cartPrices
            .map((price) => <div key={price} className='prices'>${price}</div>)
    }

    getTotal() {
        var cartPrices = this.state.cartPriceList
        var total = 0
        for(let i = 0; i < cartPrices.length; i++){
            total = total + parseFloat(cartPrices[i])
        }
        return (
            <div className='total'>${total}</div>
        )
    }

    render() { 
        if (this.state.emptyCart === true){
            return (
                <div>
                    <Navbar></Navbar>
                    <div className='container'>
                        <div className='row'>
                            <div className='col text-center'>
                                <em className='empty'>No items in Cart</em>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Navbar></Navbar>
                <h3 className='header'>Cart</h3>
                <div className='cart'>
                    <div className='row'>
                        <div className='col-6'>
                            {this.listTitles()} 
                        </div>
                        <div className='col-6 text-right'>
                            {this.listPrices()}
                        </div>
                    </div>
                    <hr color="black"></hr>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='total'>
                                Total:
                            </div>
                        </div>
                        <div className='col-6 text-right'>
                            {this.getTotal()}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <button className="btn btn-primary btn-sm" onClick={() => this.checkout()}>Check Out</button>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Cart
