'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Image src="/images/logo-text.png" alt="Kobo Logo" width={120} height={40} />
      </div>
      <ul className="nav-links">
        <li>ABOUT US</li>
        <li>CARGO OWNERS</li>
        <li>TRANSPORTERS</li>
        <li>VAS</li>
        <li>RESOURCES</li>
      </ul>
      <div className="nav-actions">
        <select>
          <option>EN</option>
          <option>FR</option>
        </select>
        <select>
          <option>State</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
