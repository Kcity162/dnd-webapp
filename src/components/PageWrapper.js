// src/components/PageWrapper.js
import React from 'react';

const PageWrapper = ({ children }) => {
  const pageStyle = {
    backgroundImage: "url('/images/parchment-background.png')", // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '16px',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div style={pageStyle}>
      {children}
    </div>
  );
};

export default PageWrapper;
