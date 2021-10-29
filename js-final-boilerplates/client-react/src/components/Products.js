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
    
    changeQuantity = (id, quantity) => {
        let address = "/inventory/products/" + id
        axios.put((address), {quantity: (parseInt(quantity) - 1)})
        this.reloadPage()
    }
        
    addToCart = (title, price, id, quantity) => {
        if(quantity !== 0){
            this.addTitleToCart(title)
            this.addPriceToCart(price)
            this.changeQuantity(id, quantity)
        }
        else{
            alert("Item out of stock!")
        }
    }
       
    reloadPage() {
        window.location.href="http://localhost:3000/addtocart"
    }

    componentDidMount() {
        this.fetchProductData();
    }
    render() {
        console.log(this.state.productData);
        if (this.state.productData.length === 0) {
            return <div className='container text-center'>
                No products, currently in stock.
                </div>;
        }
        const products = this.state.productData.map(product => 
            (<div key={product.id} className='col products text-center'>
                <div className='container item'>
                    <div className='row'>
                        <div className='col text-center'>
                            <em className='title'>{product.title}</em>
                        </div>  
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <img src={product.imageUrl} alt="" className='display'></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <em className='price'>${product.price}</em>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <button type='button' onClick={() => this.addToCart(product.title, product.price, product.id, product.quantity)} className="btn btn-primary btn-sm">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
    ));
        return (
            <div className='container'>
                <div className='row itemDisplay'>
                    {products}
                </div>
            </div>
        )
    }
}

export default Products
