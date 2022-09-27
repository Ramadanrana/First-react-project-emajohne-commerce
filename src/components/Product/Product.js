import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            
          <div className='product-info'>
          <h4>{name}</h4>
          <p>price: ${price}</p>
            <p>Manufacturer :{seller}</p>
            <p>Rating:  {ratings}</p>
            </div>

            <button className='btn-product'>
            <p>Add to cart </p>
            </button>
            
          
         
        </div>
    );
};

export default Product;