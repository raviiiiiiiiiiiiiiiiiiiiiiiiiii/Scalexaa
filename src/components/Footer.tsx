import { motion } from 'motion/react';
import { Rocket, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <img src="https://i.ibb.co/PzvNxqqp/IMG-20260515-073359.png" alt="Scalexa Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-50" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Let's Grow Your Brand</span> <span className="text-gray-400">Together</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto px-4">
            Book a free 3-day ad trial and witness real results before committing.
          </p>
          
          <button className="bg-accent hover:bg-[#86c02a] text-[#0F172A] px-10 py-4 rounded-full text-lg font-bold transition-colors inline-block shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] mb-8">
            Book a Free Call
          </button>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm font-medium text-gray-300">
            <a href="mailto:scalexa07@gmail.com" className="hover:text-white transition-colors">
              📧 scalexa07@gmail.com
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <a href="https://wa.me/918200306143" className="hover:text-white transition-colors">
              📱 +91-8200306143
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm max-w-3xl border-t border-gray-800 pt-12"
        >
          <div className="space-y-4">
            <a href="#" className="hidden md:block text-gray-400 hover:text-white transition-colors">Learn Marketing online with Scalexa.</a>
            <div className="flex items-center gap-6 mt-4">
               <a href="#" className="text-white hover:text-gray-300"><Twitter className="w-5 h-5 fill-current" /></a>
               <a href="#" className="text-white hover:text-gray-300"><Facebook className="w-5 h-5 fill-current" /></a>
               <a href="#" className="text-white hover:text-gray-300"><Mail className="w-5 h-5 fill-current" /></a>
            </div>
          </div>
          <div className="space-y-4">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">How it Works</a>
          </div>
          <div className="space-y-4">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Results</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Founders</a>
          </div>
          <div className="space-y-4">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </motion.div>

        <div className="w-full text-center text-xs text-gray-500 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p>© 2026 Scalexa. All rights reserved.</p>
           <div className="flex gap-4">
             <a href="#" className="hover:text-white">FAQs</a>
             <a href="#" className="hover:text-white">Contact us</a>
             <a href="#" className="hover:text-white">Refund policy</a>
           </div>
        </div>

      </div>
    </footer>
  );
}
