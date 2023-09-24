import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart[0].price);

    let total = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const price = props.cart[i].price
        total = total + price;
    }

    let shipping = 0;
    if (total === 0) {
        shipping = 0;
    }
    else if (total > 0 && total < 50) {
        shipping = 10.99;
    }
    else if (total > 50 && total < 100) {
        shipping = 4.99;
    }
    else if (total > 100) {
        shipping = 0;
    }

    const tax = total / 10;

    const grandTotal = total + shipping + tax;


    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Items Ordered: {props.cart.length}</h2>
            <h3>Price: {(total).toFixed(2)}</h3>
            <h3>Shipping: {shipping}</h3>
            <h3>Tax: {tax.toFixed(2)}</h3>
            <h3 style={{ color: 'goldenrod' }}>Grand Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;