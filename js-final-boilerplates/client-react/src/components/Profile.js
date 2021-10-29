import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './Navbar'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            isLoggedIn: false,
            isAdmin: false
        }
    }

    componentDidMount(){
        axios.get('/users/profile')
        .then(response => {
            console.log(response)
            this.setState({firstName: response.data.FirstName, lastName: response.data.LastName, username: response.data.Username, email: response.data.Email, isAdmin: response.data.Admin})
            this.setState({isLoggedIn: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    logOut = () => {
        axios.get('/users/logout')
        this.setState({firstName: '', lastName: '', username: '', email: '', isLoggedIn: false})
        this.redirect()
    }

    logIn = () => {
        window.location.href="http://localhost:3000/login"
    }

    addProduct() {
        window.location.href="http://localhost:3000/addProduct"
    }
    
    restockProduct() {
        window.location.href="http://localhost:3000/restockProduct"
    }

    checkProduct() {
        window.location.href="http://localhost:3000/inventoryCheck"
    }

    redirect(){
        window.location.href="http://localhost:3000/"
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const isAdmin = this.state.isAdmin
        if (isLoggedIn) {
            if (isAdmin){
                return (
                    <div>
                        <Navbar></Navbar>
                        <div className='container'>
                            <div className='row'>
                                <div className='col text-center'>
                                    <h1>Profile</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text'>
                                    <div className='container'>
                                        <div className='row center'>
                                            <div className='col'>
                                                <h4>Hello {this.state.firstName}!</h4>
                                                <p>Full Name: {this.state.firstName} {this.state.lastName}</p>
                                                <p>Username: {this.state.username}</p>
                                                <p>Email: {this.state.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text-center'>
                                    <button onClick={() => this.logOut()} type='submit' className="btn btn-primary btn-lg">Log Out</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text-center'>
                                    <button onClick={() => this.addProduct()} type='button' className="btn btn-primary btn-lg">Add a Product</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text-center'>
                                    <button onClick={() => this.restockProduct()} type='button' className="btn btn-primary btn-lg">Restock a Product</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text-center'>
                                    <button onClick={() => this.checkProduct()} type='button' className="btn btn-primary btn-lg">Check Product Inventory</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <Navbar></Navbar>
                        <div className='container'>
                            <div className='row'>
                                <div className='col text-center'>
                                    <h1>Profile</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text'>
                                    <div className='container'>
                                        <div className='row center'>
                                            <div className='col'>
                                                <h4>Hello {this.state.firstName}!</h4>
                                                <p>Full Name: {this.state.firstName} {this.state.lastName}</p>
                                                <p>Username: {this.state.username}</p>
                                                <p>Email: {this.state.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col text-center'>
                                    <button onClick={() => this.logOut()} type='submit' className="btn btn-primary btn-lg">Log Out</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    <Navbar></Navbar>
                    <div className='container'>
                        <div className='row'>
                            <div className='col text-center'>
                                <h1>Login to access profile</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-center'>
                                <button onClick={this.logIn} type='submit' className="btn btn-primary btn-lg">Return to login</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Profile
