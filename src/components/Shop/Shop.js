import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const cartClick = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    useEffect(()=>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='shop-item'>
                {
                    products.map(product => <Product key={product.id} product={product} cartClick={cartClick}></Product>)
                }
            </div>
            <div>
                
                    <Cart cart={cart}></Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;