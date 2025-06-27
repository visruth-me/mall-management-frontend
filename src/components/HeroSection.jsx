import React from 'react';

const HeroSection = () => {


  return (
    <section className='heroStyle'>
      <div className='overlayStyle'></div>
      <div className='contentStyle'>
        <h1>Explore the Universe</h1>
        <p>Discover shops, services, events, and much more under one roof.</p>
        <button style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#ff6600',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
        }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
