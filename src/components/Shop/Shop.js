import React, { useState } from 'react';
import './Shop.css';
import fakedata from '../../fakeData/products.json';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleClick = (props) => {
        const newcart = [...cart, props];
        setCart(newcart);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;