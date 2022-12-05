import React from 'react';

const BannerItems = ({image,prev,id,next}) => {
    return (
        
              <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='img-gradient'>
    <img src={image} alt='' className="w-full rounded-xl" />
    </div>
   
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        
      <a href={`#slide${prev}`} className="btn btn-circle mr-1">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
    <div className='absolute flex justify-end transform -translate-y-1/2 left-8 top-1/3'>
        <h1 className='text-white text-6xl'>Affordable <br/> Price For Car <br/>Servicing</h1>
        </div>
        <div className='absolute flex justify-end transform -translate-y-1/2 w-2/5 left-8 top-1/2'>
        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-8 top-2/3'>
        <button className="text-white btn btn-error mr-3">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
        </div>
  </div> 
       
    );
};

export default BannerItems;