import React, { Component } from 'react'
import axios from 'axios'
import "../styling/Products.css"

export class Products extends Component {
    state = {
        productData: []
    };
    fetchProductData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
          this.setState(() => {
            return {
              productData: response.data
            };
          });
        });
      };

      addToCart = (id) => {
        let currentCart = localStorage.getItem("Cart");
        let whatToAdd;
          if(!currentCart) {
          whatToAdd = id;
        } else {
            whatToAdd = `${currentCart},${id}`;
        }
          localStorage.setItem("Cart", whatToAdd )
      }
    
    componentDidMount() {
        this.fetchProductData();
    }
    render() {
        console.log(this.state.productData);
        if (this.state.productData.length === 0) {
            return <div>Failed to fetch data from server</div>;
        }
        const products = this.state.productData.map(product => (
            <div key={product.id} className='container text-center'>
                <button onClick={() => {localStorage.removeItem("Cart")}}>remove storage</button>
                <div className='row'>
                    <div className='col text-center'>
                        <em>{product.title}</em>
                    </div>  
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <img src={product.imageUrl} alt="" className='display'></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <em>${product.price}</em>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <button type='button' onClick={() => this.addToCart(product.id)} className="btn btn-primary btn-sm">Add to Cart</button>
                    </div>
                </div>
            </div>
    ));
        return (
            <div>
                {products}
            </div>
        )
    }
}

export default Products
