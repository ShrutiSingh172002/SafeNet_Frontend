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
        <p className="text-black">
          Your digital world deserves complete security — whether it’s your personal laptop, family tablet, or office network. At SafeNet, we provide intelligent, responsive antivirus solutions tailored for all platforms.
        </p>
        <p className="text-black">
          With cutting-edge threat detection, easy installation, and zero lag, our tools keep you one step ahead of cyber threats.
        </p>
      </section>

      {/* Antivirus Categories */}
      <section className="categories">
        <h2 className="heading-blue">Our Antivirus Solutions</h2>
        <p className="text-black">
          Choose from a variety of robust security options built to protect your devices, data, and identity in real time.
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

      {/* Why Choose Section */}
      

  <div className="why-choose-content">
  <div className="why-left">
    <p className="text-black">
      SafeNet isn’t just an antivirus — it’s a full-spectrum shield against cyber threats. Our technology is built with a deep understanding of modern security challenges.
    </p>
  </div>

  <div className="why-right">
    <ul>
      <li>✔ Real-time protection powered by AI-based threat detection</li>
      <li>✔ Fast and lightweight scanning with minimal system impact</li>
      <li>✔ 24/7 expert customer support, always just a message away</li>
      <li>✔ Seamless installation and user-friendly dashboards</li>
      <li>✔ Regular updates to defend against new and evolving threats</li>
    </ul>
  </div>
</div>

      

      {/* CTA Section */}
      <section className="cta">
        <h2 className="heading-blue">Ready to protect your digital life?</h2>
        <p className="text-black">
          Whether you're a solo user or a growing enterprise, SafeNet has a plan built for your safety. Let’s secure your world together.
        </p>
        <a href="/contact" className="highlight-button no-border">Contact Us</a>
      </section>

    </div>
  );
};

export default Home;
