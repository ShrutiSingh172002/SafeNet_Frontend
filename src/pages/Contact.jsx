// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import './contact.css'; // Optional: for styling if you have a CSS file

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-section">
      <h2 style={{ color: '#1E3A8A' }}>Contact Us</h2>
      
      <p>
        We’re here to help! Whether you have questions about our antivirus products, need technical assistance, or want to share feedback, feel free to get in touch with our support team.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> info@safenetcare.online</p>
        <p><strong>Phone (Toll-Free):</strong> +1 (877) 593-3790</p>
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>Business Hours</h3>
      <p>Monday – Friday: 9:00 AM – 6:00 PM (EST)</p>
      <p>Saturday – Sunday: Closed</p>

      <h3 style={{ marginTop: '1.5rem' }}>Corporate Office</h3>
      <p>SafeNet Technologies</p>
      <p>123 CyberTech Avenue, Suite 400</p>
      <p>Toronto, Ontario, Canada</p>

      <p style={{ marginTop: '1.5rem' }}>
        You can also follow us on social media for security updates, product news, and cyber safety tips.
      </p>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Your security is our priority. Reach out anytime — we’re ready to assist you.
      </p>
    </div>
  );
};

export default Contact;
