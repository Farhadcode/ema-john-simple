import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <div >
                <h2> Login</h2>
                <from onSubmit="">
                    <input type="email" placeholder=" your email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="password"  ></input>
                    <br />
                    <input type="submit" value="submit" />
                </from>
                <p>New to ema-john ? <Link to="/register"> Create Account</Link></p>
                <button className="btn-style"> Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;