import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (
        <div className='products-container'>
            {/* {
                products.map(product => console.log(product))
            } */}
            {
                products.map(product => 
                <Product
                    product ={ product}
                    key={product.id}
                ></Product>)
            }
        </div>
    );
};

export default Products;