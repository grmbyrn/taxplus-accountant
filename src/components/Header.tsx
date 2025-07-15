'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
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
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li><Link href="/" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Home</Link></li>
            <li className="relative group">
              <div className="flex items-center">
                <Link href="/how-we-help" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">
                  How We Help
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="ml-1 p-1 rounded-full hover:bg-gray-100 focus:outline-none">
                  <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <ul className={`md:absolute md:bg-white md:shadow-lg md:rounded-md md:py-2 md:w-48 ${isOpen ? 'block' : 'hidden'} md:group-hover:block`}>
                <li><Link href="/how-we-help/limited-companies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Limited Companies</Link></li>
                <li><Link href="/how-we-help/partnerships" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Partnerships</Link></li>
                <li><Link href="/how-we-help/sole-traders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sole Traders</Link></li>
                <li><Link href="/how-we-help/start-ups" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Start Ups</Link></li>
              </ul>
            </li>
            <li><Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">About</Link></li>
            <li><Link href="/services" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Services</Link></li>
            <li><Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900 font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;