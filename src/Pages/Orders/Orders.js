import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Order = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]); // state jeikhne event handler hbe seikhane
    
    // pathacchhi
    useEffect(() => { // akhne ki get kortechi? method jodi na bole dei, tahole seta hochhe get method
        fetch(`https://genius-car-server-five-ebon.vercel.app/orders?email=${user?.email}`,{ // kintu eikahne theke to amra data pathachhi??? query para
                
    // 7 ei api jokhon call hbe tokhn, backend ei bearer soho token er inf pathy dibe headers, pore req er mddhe headers.auth e
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}` // backend token er inf patacchhi,age nichi,tarpor token take pathay dichi
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403 ){
              return logOut()
            }
            console.log(res);
            return res.json()
        })
        .then(data => {
            console.log('recived', data);
            setOrders(data)
        })
    }, [user?.email])
    console.log(orders,user);   
    
    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cancel the order');
        if(procced){
             fetch(`https://genius-car-server-five-ebon.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                alert('user Deleted Succesfully')
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = orders.filter(ordr => ordr._id !== id); // jeita id te click kortechi seita bade bakigulo array akare return korbe , tokhn bakigulo abar state set kortechi
                    setOrders(remaining);   
                }
            })
            .catch(err => console.log(err))
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://genius-car-server-five-ebon.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(order => order._id !== id); // current id ta bade baki sob[filter->rtn Array]
                const approving = orders.find(order => order._id === id); // current id ta pabo [find->only return value]
                approving.status = 'Approved';
                const newOrders = [approving, ...remaining]
                setOrders(newOrders);
            }
        })
        
    }

    return (
        <div>
            <h1 className='text-3xl'>Orders length: {orders.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow key={order._id} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate} order={order} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Order;