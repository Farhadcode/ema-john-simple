import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../firebaseHooks/useAuth';

import './Login.css'


const Login = () => {

    const { signInUsingGoogle, } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/shop";
    const handelGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);

            })
    }
    return (
        <div className="login-form">
            <div >
                <h2> Login</h2>
                <from >
                    <input type="email" placeholder=" your email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="password"  ></input>
                    <br />
                    <input type="submit" value="submit" />
                </from>
                <p>New to ema-john ? <Link to="/register"> Create Account</Link></p>
                <button onClick={handelGoogleLogin} className="btn-style"> Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;