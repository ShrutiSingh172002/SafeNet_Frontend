import React from 'react';

const Privacy = () => {
  return (
    <div className="info-section">
      <h2>Privacy Policy</h2>
      <p>
        Your privacy is important to us. At SafeNet, we are committed to protecting the confidentiality and security of your personal information. We collect only the data that is necessary to deliver and improve our services, and we handle it with the utmost care.
      </p>

      <h3>Information We Collect</h3>
      <p>
        We may collect limited personal information such as your name, email address, and device data when you sign up for our services, request support, or interact with our website. All data is collected with transparency and consent.
      </p>

      <h3>How We Use Your Information</h3>
      <ul style={{textAlign: 'left', listStylePosition: 'inside', paddingLeft: '0', margin: '10px 0'}}>
        <li style={{marginBottom: '5px'}}>To provide and maintain our antivirus and cybersecurity services.</li>
        <li style={{marginBottom: '5px'}}>To notify you of updates, alerts, or product improvements.</li>
        <li style={{marginBottom: '5px'}}>To personalize your user experience and enhance service efficiency.</li>
        <li style={{marginBottom: '5px'}}>To troubleshoot issues and provide customer support.</li>
      </ul>

      <h3>Data Protection and Storage</h3>
      <p>
        Your information is stored on secure servers protected by modern encryption standards. We implement strict access controls and continuously monitor for vulnerabilities to ensure your data remains safe.
      </p>

      <h3>Third-Party Sharing</h3>
      <p>
        SafeNet does <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share anonymized data with trusted partners only when necessary to deliver core functionality, and never without a valid legal basis.
      </p>

      <h3>Your Rights</h3>
      <p>
        You have full control over your data. At any time, you may:
      </p>
      <ul style={{textAlign: 'left', listStylePosition: 'inside', paddingLeft: '0', margin: '10px 0'}}>
        <li style={{marginBottom: '5px'}}>Request access to the data we store about you.</li>
        <li style={{marginBottom: '5px'}}>Request correction or deletion of your personal information.</li>
        <li style={{marginBottom: '5px'}}>Withdraw consent for data processing.</li>
      </ul>
      <p>
        Simply contact our support team at <strong>support@safenet.com</strong> to make a request.
      </p>

      <h3>Policy Updates</h3>
      <p>
        We may occasionally update this policy to reflect changes in regulations or services. When we do, we'll notify users via email or a banner notification on our website.
      </p>

      <p>
        By using our services, you agree to the terms outlined in this Privacy Policy. If you have any questions, feel free to reach out. Your trust means everything to us.
      </p>
    </div>
  );
};

export default Privacy;