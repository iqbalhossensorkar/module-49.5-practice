import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Product from '../product/Product';
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const add = getTotal(products)
    
    return (
        <div>
            <p style={{textAlign: 'center'}}>Total: {add}</p>
            <div className='products-container'>
            {
                products.map(product => 
                <Product
                    product ={ product}
                    key={product.id}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default Products;