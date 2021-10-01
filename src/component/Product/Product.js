import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const { name, price, img, stock, seller, star } = props.product;
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
                <Rating

                    initialRating={star}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star icon-star-color"
                    readonly></Rating>
                <p>only {stock} left in stock order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-style" ><FontAwesomeIcon icon={faShoppingCart} />Add To Card</button>
            </div>

        </div>

    );
};

export default Product;



