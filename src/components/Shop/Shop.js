import React from 'react';
import './Shop.css';
import fakedata from '../../fakeData/products.JSON';

const Shop = () => {

    return (
        <div className='header'>
            <h1>This is Shop</h1>
            {
                fakedata.map((data) => <h2>Hello</h2>)
            }
        </div>
    );
};

export default Shop;