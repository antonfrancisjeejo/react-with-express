import React, { useEffect, useState } from 'react';
import './customers.css';

function Customers() {
    const [customers,setCustomers] = useState([]);

    useEffect(async ()=>{
        const response = await fetch("/api/customers");
        const data = await response.json();
        setCustomers(data);
    },[]);

  return (
    <div>
        <h2>Customers</h2>
        <ul>
        {customers.map((customer)=>{
            return <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        })}
        </ul>
    </div>
  );
}

export default Customers;
