import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <h3>Product_Shop</h3>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>About US</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;