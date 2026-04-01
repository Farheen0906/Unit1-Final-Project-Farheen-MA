//Component to display the Contact Form 

import { useState } from 'react';
import './Contact.css';

function Contact() {

//Using useState to manage the form data  
const[formData, setFormData] = useState({name: '', email: '', phone: '', queryType: '', message: '' });

//Creating a callback function to handle the input changes

const handleChange = (event)=> {
    const{name, value} = event.target;
    setFormData((prev) => ({...prev, [name]:value}));
};

// Creating a function to handle form submission
const handleSubmit = (event)=>{
    event.preventDefault(); //To prevent the default behaviour(page reload)
    console.log("Form Submitted", formData);
    alert(`${formData.name} Thank you for reaching out`);

    //reset the form fields
    setFormData({name: '', email: '', phone: '', queryType: '', message: '' });
};
  return (
        <div className='contact-page'>
        <div className='contact-page-header'>
        <h1>Contact Us</h1>
        <p>Please leave us a message, if you have any question or want to place a custom order!</p>
       </div>
        <div className='contact-page-layout'></div>
        <div>
            <h2>Submit a Request</h2>
        
        <form onSubmit={handleSubmit}>
          
            <div>
                <label>Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Full Name' required/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='zara@gmail.com' required/>
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='+1(444)-(555)-(0000)'/>
            </div>
           <div>
                <label>Query Type:</label>
                <select id="queryType" name="queryType" value={formData.queryType} onChange={handleChange} required>
                    <option value="">Select a query type</option>
                      <option value="order">Place a custom order</option>
                        <option value="inquiry">Order Inquiry</option>
                          <option value="dietary">Dietary Questions</option>
                            <option value="other">Other</option>
                </select>
            </div>
            <div className='message-field'>
                <label>Message:</label>
                <input type="textarea" id="message" name="message"  value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here!!!!!"
                required/>
            </div>
            <button type="submit">Submit</button>
        </form>
</div>
</div>
    );
}
export default Contact;
