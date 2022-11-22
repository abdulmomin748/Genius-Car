import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = ({item}) => {
    const {title, img, price, _id} = item;

    return (
        <>
            <div className="card bg-base-100 shadow-xl border-2 p-4">
                <figure><img src={img} className='rounded-xl' alt="Shoes" /></figure>
                <div className="card-body p-0 pt-5">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <div className="card-actions justify-end items-center">
                        <p className='text-xl text-orange-500 font-bold'>Price: ${price}</p>
                        <Link to={`/checkOut/${_id}`}><button className="btn btn-primary">checkOut</button></Link> {/*kothy jete chachhi actually, tarpor ei url ta onujae routes er path set korte hbe, */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesItem;