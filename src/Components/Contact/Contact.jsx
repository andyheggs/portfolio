import React, { useState } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

// Contact component for the contact section/page
const Contact = () => {
  // State to handle notification messages
  const [notification, setNotification] = useState(null);

  // Handles form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target); // Get form data

    // Append access key needed for web3forms API
    formData.append("access_key", "93d85393-01e0-47a0-87d9-e62a3a2ba2f1");

    // Convert form data to object and then JSON string for API
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // POST form data to web3forms API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    // Handle API response
    if (res.success) {
      setNotification({ type: "success", message: res.message }); // Show success notification
      event.target.reset(); // Reset form fields
    } else {
      setNotification({ type: "error", message: res.message || "Something went wrong." }); // Show error notification
    }

    // Remove notification after 5 seconds
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div id='contact' className='contact'>
      {/* Title section */}
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        {/* Left side: Contact info */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avalible for new opportunities, so feel free to reach out.</p>
          <div className="contact-details">
            <div className="contact-detail">
            <img src={mail_icon} alt="" /><p>andy@heggs.net</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" /><p>+44-7917-752-275</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" /><p>Isle of Man</p>
            </div>
          </div>
        </div>
        {/* Right side: Contact form */}
        <div className="section">
          <form onSubmit={onSubmit} className="contact-right">
            {/* Notification display */}
            {notification && (
              <div className={`notification ${notification.type}`}>
                {notification.message}
              </div>
            )}
            {/* Form fields */}
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
