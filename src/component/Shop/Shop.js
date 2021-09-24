import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //console.log('just call');
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                //console.log('call received');
            })
    }, [])


    useEffect(() => {
        //console.log('LS call');

        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                storedCart.push(addedProduct)
            }
            setCart(storedCart);
        }

        //console.log(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //console.log(product.key);

        // save to local storag
        addToDb(product.key)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            product={pd}
                            handleAddToCart={handleAddToCart}>
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;