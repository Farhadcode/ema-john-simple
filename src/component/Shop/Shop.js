import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <div className="shop-container">
                <div className="product-container">

                    {
                        products.map(pd => <Product
                            key={pd.key}
                            product={pd}>

                        </Product>)
                    }

                </div>
                <div className="cart-container">
                    <h3>Order Summary</h3>
                    <h5>Items Oradered</h5>
                </div>

            </div>
            {/* <div>
                {
                    products.map(pd => <Product
                        key={pd.key}
                        product={pd}>

                    </Product>)
                }
            </div> */}
        </div>
    );
};

export default Shop;