// src/pages/Blog.jsx
import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Smartphone,
  Cloud,
  Brain
} from 'lucide-react';

const Blog = () => {
  return (
    <div className="page-content">

      {/* ✏️ Top Blog Content */}
      <section className="blog-intro">
        <h1>Welcome to the SafeNet Blog</h1>
        <p>
          Your digital safety starts with knowledge. At SafeNet, we do more than just protect devices — we empower users through cybersecurity education, practical tips, and timely updates on emerging threats.
        </p>
        <p>
          Whether you’re a parent securing your home network, a business owner defending your data, or a student exploring internet safety, our blog has something for you.
        </p>
      </section>

      {/* ⭐ 5 Testimonials in a Row */}
      <section className="testimonials-row">
        <h2 className="heading-blue">What Our Users Say</h2>
        <div className="testimonial-grid">
          {[
            "“SafeNet saved my laptop from a virus within minutes. Total game changer!” – Neha S.",
            "“Super light and fast antivirus. I barely notice it's running — but it works!” – Rohan P.",
            "“Best customer support I’ve ever experienced. Fast, friendly, and helpful.” – Alisha R.",
            "“Perfect for my family’s phones. Even my kids understand how to use it.” – Vikram D.",
            "“Affordable and powerful! It beat out more expensive options I tried.” – Sneha K."
          ].map((quote, index) => (
            <div key={index} className="testimonial-card">
              <p>{quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✏️ More Blog Content */}
      <section className="blog-followup">
        <h2>Latest Insights</h2>
        <p>
          From zero-day vulnerabilities to phishing scams, the digital threat landscape is constantly evolving. Our blog breaks down these complex topics into bite-sized, actionable posts.
        </p>
        <ul className="blog-list">
          <li><ShieldCheck size={20} /> <strong>Cyber Hygiene 101:</strong> Best practices for safe browsing and device usage</li>
          <li><AlertTriangle size={20} /> <strong>Threat Watch:</strong> Monthly reports on the latest malware and ransomware trends</li>
          <li><Smartphone size={20} /> <strong>Mobile Matters:</strong> How to secure your Android or iPhone in 2025</li>
          <li><Cloud size={20} /> <strong>Cloud Safety Tips:</strong> Protecting your data on cloud services</li>
          <li><Brain size={20} /> <strong>SafeNet Behind the Scenes:</strong> How we use AI to block millions of threats per day</li>
        </ul>
        <p>
          Bookmark this space and visit regularly to stay ahead of the curve. With SafeNet, security isn’t just a product — it’s a conversation.
        </p>
      </section>
    </div>
  );
};

export default Blog;
