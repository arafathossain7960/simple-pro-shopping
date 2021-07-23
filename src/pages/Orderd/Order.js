import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Order = () => {
    const [ cart, setCart]=useState([]);
    const removeProduct = removeKey=>{
       const newCart = cart.filter(pd => pd.key !==removeKey);
       setCart(newCart);
       removeFromDatabaseCart(removeKey);
    }
    
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts = productKeys.map(key => {
            const products=fakeData.find(pd => pd.key === key);
            products.quantity=saveCart[key];
            return products;
        })
      setCart(cartProducts);
    }, [] )
  
    return (
        <div className='shop'>
           <div className='shop-container'>
           <h1 style={{textAlign:'center'}}>Order items : {cart.length}</h1>
           {
            cart.map(pd =>  <ReviewItems
                key={pd.key}
                removeProduct = {removeProduct}
                product={pd}></ReviewItems>)
           }
           </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Order;