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

    addTitleToCart = (title) => {
    let currentCartTitles = localStorage.getItem("CartTitles");
    let whatToAdd;
        if(!currentCartTitles) {
            whatToAdd = title;
        } else {
            whatToAdd = `${currentCartTitles},${title}`;
        }
            localStorage.setItem("CartTitles", whatToAdd )
    }

    addPriceToCart = (price) => {
        let currentCartPrices = localStorage.getItem("CartPrices");
        let whatToAdd;
            if(!currentCartPrices) {
                whatToAdd = price;
            } else {
                whatToAdd = `${currentCartPrices},${price}`;
            }
                localStorage.setItem("CartPrices", whatToAdd )
        }
    
    addToCart = (title, price) => {
        this.addTitleToCart(title)
        this.addPriceToCart(price)
        alert(title + " added to cart!")
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
                        <button type='button' onClick={() => this.addToCart(product.title, product.price)} className="btn btn-primary btn-sm">Add to Cart</button>
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
