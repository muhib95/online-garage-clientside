import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';
import OrderRow from '../OrderRow/OrderRow';

const OrderReview = () => {
    const {user}=useContext(UserContext);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
          headers:{
            authorization:`Bearer ${localStorage.getItem('genious-token')}`
          }
        })
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user?.email])

    const handleDelete=(id)=>{
      const process=window.confirm('Are you want to delete');
      if(process){
        fetch(`http://localhost:5000/orders/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json()) // or 
        .then(data => {
          if(data.deletedCount>=0){
           
            const remain=orders.filter(or=>or._id!==id)
            setOrders(remain)
            alert('Delete order succesfully')
        
          }
        })
        

      }

     
    }
const handleUpdate=id=>{
  fetch(`http://localhost:5000/orders/${id}`, {
  method: 'PATCH', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({status:'approved'}),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    if(data.modifiedCount>=0){
      const unApproved=orders.filter(ord=>ord._id!==id);
      const approved=orders.find(ord=>ord._id===id)
      approved.status='approved';
      const newOrder=[approved,...unApproved];
      setOrders(newOrder);

    }
  })
}
    
    return (
        <div>
           <h2>{orders.length}</h2>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
   {
    orders.map(order=><OrderRow key={order._id} order={order} handleDelete={handleDelete} handleUpdate={handleUpdate}></OrderRow>)
   }
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default OrderReview;