import React from 'react';

const OrderRow = ({order,handleDelete,handleUpdate}) => {
   
    const {_id,img,serviceName,name,phone,status}=order;
    return (
        <tbody>
      
        <tr>
          <th>
            <label>
              <button onClick={()=>handleDelete(_id)}>X</button>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={img} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            {
                serviceName
            }
            <br/>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>{phone}</td>
          <th>
            <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">{status?status:'pending'}</button>
          </th>
        </tr>
       
       
        
        
        
       
      </tbody>
    
    );
};

export default OrderRow;