import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Privacy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const listItemStyle = {
    marginBottom: '8px',
    textAlign: 'left',
    paddingLeft: '20px',
    position: 'relative',
  };

  const bulletStyle = {
    position: 'absolute',
    left: 0,
    color: '#007bff',
  };

  return (
    <div
      data-aos="fade-up"
      style={{
        background: 'linear-gradient(135deg, #e6f0fa, #cce0f5)',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 51, 102, 0.2)',
        fontFamily: "'Segoe UI', sans-serif",
        color: '#003366',
        transition: 'transform 0.3s ease',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ color: '#005ea6', textShadow: '1px 1px 2px rgba(0, 94, 166, 0.2)' }}>
        Privacy Policy
      </h2>

      <p>
        Your privacy is important to us. At SafeNet, we are committed to protecting the confidentiality and security of your personal information...
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Information We Collect</h3>
      <p>
        We may collect limited personal information such as your name, email address, and device data...
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>How We Use Your Information</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'To provide and maintain our antivirus and cybersecurity services.',
          'To notify you of updates, alerts, or product improvements.',
          'To personalize your user experience and enhance service efficiency.',
          'To troubleshoot issues and provide customer support.',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span>{item}
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Data Protection and Storage</h3>
      <p>
        Your information is stored on secure servers protected by modern encryption standards...
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Third-Party Sharing</h3>
      <p>
        SafeNet does <strong>not</strong> sell, rent, or trade your personal information...
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Your Rights</h3>
      <p>You have full control over your data. At any time, you may:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Request access to the data we store about you.',
          'Request correction or deletion of your personal information.',
          'Withdraw consent for data processing.',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span>{item}
          </li>
        ))}
      </ul>
      <p>
        Simply contact our support team at <strong>support@safenet.com</strong> to make a request.
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Policy Updates</h3>
      <p>We may occasionally update this policy to reflect changes in regulations or services...</p>

      <p style={{ marginTop: '20px' }}>
        By using our services, you agree to the terms outlined in this Privacy Policy...
      </p>
    </div>
  );
};

export default Privacy;
