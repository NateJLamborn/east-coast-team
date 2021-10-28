import React, { Component } from 'react'
import axios from "axios"
import Navbar from './Navbar'

export class RestockProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productID: "",
             updateQuantity: ""
        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

      submitHandler = e => {
        e.preventDefault()
        let address = "/inventory/products/" + this.state.productID
        axios.put((address), {quantity: this.state.updateQuantity})
        window.location.href="http://localhost:3000/"
      }

    render() {
        const { productID, updateQuantity } = this.state
        return (
            <div>
                <Navbar></Navbar>
                <div className='container-fluid form'>
                    <div className='row'>
                        <div className='col text-center'>
                            <form onSubmit={this.submitHandler}>
                                <div className='form-group'>
                                    <input type="text" className='form-control-lg' name="productID" value={productID} 
                                    placeholder='Product ID' onChange={this.changeHandler}></input>
                                </div>
                                <div className='form-group'>
                                    <input type="text" className='form-control-lg' name="updateQuantity" value={updateQuantity} 
                                    placeholder='Restock Quantity' onChange={this.changeHandler}></input>
                                </div>
                                <button type='submit' className="btn btn-primary btn-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestockProduct
