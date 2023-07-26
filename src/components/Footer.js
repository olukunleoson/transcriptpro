// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3 fixed-bottom">
      {/* Add your footer content here */}
      <p>© {new Date().getFullYear()} TranscriptPro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
