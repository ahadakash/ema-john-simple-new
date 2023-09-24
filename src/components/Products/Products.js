import React, { useState } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    // const [product, setProduct] = useState();
    // const products = props.product.slice(0, 10);
    // console.log(props.product);
    const { name, img, price, stock, seller } = props.product;

    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="div">
                <h3 style={{ color: 'blue', fontWeight: '400' }}>{name}</h3>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className='cart-button' onClick={() => props.handleClick(props.product)}><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>

        </div >
    );
};

export default Products;