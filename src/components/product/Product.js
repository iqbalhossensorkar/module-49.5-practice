import React from 'react';
import { addFakeDb, RemoveFakeDb } from '../../utilities/fake-database';
import './Product.css'

const Product = (props) => {
    const {id, price, name} = props.product
    const AddToCart = id => {
        addFakeDb(id)
    }
    const RemoveFromCart = id => {
        RemoveFakeDb(id)
    }
    return (
        <div className='container'>
            <h1>Product Name: {name}</h1>
            <h3>Price: {price}</h3>
            <p>Id: {id}</p>
            <button onClick={()=>AddToCart(id)} className='btn'>add to cart</button>
            <button onClick={()=>RemoveFromCart(id)} className='btn' style={{marginLeft:'10px'}}>Remove</button>
        </div>
    );
};

export default Product;