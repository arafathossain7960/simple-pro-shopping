import React from 'react';
import './Reviewitems.css';

const ReviewItems = (props) => {
    const {name, quantity, key, price } =props.product;
    return (
        // using 'shop class name' 
        <div className="reviewStyles">
         
                    <h1>{name}</h1>
                <p><small>${price}</small></p>
            <p>Quantity : {quantity}</p>
            <br />
            <button
            onClick={()=>props.removeProduct(key)} 
            className="main-btn">Remove item</button>
           
          
        </div>
    );
};

export default ReviewItems;