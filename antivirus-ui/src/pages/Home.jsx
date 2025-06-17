import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Monitor,
  Smartphone,
  Apple,
  Building,
  Globe,
  Lock,
  Mail
} from 'lucide-react';
import './Home.css';

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

      {/* Hero Section */}
      <section className="hero">
        <h1 className="heading-blue">Total Protection for Every Device</h1>
        <p className="text-black">Explore a wide range of antivirus solutions to secure your digital life.</p>
      </section>

      {/* Antivirus Categories */}
      <section className="categories">
        <h2 className="heading-blue">Our Antivirus Solutions</h2>
        <p className="text-black">We offer protection for all your needs.</p>
        <div className="grid">
          {services.map((service) => (
            <div key={service.id} className="card" onClick={() => handleServiceClick(service.id)}>
              <div className="icon">{service.icon}</div>
              <div className="text">{service.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2 className="heading-blue">Why Choose SafeNet?</h2>

        <div className="why-choose-content">
          {/* Left Image */}
          <div className="antivirus-images">
            <img src="/images/antivirus_image4.jpg" alt="Left Antivirus" />
            
                  
          </div>

          {/* Center Text */}
          <ul>
            <li>✔ Real-time protection</li>
            <li>✔ Fast and lightweight scanning</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Easy to use and install</li>
          </ul>

          {/* Right Image */}
          <div className="antivirus-images">
            <img src="/images/antivirus_image5.jpg" alt="Right Antivirus" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="heading-blue">Ready to protect your device?</h2>
        <p className="text-black">Get in touch with us and choose the best antivirus plan for you.</p>
        <a href="/contact" className="highlight-button no-border">Contact Us</a>
      </section>

    </div>
  );
};

export default Home;
