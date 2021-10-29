import React, { Component } from 'react'
import axios from "axios"
import Navbar from './Navbar'

export class InventoryCheck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isAdmin: false,
             productName: "",
             productQuantity: "",
             inventoryChecked: false
        }
    }
    
    componentDidMount(){
        axios.get('/users/profile')
        .then(response => {
            console.log(response)
            this.setState({isAdmin: response.data.Admin})
        })
        .catch(error => {
            console.log(error)
        })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

      submitHandler = e => {

        e.preventDefault()
        let address = "/inventory/product/" + this.state.productID
        axios.get(address)
        .then(response => {
            console.log(response)
            this.setState({productName: response.data.title, productQuantity: response.data.quantity})
            this.setState({inventoryChecked: true})
        })
        .catch(error => {
            console.log(error)
        })
        
      }


    render() {
        const { productID, updateQuantity, isAdmin, inventoryChecked } = this.state
        if(isAdmin){
            if (!inventoryChecked){
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
                                        <button type='submit' className="btn btn-primary btn-lg">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                      <Navbar></Navbar>
                      <div className='container'>
                        <div className='row'>
                          <div className='col text-center'>
                            <h1>{this.state.productName}: {this.state.productQuantity}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
            }   
        } else {
            return (
                <div>
                  <Navbar></Navbar>
                  <div className='container'>
                    <div className='row'>
                      <div className='col text-center'>
                        <h1>You must be an admin to check product inventory.</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
        }
    }
}

export default InventoryCheck
