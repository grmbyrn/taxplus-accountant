'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <Image
              src="/images/taxplus-accountants-logo.png"
              alt="Taxplus Accountants Logo"
              width={250}
              height={250}
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`absolute md:static top-24 left-0 md:top-0 w-full md:w-auto bg-background md:bg-transparent shadow-md md:shadow-none z-50 transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-4'
          } md:opacity-100 md:pointer-events-auto md:translate-y-0 md:flex`}
          style={{ willChange: 'transform, opacity' }}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 items-center">
            <li>
              <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
