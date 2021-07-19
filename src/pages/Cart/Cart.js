import React from 'react';

const Cart = (props) => {
   const cart = props.cart;
   let total=0;
   for(let i=0; i<cart.length; i++){
       const product = cart[i];
       total = total + product.price;
   }
let shipping = 0;
if(total >0){
    shipping = 12.99;
}else if(total > 10){
    shipping = 4.99;
}else if(total >15){
    shipping = 0;
}
const grantTotal = shipping +total;
    return (
        <div>
            <h1>This is cart</h1>
            <h3>Items Ordered {cart.length}</h3>
            <p>Shipping {shipping}</p>
            <p>product price {total}</p>
            {/* <p>Va + tax {tax}</p> */}
            <p>Total price {grantTotal}</p>

        </div>
    );
};

export default Cart;