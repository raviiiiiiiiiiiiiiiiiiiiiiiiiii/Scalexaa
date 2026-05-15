import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
            <a href="#services" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">How It Works</a>
            <a href="#results" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Results</a>
            <a href="#why-us" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">Why Us</a>
            <a href="#faq" className="text-sm font-medium text-text-dark hover:text-primary transition-colors">FAQ</a>
            <motion.a 
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Book a Call
            </motion.a>
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
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-gray-50 rounded-md">Services</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-gray-50 rounded-md">How It Works</a>
          <a href="#results" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-gray-50 rounded-md">Results</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-gray-50 rounded-md">Why Us</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-gray-50 rounded-md">FAQ</a>
          <a href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
