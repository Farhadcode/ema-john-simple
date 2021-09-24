import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, price, img, stock, seller } = props.product;
    //console.log(props);

    return (
        <div className="product-card">
            <div>
                <img src={img} alt="" />
            </div>
            <div>

                <h3 className="product-name">{name}</h3>
                <p>by :{seller}</p>
                <h5>$ {price}</h5>
                <p>only {stock} left in stock order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-style" >Add to Card</button>
            </div>

        </div>

    );
};

export default Product;



