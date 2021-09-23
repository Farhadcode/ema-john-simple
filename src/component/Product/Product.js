import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, price, img, stock, seller } = props.product;
    console.log(props.product);

    return (
        <div className="product-card">
            <div>
                <img src={img} alt="" />
            </div>
            <div>

                <h3>{name}</h3>
                <p>by :{seller}</p>
                <h5>$ {price}</h5>
                <p>only {stock} left in stock order soon</p>
            </div>

        </div>

    );
};

export default Product;



