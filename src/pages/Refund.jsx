import React from 'react';

const Refund = () => {
  return (
    <div className="info-section">
      <h2>Refund Policy</h2>

      <p>
        At SafeNet, we stand by the quality of our antivirus solutions. If you're not completely satisfied with your purchase, we offer a transparent and fair refund policy to ensure your peace of mind.
      </p>

      <h3>Eligibility for Refund</h3>
      <ul style={{textAlign: 'left', listStylePosition: 'inside', paddingLeft: '0', margin: '10px 0'}}>
        <li style={{marginBottom: '5px'}}>You may request a refund within <strong>7 days</strong> of your original purchase date.</li>
        <li style={{marginBottom: '5px'}}>Refunds are considered in the following cases:</li>
      </ul>
      <ul style={{textAlign: 'left', listStylePosition: 'inside', paddingLeft: '20px', margin: '5px 0'}}>
        <li style={{marginBottom: '5px'}}>The product fails to install or activate due to a technical issue on our end.</li>
        <li style={{marginBottom: '5px'}}>Key features of the product do not function as advertised, and our support team is unable to resolve the issue.</li>
        <li style={{marginBottom: '5px'}}>You were charged in error or experienced duplicate billing.</li>
      </ul>

      <h3>Non-Refundable Situations</h3>
      <ul style={{textAlign: 'left', listStylePosition: 'inside', paddingLeft: '0', margin: '10px 0'}}>
        <li style={{marginBottom: '5px'}}>Requests made after the 7-day window.</li>
        <li style={{marginBottom: '5px'}}>Refunds for reasons not related to technical malfunction (e.g., user error, change of mind).</li>
        <li style={{marginBottom: '5px'}}>Purchases made through unauthorized resellers or third-party platforms.</li>
      </ul>

      <h3>How to Request a Refund</h3>
      <p>
        To initiate a refund, please contact our support team at <strong>support@safenet.com</strong>. Include the following:
      </p>
      <ul style={{textAlign: 'left', listStylePosition: 'inside', paddingLeft: '0', margin: '10px 0'}}>
        <li style={{marginBottom: '5px'}}>Your order ID or proof of purchase.</li>
        <li style={{marginBottom: '5px'}}>A brief explanation of the issue you encountered.</li>
        <li style={{marginBottom: '5px'}}>Your contact email and system details (if technical issue).</li>
      </ul>
      <p>
        We aim to process all eligible refund requests within <strong>5–7 business days</strong> after reviewing your case.
      </p>

      <h3>Subscription-Based Products</h3>
      <p>
        If you are subscribed to an auto-renewing plan, you may cancel your subscription anytime. Refunds for renewals will only be issued if requested within 3 days of the renewal charge.
      </p>

      <p>
        Thank you for choosing SafeNet. Your satisfaction is important to us, and we're here to help if something doesn't work as expected.
      </p>
    </div>
  );
};

export default Refund;