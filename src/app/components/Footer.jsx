// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black p-4 text-white py-8'>
      <div className='container mx-auto flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Stay Connected</h2>
        
        <div className='flex space-x-4 mb-4'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-purple-500 text-lg'>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-purple-500 text-lg'>
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-purple-500 text-lg'>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-purple-500 text-lg'>
            <FaLinkedin />
          </a>
        </div>

        <form className='flex flex-col items-center w-full max-w-md mb-6'>
          <input 
            type='email' 
            placeholder='Subscribe to our newsletter' 
            className='p-2 rounded-lg w-full border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2'
            required 
          />
          <button className='bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition duration-300 w-full'>
            Subscribe
          </button>
        </form>

        <div className='flex flex-col md:flex-row md:space-x-4 mb-4 w-full justify-center'>
          <a href="/about" className='hover:underline mb-2 md:mb-0'>About Us</a>
          <a href="/services" className='hover:underline mb-2 md:mb-0'>Services</a>
          <a href="/contact" className='hover:underline mb-2 md:mb-0'>Contact</a>
          <a href="/privacy" className='hover:underline mb-2 md:mb-0'>Privacy Policy</a>
        </div>

        <p className='text-sm text-center'>&copy; {new Date().getFullYear()} Roamio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
