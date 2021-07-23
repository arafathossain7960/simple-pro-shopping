import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
   const cart = props.cart;
   let total=0;
   for(let i=0; i<cart.length; i++){
       const product = cart[i];
       total = total + product.price * product.quantity;
   }
let shipping = 0;
if(total>=0){
    shipping = 12.99;
}else if(total >= 10){
    shipping = 4.99;
}else if(total >=15){
    shipping = 0;
}
const vat = total/10;

const grantTotal = shipping +total + vat;
    return (
        <div>
            <h1>This is cart</h1>
            <h3>Items Ordered {cart.length}</h3>
            <p>Shipping {shipping}</p>
            <p>product price {total}</p>
            <p>Va/tax {vat}</p>
            <p>Total price {grantTotal}</p>
            <Link to="order">
            <button className="main-btn">Order Review</button>
            </Link>

        </div>
    );
};

export default Cart;