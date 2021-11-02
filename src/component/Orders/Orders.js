import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../firebaseHooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {

            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2> All Orders : {orders.length} </h2>
            <ul>
                {
                    orders.map(order => <li
                        kry={order._id}
                    >{order.name} <br /> {order.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Orders;