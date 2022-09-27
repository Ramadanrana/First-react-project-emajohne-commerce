import React from 'react';
import logo from '../../images/Logo.svg' ;
import './Heading.css' ;

const Heading = () => {
    return (
        <nav className='heading'>
            <img src={logo} alt="" />
            <div>
                <a href="./Home">Home</a>
                <a href="./Shop">Shop</a>
                <a href="./Inventory">Inventory</a>
                <a href=".About">About</a>
            </div>
            
            
        </nav>
    );
};

export default Heading;