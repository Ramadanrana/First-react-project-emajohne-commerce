import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    let newCart =[];
    const cartClick = (selectedProduct)=>{
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart = [...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart=[...rest,exists]
        }
         
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    useEffect(()=>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        const storedData = getStoredData();
        const saveData=[];
        for(const id in storedData){
            const addedProduct = products.find(product => product.id ===id);
            if(addedProduct){
                const quantity = storedData[id];
            addedProduct.quantity=quantity;
            saveData.push(addedProduct);

            }
        }
        setCart(saveData);
    },[products])
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