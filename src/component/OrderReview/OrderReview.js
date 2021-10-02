import React from 'react';
import { useHistory } from 'react-router';

import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';

import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Shop/Shop.css'

const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push("/placeorder")
        setCart([]);
        clearTheCart()
    }
    return (



        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(cartProduct => <ReviewItem
                            key={cartProduct.key}
                            product={cartProduct}
                            handleRemove={handleRemove}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    {/* <Cart cart={cart}>
                    </Cart> */}

                    <Cart cart={cart}>

                        <button onClick={handlePlaceOrder} className="btn-style">Place Order</button>

                    </Cart>
                </div>

            </div>
        </div>

    );
};

export default OrderReview;