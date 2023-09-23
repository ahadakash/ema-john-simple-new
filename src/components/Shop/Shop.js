import React from 'react';
import './Shop.css';
import fakedata from '../../fakeData/products.json';
import Products from '../Products/Products';

const Shop = () => {
    const handleClick = () => {
        console.log("Clicked");
    }
    return (
        <div className='shop-container'>
            <div className="product">
                {
                    fakedata.map((data) =>
                        <div>
                            <Products product={data} handleClick={handleClick}></Products>
                        </div>)
                }
            </div>
            <div className="cart">
                <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;