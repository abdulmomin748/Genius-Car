import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {title, price, _id} = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fName.value} ${form.lName.value}`;
        const email = user?.email || 'unregstered';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(phone.length);
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        if(phone.length <= 10){
            return alert('Phone number should be 11 cheracter or longer');
            
        }else{
            fetch('https://genius-car-server-five-ebon.vercel.app/orders',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('genius-token')}` // POST https://genius-car-server-five-ebon.vercel.app/orders 401 (Unauthorized)
                },
                body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('order Placed successfully')
                    form.reset();
                }
            })
            .catch((err) => console.error(err))
        }
    }
    
    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5 mt-8'>Order For: {title}</h1>
            <form onSubmit={handlePlaceOrder} action="">
                <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
                    <input name='fName' type="text" placeholder="First Name" className="input input-bordered  w-full" required/>
                    <input name='lName' type="text" placeholder="Last Name" className="input input-bordered  w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email}/>
                </div>
                <textarea name='message' className="mt-5 textarea textarea-bordered h-24 w-full" placeholder="Bio" required></textarea>
                <input className='btn w-full mt-4 mb-8' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default CheckOut;