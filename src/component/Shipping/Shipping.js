import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from './../../firebaseHooks/useAuth';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
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