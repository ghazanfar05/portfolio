
'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, hide the navbar
      setIsVisible(false);
    } else {
      // If scrolling up, show the navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed pt-6  left-0 w-full flex justify-center items-center z-20 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Navbar Container */}
      <div className="border border-x-8 border-purple-950  px-6 py-5 bg-gradient-to-r from-neutral-900 to-slate-950 -[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  bg-[radial-gradient(ellip bg-opacity-90 rounded-lg p-2 shadow-lg max-w-[90%] sm:max-w-md">
        {/* Navigation Links */}
        <ul className="flex justify-center space-x-4 sm:space-x-10 text-white text-sm sm:text-base">
          <li>
            <a
              href="#About"
              className="relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full  before:scale-x-0 hover:before:scale-x-100 hover:before:opacity-100 before:transition-transform before:duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Project"
              className="relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full  before:scale-x-0 hover:before:scale-x-100 hover:before:opacity-100 before:transition-transform before:duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Works"
              className="relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full  before:scale-x-0 hover:before:scale-x-100 hover:before:opacity-100 before:transition-transform before:duration-300"
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:scale-x-0 hover:before:scale-x-100 hover:before:opacity-100 before:transition-transform before:duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
















