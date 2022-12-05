import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => { 
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div >
            <div className='text-center w-1/2 mx-auto'>
            <span className='text-red-500'>Service</span>
            <h1>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
         
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-4 '>
            {
services.map(ser=><ServiceItem key={ser._id} service={ser}></ServiceItem>)
            }
            </div>
           
        </div>
    );
};

export default Services;