import React from 'react';
import './bannerIItem.css'
const BannerCarosoulItem = ({slideItem}) => {
    const {image, id, prev, next} = slideItem;
    return (
        <>
           <div id={`slide${id}`} className="carousel-item relative w-full py-10">
                    <div className='carosoul-img relative'>
                        <img src={image} alt='img' className="w-full rounded-xl" />
                    </div>
                    <div className="absolute justify-end  text-white transform -translate-y-1/2 top-1/2 left-24  bottom-5">
                        <h1 className='font-bold text-white text-6xl'>
                            Affordable <br />
                            price For Car <br /> 
                            Servicing
                        </h1>
                        <p className='text-xl w-3/4 mt-5 mb-5'>
                            here are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div>
                            <button className="mr-5 btn btn-warning">Discover More</button>
                            <button className='btn btn-outline border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute justify-end flex transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href={`#slide${prev}`} className="btn mr-5 btn-circle">❮</a> 
                        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                    </div>
                </div>  
        </>
    );
};

export default BannerCarosoulItem;