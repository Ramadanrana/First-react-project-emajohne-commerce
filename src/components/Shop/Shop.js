import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='shop-item'>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div>
                <h4>Order Summary</h4>
            </div>
            
        </div>
    );
};

export default Shop;