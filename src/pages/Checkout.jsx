import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary';

function Checkout() {
  const [formData, setFormData]=useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    deliveryOption: '',
    requests: ''
  });
  const handleChange = (event) => {
    const{name,value} = event.target;
    setFormData((prev) => ({...prev, [name] :value }));
  };
  const handlePlaceOrder = (event) => {
    event.preventDefault();
   console.log("order placed",formData);
  }
  return (
    <>
<div>
  <h1>Checkout</h1>

  <OrderSummary/>
  {/*Contact Form */}
  <form onSubmit={handlePlaceOrder} className="checkout-form">
    <div>
      <h3>Contact Information</h3>
      <div>
      <label>Full Name: </label>
      <input type="text" id="fullName" name="fullName" value={formData.fullName}
      onChange={handleChange} placeholder='Enter Your Full Name' required/>
</div>
<div>
      <label>Phone: </label>
      <input type="text" id="phone" name="phone" value={formData.phone}
      onChange={handleChange} placeholder='Enter Your Phone Number' required/>
</div>
<div>
      <label>Email: </label>
      <input type="text" id="email" name="email" value={formData.email}
      onChange={handleChange} placeholder='you@example.com' required/>
</div>
<div>
      <label>Date: </label>
      <input type="text" id="date" name="date" value={formData.date}
      onChange={handleChange}  required/>
</div>
<div>
      <label>Delivery Option: </label>
     <select id="deliveryOption" name="deliveryOption" value={formData.deliveryOption}
     onChange={handleChange} required >
      <option value="">Select Option</option>
       <option value="delivery">Home Delivery</option>
        <option value="pickup">Pickup</option>
         <option value="event">Event Catering</option>
     </select>
</div>
<div>
      <label>Requests (optional): </label>
      <input type="textarea" id="requests" name="requests" value={formData.requests}
      onChange={handleChange} placeholder='Enter any dietart needs, allergies or special instructions here' rows={5} />
</div>
    </div> 
    <button type="submit" className="checkout-btn">Place Order</button>
  </form>
 </div>









    <div>
      <p>Thank you!, Your order has been placed successfully!!!</p>
      <Link to="/">
      <button> Back to Home </button>
      </Link>
    </div>
    </>
  );
}
export default Checkout;