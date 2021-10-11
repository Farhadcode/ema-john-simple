import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2> Create Account</h2>
                <from onSubmit="">
                    <input type="name" name="name" id="" placeholder=" your name" />
                    <br />
                    <input type="email" placeholder=" your email" />
                    <br />
                    <input type="password" name="password" id="" placeholder=" your password"  ></input>
                    <br />
                    <input type="password" name="" id="password" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </from>
                <p> Already have an account? <Link to="/login">Login </Link> </p>

                <div> --------------- or--------------</div>
                <button className="btn-style" > Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;