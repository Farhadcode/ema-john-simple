import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCard } from '../../utilities/NewFakedb';

import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';

import Product from '../Product/Product';
import './Shop.css'




const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    const size = 10;
    useEffect(() => {
        //console.log('just call');
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / 10);
                setPageCount(pageNumber);
                //console.log('call received');
            })
    }, [page])


    useEffect(() => {
        //console.log('LS call');

        if (products.length) {
            const savedCart = getStoredCard();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    //console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

        //console.log(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // const newCart = [...cart, product];
        setCart(newCart);
        //console.log(product.key);

        // save to local storag
        addToDb(product.key)
    }

    const handelSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);

    }
    return (
        <>
            <div className="search-container">
                <input
                    onChange={handelSearch}
                    type="text"
                    placeholder="Search Product" />

            </div>
            <div>
                <div className="shop-container">
                    <div className="product-container">
                        {
                            // products.map(pd => <Product
                            displayProducts.map(pd => <Product
                                key={pd.key}
                                product={pd}
                                handleAddToCart={handleAddToCart}>
                            </Product>)
                        }
                        <div className="pagination">
                            {
                                [...Array(pageCount).keys()]
                                    .map(number => <button
                                        className={number === page ? 'selected' : ''}
                                        key={number}
                                        onClick={() => setPage(number)}
                                    >{number + 1}</button>)
                            }
                        </div>

                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <Link to="/review">
                                <button className="btn-style"> Review Product</button>
                            </Link>
                        </Cart>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Shop;