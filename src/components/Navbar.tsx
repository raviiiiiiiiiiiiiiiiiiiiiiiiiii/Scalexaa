import { motion } from 'motion/react';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co/PzvNxqqp/IMG-20260515-073359.png" alt="Scalexa Logo" className="h-8 md:h-10 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">
              Services
            </a>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-text-dark" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              Book a Call
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-dark p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-4 shadow-lg absolute w-full">
          <a href="#services" className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-gray-50 rounded-md">
            Services
          </a>
          <button className="w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium">
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}
