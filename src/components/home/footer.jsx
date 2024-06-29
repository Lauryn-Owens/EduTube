//import react
import React from 'react';
//import link jsx
import { Link } from 'react-router-dom';

function Footer({ topOfPage }) {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='text-black text-center my-8'>
      {/* List of links */}
      <ul className='flex flex-col gap-4'>
        <li className='hover:underline' onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          {/* Fake Link to the top of the page */}
          Back to the Top
        </li>
        {/* Link components for navigation */}
        <li className='hover:underline'>
          <Link to="/videos">Videos</Link>
        </li>
        <li className='hover:underline'>
          <Link to="/postVideo">Post Video</Link>
        </li>
      </ul>
      {/* Copyright */}
      <p className='my-4'>
        {/* Copyright notice */}
        &#169; Copyright 2024 EduTube
      </p>
    </div>
  );
}

export default Footer;
