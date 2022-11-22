import React, { useEffect, useRef, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [data, setData] = useState([]);
    const [isAsc, setIsAsc] = useState(true) // first time ascending, seijonno true
    const searchRef = useRef();
    const [search, setSearch] = useState('')
    useEffect(() => {
        // multiple searh query(name=value&name=value)
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
        console.log(searchRef.current.value);
    }
    return (
        <div className='mb-16'>
            <div className='text-center mb-8'>
                <p className='text-xl text-orange-500 font-bold'>About Us</p>
                <h1 className="text-4xl font-bold ">Our Services Area</h1>
                <p className='max-w-3xl m-auto mb-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div>
                    <input ref={searchRef} type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <button onClick={handleSearch} className='btn btn-primary ml-4 mr-5'>Search</button>
                    <button onClick={() => setIsAsc(!isAsc)} className='btn btn-primary'>{isAsc ? 'desc' : 'asc'}</button> 
                </div>
               
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-5'>
                {
                    data.map(item => <ServicesItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Services;