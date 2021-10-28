import React from 'react'
import Navbar from './Navbar';
//import ProductDisplay from './ProductDisplay';
import Products from './Products';

export const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
                <div className='row'>
                    <div className='col text-center'>
                        <h1>Store</h1>
                    </div>
                </div>
            </div>
            <Products uri="http://localhost:3001/inventory/products"></Products>
        </div>
    )
}

export default Home;
