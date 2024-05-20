// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <section className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: info@myblog.com</p>
                <p>Phone: +123 456 7890</p>
            </section>
        </div>
    );
};

export default ContactUs;
