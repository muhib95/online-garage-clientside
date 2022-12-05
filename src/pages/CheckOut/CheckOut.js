import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const CheckOut = () => {
    const {_id,title,price,img}=useLoaderData();
    const {user}=useContext(UserContext);
    
const handleOrder=(event)=>{
    event.preventDefault();
    const form =event.target;
    const name=`${form.firstname.value} ${form.lastname.value}`;
    const phone=form.phone.value;
    const email=user?.email||'undefined';
    const address=form.address.value;
    const postCose=form.postcode.value;
    const currency=form.currency.value;
    const order={
        service: _id,
        serviceName: title,
        name:name,
        phone:phone,
        email:email,
        address:address,
        postCose:postCose,
        price:price,
        currency:currency,
        img:img
    }
    fetch('http://localhost:5000/orders', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(order),
})
  .then((response) => response.json())
  .then((data) => {
    if(data.acknowledged){
        alert('order add succesful');
        form.reset();

    }
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

}


    return (
        <div>
            <h2>{title}</h2>
            <form onSubmit={handleOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <input name='firstname' type="text" placeholder="first name" className="input input-bordered input-primary w-full max-w-xs" />
            <input name='lastname' type="text" placeholder="last name" className="input input-bordered input-primary w-full max-w-xs" />
            <input name='phone' type="number" placeholder="phone" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <select name='currency' className="select select-bordered w-full max-w-xs">

  <option selected>BDT</option>
  <option>USD</option>
</select>
<input type="text" name='postcode' placeholder="post code" className="input input-bordered input-primary w-full max-w-xs" />
                {/* <textarea name='mesage' className="textarea textarea-primary" placeholder="message"></textarea> */}
                <textarea name='address' className="textarea textarea-primary" placeholder="Address"></textarea>
                <button className="btn btn-primary block" type="submit">Submit</button>
           
            </form>
        </div>
    );
};

export default CheckOut;