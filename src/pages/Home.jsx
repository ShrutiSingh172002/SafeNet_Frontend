import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckCircle, Monitor, Smartphone, Apple, Building, Globe, Lock, Mail } from 'lucide-react';
import './Home.css';
import servicesImage from '../assets/protect-img.jpg'; // Replace with your actual image name

const services = [
  { id: 1, icon: <Monitor size={32} />, title: "Windows Antivirus" },
  { id: 2, icon: <Apple size={32} />, title: "Mac Antivirus" },
  { id: 3, icon: <Smartphone size={32} />, title: "Android Security" },
  { id: 4, icon: <Apple size={32} />, title: "iOS Protection" },
  { id: 5, icon: <Building size={32} />, title: "Enterprise Security" },
  { id: 6, icon: <Globe size={32} />, title: "Web Protection" },
  { id: 7, icon: <Lock size={32} />, title: "Firewall & VPN" },
  { id: 8, icon: <Mail size={32} />, title: "Email Protection" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="home-page">
      {/* ✅ Meta Tags */}
      <Helmet>
        <title>Secure Software Solutions|safenetcare.online</title>
        <meta
          name="description"
          content="Safenetcare.online is a trusted software provider offering advanced antivirus solutions and secure digital tools tailored to meet the unique needs of businesses across various industries. With a focus on performance, reliability, and innovation, Safenetcare delivers cutting-edge protection and customized cybersecurity solutions."
        />
        <meta
          name="keywords"
          content="Best Software Solutions Gurugram, Our Antivirus Software Solutions, Window Antivirus Services, Mac Antivirus Services, Android Security, iOS Protection Service, Best Enterprise Security, Web Protection, Firewall & VPN Services, Email Protection, SecureTech Solutions, Smart Secure Systems, CodeShield Experts, NextGen Software Security, Trusted App Defense, Cyber-Safe Code, SecureCode Lab, Digital Armor Solutions, SafeSoft Engineers, Fortified Software."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="heading-blue">Securing Your Digital World</h1>
        <p className="text-black">
          Safenetcare.online is a trusted software provider offering advanced antivirus solutions and secure digital tools tailored to meet the unique needs of businesses across various industries.
        </p>
        <p className="text-black">
          With a focus on performance, reliability, and innovation, SafeNet delivers cutting-edge protection and customized cybersecurity solutions designed for growth.
        </p>
      </section>

      {/* Antivirus Categories */}
      <section className="categories">
        <h2 className="heading-blue">Our Antivirus Solutions  – Smart, Secure & Always Ahead</h2>
        <p className="text-black">
          At SafeNet, our antivirus solutions are more than just protection—they are a comprehensive shield designed to proactively defend against the most advanced cyber threats. In today’s ever-evolving digital world, safeguarding your data, devices, and privacy is essential. That’s where our intelligent antivirus technology comes in, providing unmatched security with speed, precision, and reliability. Backed by 24/7 expert support, SafeNet ensures you’re never alone in your fight against cybercrime. We’re constantly updating our virus definitions and software capabilities, so you stay one step ahead of hackers and malicious software.
        </p>
        <div className="grid">
          {services.map((service) => (
            <div key={service.id} className="card" onClick={() => handleServiceClick(service.id)}>
              <div className="icon">{service.icon}</div>
              <div className="text">{service.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="protection-image-section" style={{ textAlign: 'center', margin: '2rem 0' }}>
  <img
    src={servicesImage}
    alt="Device Protection"
    style={{ maxWidth: '800px', width: '100%', height: '100%', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
  />
</section>

      {/* Why Choose SafeNet Section */}
      <section className="why-choose-content">
        <div className="why-choose-container">
          <h2 className="heading-blue center-text">Why Choose Us</h2>
          <p className="text-black center-text">
            SafeNet stands out with its user-friendly interface and lightweight design, making it easy to install, use, and manage — even for non-technical users. It runs seamlessly in the background without slowing down your system, ensuring a smooth and uninterrupted experience.
          </p>
          <ul className="why-features">
            <li>
              <span className="bullet-item">
                <CheckCircle size={20} color="#2d6cdf" />
                <strong className="black-bold">Real-time protection</strong>
              </span>
            </li>
            <li>
              <span className="bullet-item">
                <CheckCircle size={20} color="#2d6cdf" />
                <strong className="black-bold">Fast and lightweight scanning</strong>
              </span>
            </li>
             <li>
              <span className="bullet-item">
                 <CheckCircle size={20} color="#2d6cdf" />
                 <strong className="black-bold">24/7 customer support</strong>
              </span>
            </li>
            <li>
              <span className="bullet-item">
                <CheckCircle size={20} color="#2d6cdf" />
                <strong className="black-bold">Easy to use and install</strong>
              </span>
            </li>
          </ul>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="heading-blue">Ready to protect your digital life?</h2>
        <p className="text-black">
          Installation is fast and simple. In just a few clicks, you can set up your device protection and start enjoying a safer digital experience. The user-friendly interface is designed for everyone – whether you’re a tech expert or a first-time user. You can schedule automatic scans, customize your security settings, and receive instant notifications about any threats found on your device. Worried about performance? Don’t be. Our lightweight software is optimized for speed and efficiency. It runs quietly in the background without slowing down your system, allowing you to work, browse, stream, or play without interruption. It’s the ideal balance between powerful protection and smooth device performance.
        </p>
        <p className="text-black">
          We also offer extra features like secure browsing, parental controls, and identity theft prevention. With our all-in-one protection suite, you’re not just protecting your device – you’re protecting your digital lifestyle. For businesses, we offer scalable solutions that provide endpoint protection, network security, and centralized control, ensuring complete security across your entire organization. In addition, our dedicated customer support team is available to assist you with setup, troubleshooting, or any questions you may have. Our goal is to empower you with tools and support to stay ahead of cyber threats at all times. So, are you ready to protect your device? Don’t wait for a cyberattack to take action. Choose a trusted name in digital security and take the first step towards complete device protection today. Your safety is our priority – and with our protection, your device is always in good hands.
        </p>
        <a href="/contact" className="highlight-button no-border">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
