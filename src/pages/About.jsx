import React from 'react';
import { Shield, Users, Target, Zap, Eye, Lightbulb, CheckCircle, UserCheck, TrendingUp, Award, Lock, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Eye size={32} />,
      title: "Transparency",
      description: "We believe users deserve to know how their data is protected and never exploited.",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We invest in cutting-edge research to stay ahead of cybercriminals.",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Reliability",
      description: "Our software is rigorously tested to ensure it works when you need it most.",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      icon: <UserCheck size={32} />,
      title: "User-Centric Design",
      description: "Every feature we build is designed with real users in mind.",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
    }
  ];

  const stats = [
    { number: "10M+", label: "Protected Devices", icon: <Shield size={24} /> },
    { number: "99.9%", label: "Threat Detection", icon: <Target size={24} /> },
    { number: "24/7", label: "Real-time Protection", icon: <Zap size={24} /> },
    { number: "150+", label: "Security Experts", icon: <Users size={24} /> }
  ];

  const teamHighlights = [
    {
      role: "Cybersecurity Specialists",
      count: "50+",
      description: "Former ethical hackers and security researchers",
      icon: <Lock size={24} />
    },
    {
      role: "AI/ML Engineers",
      count: "30+",
      description: "Building next-gen threat detection systems",
      icon: <TrendingUp size={24} />
    },
    {
      role: "Global Operations",
      count: "20+",
      description: "Round-the-clock monitoring and response",
      icon: <Globe size={24} />
    }
  ];

  const cardStyle = {
    background: '#e6f2ff',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const containerStyle = {
    minHeight: '100vh',
    background: '#e6f2ff',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: '#e6f2ff'
        }}></div>
        
        <div style={{ 
          position: 'relative', 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '80px 24px 64px' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              marginBottom: '32px'
            }}>
              <Shield size={40} color="white" />
            </div>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
            
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#111',
              maxWidth: '768px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Your digital safety is our top priority. In an age where cyber threats are constantly evolving, 
              we're here to provide powerful, real-time protection to keep your devices, data, and privacy secure.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ 
        position: 'relative', 
        marginTop: '-32px', 
        maxWidth: '1280px', 
        margin: '-32px auto 80px', 
        padding: '0 24px' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '24px' 
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              ...cardStyle,
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e6f2ff';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e6f2ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ color: '#60a5fa', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '4px' }}>
                {stat.number}
              </div>
              <div style={{ color: '#111', fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '48px', 
          alignItems: 'center' 
        }}>
          <div>
            <h2>Our Mission</h2>
            <p>
              We are a dedicated team of cybersecurity experts, developers, and researchers focused on building 
              innovative antivirus solutions that are fast, lightweight, and incredibly effective.
            </p>
            <p>
              Whether you're a home user or a business, our tools are designed to detect and block malware, 
              ransomware, phishing attempts, and other digital threats before they reach you.
            </p>
            <div style={{
              background: '#e6f2ff',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '12px' }}>
                Our Simple Mission
              </h3>
              <p style={{ color: '#111', fontSize: '1.125rem' }}>
                Protect what matters most — your identity, your data, and your peace of mind.
              </p>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.3))',
              borderRadius: '24px',
              filter: 'blur(40px)'
            }}></div>
            <div style={{
              position: 'relative',
              background: '#e6f2ff',
              borderRadius: '24px',
              padding: '32px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Shield size={32} color="white" />
                  </div>
                  <h4 style={{ color: '#000', fontWeight: '600', marginBottom: '8px' }}>Advanced Protection</h4>
                  <p style={{ color: '#111', fontSize: '0.875rem' }}>AI-powered threat detection</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Zap size={32} color="white" />
                  </div>
                  <h4 style={{ color: '#000', fontWeight: '600', marginBottom: '8px' }}>Lightning Fast</h4>
                  <p style={{ color: '#111', fontSize: '0.875rem' }}>Minimal system impact</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Users size={32} color="white" />
                  </div>
                  <h4 style={{ color: '#000', fontWeight: '600', marginBottom: '8px' }}>User Friendly</h4>
                  <p style={{ color: '#111', fontSize: '0.875rem' }}>Intuitive interface design</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Target size={32} color="white" />
                  </div>
                  <h4 style={{ color: '#000', fontWeight: '600', marginBottom: '8px' }}>Precision Focus</h4>
                  <p style={{ color: '#111', fontSize: '0.875rem' }}>Targeted threat elimination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Exist Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2>Why We Exist</h2>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <div style={{
              background: '#e6f2ff',
              borderRadius: '24px',
              padding: '32px',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
              <p style={{ color: '#111', fontSize: '1.125rem', lineHeight: '1.6' }}>
                SafeNet was born out of a growing concern for the rise in cybercrime targeting individuals and 
                small businesses. We believe that security tools shouldn't be complicated, expensive, or resource-heavy. 
                Our approach focuses on accessibility, ease of use, and intelligent automation that adapts as threats evolve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2>Our Values</h2>
          <p style={{ color: '#111', fontSize: '1.125rem', maxWidth: '512px', margin: '0 auto' }}>
            These principles guide everything we do, from product development to customer support.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {values.map((value, index) => (
            <div key={index} style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              const card = e.currentTarget.querySelector('.value-card');
              if (card) {
                card.style.background = '#e6f2ff';
                card.style.transform = 'translateY(-4px)';
              }
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget.querySelector('.value-card');
              if (card) {
                card.style.background = '#e6f2ff';
                card.style.transform = 'translateY(0)';
              }
            }}>
              <div className="value-card" style={{
                ...cardStyle,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: value.gradient,
                  marginBottom: '24px'
                }}>
                  <div style={{ color: 'white' }}>{value.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '16px' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#111', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2>Our Expert Team</h2>
          <p style={{ color: '#111', fontSize: '1.125rem', maxWidth: '512px', margin: '0 auto' }}>
            A diverse group of cybersecurity professionals dedicated to your digital safety.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {teamHighlights.map((team, index) => (
            <div key={index} style={{
              ...cardStyle,
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e6f2ff';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e6f2ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ color: '#60a5fa', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                {team.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                {team.count}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000', marginBottom: '12px' }}>
                {team.role}
              </h3>
              <p style={{ color: '#111' }}>{team.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Looking Ahead Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: '#e6f2ff',
            borderRadius: '24px',
            filter: 'blur(40px)'
          }}></div>
          <div style={{
            position: 'relative',
            background: '#e6f2ff',
            borderRadius: '24px',
            padding: '48px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#e6f2ff',
                marginBottom: '24px'
              }}>
                <TrendingUp size={32} color="white" />
              </div>
              <h2>Looking Ahead</h2>
            </div>
            <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
              <p style={{ color: '#111', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '32px', textAlign: 'center' }}>
                As threats become more sophisticated, so do we. We're continuously upgrading our detection engines, 
                introducing AI-based monitoring, and building tools that empower users to take control of their 
                cybersecurity with confidence.
              </p>
              <div style={{
                background: '#e6f2ff',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '12px' }}>
                  SafeNet is more than just an antivirus — it's your digital defense partner.
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Award size={32} color="#60a5fa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
