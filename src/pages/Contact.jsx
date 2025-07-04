import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = {
    background: '#f0faff',
    border: '1px solid #b3e5fc',
    borderRadius: '8px',
    padding: '20px',
    color: '#003366',
    boxShadow: '0 4px 12px rgba(0, 102, 204, 0.1)',
    transition: 'transform 0.3s ease',
    flex: '1 1 250px',
    margin: '10px',
  };

  const sectionHeading = {
    color: '#ffffff',
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '20px',
    textAlign: 'center',
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #8fd3f4, #1e90ff)',
        color: '#ffffff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={sectionHeading}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#e6f7ff' }}>
          We're here to help! Whether you have questions about our antivirus products, need technical assistance, or want to share feedback, feel free to get in touch with our support team.
        </p>
      </div>

      {/* Grid Section */}
      <div style={{ padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Contact Info Cards */}
          {[
            {
              title: 'Email Support',
              detail: 'info@safenetcare.online',
              note: 'Available 24/7'
            },
            {
              title: 'Phone Support',
              detail: '+1 (877) 593-3790',
              note: 'Toll-Free'
            },
            {
              title: 'Business Hours',
              detail: 'Mon – Fri: 9:00 AM – 6:00 PM (EST)',
              note: 'Sat – Sun: Closed'
            }

            
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <h3 style={{ color: '#0077cc' }}>{item.title}</h3>
              <p><strong>{item.detail}</strong></p>
              <span style={{ color: '#555' }}>{item.note}</span>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div style={{
          background: '#e6f4fc',
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '600px',
          margin: '40px auto',
          boxShadow: '0 4px 12px rgba(0, 102, 204, 0.1)'
        }}>
          <h2 style={{ color: '#005ea6', marginBottom: '20px', textAlign: 'center' }}>Send us a Message</h2>
          <form>
            {[
              { label: 'Full Name', type: 'text', name: 'name' },
              { label: 'Email Address', type: 'email', name: 'email' }
            ].map(({ label, type, name }) => (
              <div key={name} style={{ marginBottom: '15px' }}>
                <label htmlFor={name} style={{ display: 'block', marginBottom: '5px', color: '#003366' }}>{label}</label>
                <input type={type} id={name} name={name} required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #aadfff'
                  }} />
              </div>
            ))}

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', color: '#003366' }}>Subject</label>
              <select id="subject" name="subject" required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #aadfff'
                }}>
                <option value="">Select a topic</option>
                <option value="technical-support">Technical Support</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="billing">Billing Questions</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: '#003366' }}>Message</label>
              <textarea id="message" name="message" rows="5" required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #aadfff'
                }}></textarea>
            </div>

            <button type="submit"
              style={{
                backgroundColor: '#00aaff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontSize: '1rem',
                width: '100%'
              }}>
              Send Message
            </button>
          </form>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
          color: '#ffffff',
          padding: '40px 20px',
          textAlign: 'center',
          borderRadius: '10px',
          marginTop: '40px'
        }}>
          <h2 style={{ fontSize: '2rem' }}>Your Security is Our Priority</h2>
          <p>Reach out anytime — we're ready to assist you with all your cybersecurity needs.</p>
          <div style={{ marginTop: '20px' }}>
            <a href="tel:+18775933790" style={{
              backgroundColor: '#ffffff',
              color: '#0077cc',
              padding: '10px 20px',
              marginRight: '10px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>Call Now</a>
            <a href="mailto:info@safenetcare.online" style={{
              backgroundColor: '#ffffff',
              color: '#0077cc',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>Send Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
