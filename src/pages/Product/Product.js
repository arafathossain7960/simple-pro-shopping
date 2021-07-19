import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
   
    const{img, name, price, seller, stock}=props.product;
    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-contain">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>price: $ {price}</p>
                <p>only {stock} left in stock, order-soon</p>
                <br />
                <button className="main-btn"
                onClick={()=>props.handleProductAdded(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
           
          
        </div>
    );
};

export default Product;