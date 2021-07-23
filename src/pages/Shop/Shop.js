import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10= fakeData.slice(0, 10);
const [products, setProducts]=useState(first10);
const [cart, setCart]=useState([]);

 const handleProductAdded=(product) =>{
     const newCart= [...cart, product];
     setCart(newCart);
     const sameProduct= newCart.filter(pd =>pd.key === product.key);
     const count = sameProduct.length;
     addToDatabaseCart(product.key, count)
 }

    return (
        <div className="shop">
         <div className="shop-container">
         <ul>
              {
                  products.map(product =><Product
                     product={product} 
                     key={product.key}
                     showAddToCart={true}
                     handleProductAdded={handleProductAdded}
                     ></Product>)
              }
          </ul>
         </div>
         <div className="cart-container">

          <Cart cart={cart}></Cart>
         </div>
        </div>
    );
};

export default Shop;