import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from './../../firebaseHooks/useAuth';
import { clearTheCart, getStoredCard } from '../../utilities/NewFakedb';
const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();
    const onSubmit = data => {
        const savedCard = getStoredCard();
        data.order = savedCard;
        // console.log(data);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert("Order processed Successfully");
                    clearTheCart();
                    reset();

                }
            })
    };
    return (
        <div className="form">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} placeholder="name" />
                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="your email" />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue="" {...register("phone", { required: true })} placeholder="your phon number" />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue="" {...register(" your address")} placeholder="address" />
                <input defaultValue="" {...register("city")} placeholder="your city" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;