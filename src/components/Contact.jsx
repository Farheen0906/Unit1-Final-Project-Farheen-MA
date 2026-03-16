import React from 'react'

function Contact() {
    return (

        <form>
            <h1>Contact</h1>
            <div>
                <label>Name:</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Message:</label>
                <input type="textarea" name="name" />
            </div>
            <button type="submit">Submit</button>
        </form>

    );
}
export default Contact;
