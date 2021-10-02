import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product-card">
            <div>
                <h4 className=" product-name">{name}</h4>
                <p> Price : {price}</p>
                <p>Quantity : {quantity}</p>

                <button onClick={() => handleRemove(key)} className="btn-style"> Remove</button>
            </div>

        </div>
    );
};

export default ReviewItem;