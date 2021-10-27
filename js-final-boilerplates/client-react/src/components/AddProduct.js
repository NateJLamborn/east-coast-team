import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from "axios"

export class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
           title: "",
           price: "",
           imageUrl: "",
           description: "",
           quantity: ""
        }
      }
    
      changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("/inventory/addProduct", this.state)
          .then(response =>{
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        window.location.href="http://localhost:3000/"
      }
    render() {
        const { title, price, imageUrl, description, quantity } = this.state
        return (
            <div>
                <Navbar></Navbar>
                <div className='container-fluid form'>
                    <div className='row'>
                        <div className='col text-center'>
                            <form onSubmit={this.submitHandler}>
                                <div className='form-group'>
                                <input type="text" className='form-control-lg' name="title" value={title} 
                                placeholder='Item Name' onChange={this.changeHandler}></input>
                                </div>
                                <div className='form-group'>
                                <input type="text" className='form-control-lg' name="price" value={price} 
                                placeholder='Price' onChange={this.changeHandler}></input>
                                </div>
                                <div className='form-group'>
                                <input type="text" className='form-control-lg' name="imageUrl" value={imageUrl} 
                                placeholder='Image Url' onChange={this.changeHandler}></input>
                                </div>
                                <div className='form-group'>
                                <input type="text" className='form-control-lg' name="description" value={description} 
                                placeholder='Item Descirption' onChange={this.changeHandler}></input>
                                </div>
                                <div className='form-group'>
                                <input type="text" className='form-control-lg' name="quantity" value={quantity} 
                                placeholder='Quantity' onChange={this.changeHandler}></input>
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

export default AddProduct
