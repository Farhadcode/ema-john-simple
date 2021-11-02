import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../firebaseHooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
                {user.email && <Link to="/orders">Orders</Link>}

                {user.email &&

                    <span className="displayName"> Hello {user.displayName}</span>
                }
                {user.email ? <button onClick={logOut}>Log Out </button> :
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;