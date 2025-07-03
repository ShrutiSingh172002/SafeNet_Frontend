import React from 'react';

const Refund = () => {
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
      style={{
        background: 'linear-gradient(135deg, #e0f3ff, #c2defc)',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 64, 128, 0.2)',
        fontFamily: "'Segoe UI', sans-serif",
        color: '#003366',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ color: '#005ea6', textShadow: '1px 1px 2px rgba(0, 94, 166, 0.2)' }}>
        Refund Policy
      </h2>

      <p>
        At SafeNet, we stand by the quality of our antivirus solutions. If you're not completely satisfied
        with your purchase, we offer a transparent and fair refund policy to ensure your peace of mind.
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Eligibility for Refund</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> You may request a refund within <strong>7 days</strong> of your original purchase date.
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> Refunds are considered in the following cases:
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> The product fails to install or activate due to a technical issue on our end.
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> Key features of the product do not function as advertised and our support team is unable to resolve the issue.
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> You were charged in error or experienced duplicate billing.
        </li>
      </ul>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Non-Refundable Situations</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Requests made after the 7-day window.',
          'Refunds for reasons not related to technical malfunction (e.g., user error, change of mind).',
          'Purchases made through unauthorized resellers or third-party platforms.',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span> {item}
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>How to Request a Refund</h3>
      <p>
        To initiate a refund, please contact our support team at <strong>support@safenet.com</strong> and include the following:
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          'Your order ID or proof of purchase.',
          'A brief explanation of the issue you encountered.',
          'Your contact email and system details (if technical issue).',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span> {item}
          </li>
        ))}
      </ul>
      <p>
        We aim to process all eligible refund requests within <strong>5–7 business days</strong> after reviewing your case.
      </p>

      <h3 style={{ color: '#005ea6', marginTop: '30px' }}>Subscription-Based Products</h3>
      <p>
        If you're subscribed to an auto-renewing plan, you may cancel anytime. Refunds for renewals will be issued only if requested
        within <strong>3 days</strong> of the renewal charge.
      </p>

      <p style={{ marginTop: '30px' }}>
        Your satisfaction is important to us. We're committed to making your experience with SafeNet secure and frustration-free.
      </p>
    </div>
  );
};

export default Refund;
