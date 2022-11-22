import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <>
            <div className="my-24   ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} className="w-3/5 h-full  rounded-lg shadow-2xl" alt='img'/>
                        <img src={parts} className="max-w-sm rounded-lg w-2/5 border-8 border-white right-32 shadow-2xl absolute top-2/4" alt='img'/>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl text-orange-500 font-bold'>About Us</p>
                        <h1 className="text-4xl font-bold">We Are Qualified <br />& of experiece <br /> in this field</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-orange-500 border-0 rounded">Get More Info</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;