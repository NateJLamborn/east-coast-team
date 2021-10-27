import React from 'react'
import { About } from "./About";
import Login from './Login';
import Home from "./Home";
import SignUp from './SignUp';
import Profile from './Profile';
import AddProduct from './AddProduct';
import Cart from './Cart';

import {Route, BrowserRouter as Router} from 'react-router-dom'

export const Routes = () => {
    return (
        <div>
            <Router>
                <Route path='/' exact component={Home}></Route>
                <Route path='/About' component={About}></Route>
                <Route path='/Login' component={Login}></Route>
                <Route path='/SignUp' component={SignUp}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/AddProduct' component={AddProduct}></Route>
                <Route path='/Cart' component={Cart}></Route>
            </Router>
        </div>
    )
}

export default Routes;
