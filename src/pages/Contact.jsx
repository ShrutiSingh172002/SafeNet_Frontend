// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import './Contact.css'; // Optional: for styling if you have a CSS file

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-section">
      <h2 style={{ color: '#1E3A8A' }}>Contact Us</h2>
      <p>If you have any questions or need support, feel free to reach out to us:</p>
      <p><strong>Email:</strong> info@safenetcare.online</p>
      <p><strong>Phone:</strong> +1 (877) 593-3790</p>
    </div>
  );
};

export default Contact;
