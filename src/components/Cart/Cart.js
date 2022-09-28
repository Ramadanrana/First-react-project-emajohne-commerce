import React from 'react';


const Cart = ({cart}) => {
   let total = 0;
   let Shipping = 0;
   let quantity=0;
    for (const product of cart){
        quantity= quantity+product.quantity;
         total= total+ product.price*product.quantity;
         Shipping = Shipping+product.shipping;
         

    }
    let tax = parseFloat((total*0.1).toFixed(2));
    
    let grandTotal=total+Shipping+tax;
    
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>total: {quantity} </p>
            <p>Price: {total} </p>
            <p>Shipping cost: {Shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total: {grandTotal} </p>
        </div>
    );
};

export default Cart;