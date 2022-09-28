import React from 'react';
import Product from '../Product/Product';

const Cart = ({cart}) => {
   let total = 0;
   let Shipping = 0;
    for (const Product of cart){
         total= total+ Product.price;
         Shipping = Shipping+Product.shipping;
         

    }
    let tax = parseFloat((total*0.1).toFixed(2));
    
    let grandTotal=total+Shipping+tax;
    
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>total: {cart.length} </p>
            <p>Price: {total} </p>
            <p>Shipping cost: {Shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total: {grandTotal} </p>
        </div>
    );
};

export default Cart;