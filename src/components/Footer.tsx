import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-gray-500 pt-16 pb-8 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center mb-8"
        >
          <img src="https://i.ibb.co/PzvNxqqp/IMG-20260515-073359.png" alt="Scalexa Logo" className="h-10 md:h-12 w-auto object-contain opacity-80" />
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <motion.a 
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" 
            className="bg-accent hover:bg-[#86c02a] text-gray-900 px-10 py-4 rounded-full text-lg font-bold inline-block border-[1px] border-black/10 shadow-[0_0_20px_rgba(163,230,53,0.3)] mb-8"
          >
            Book a Free Call
          </motion.a>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm font-medium text-gray-600">
            <a href="mailto:scalexa07@gmail.com" className="hover:text-primary transition-colors">
              📧 scalexa07@gmail.com
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              📱 +91-8200306143
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-3xl border-t border-gray-100 pt-8 pb-8"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
            <a href="#services" className="text-gray-600 hover:text-primary font-medium transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">How It Works</a>
            <a href="#results" className="text-gray-600 hover:text-primary font-medium transition-colors">Results</a>
            <a href="/case-studies" className="text-gray-600 hover:text-primary font-medium transition-colors">Case Studies</a>
            <a href="#why-us" className="text-gray-600 hover:text-primary font-medium transition-colors">Why Us</a>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="w-full text-center text-xs text-gray-400 border-t border-gray-100 pt-8 flex flex-col justify-center items-center gap-2"
        >
          <p>© 2026 Scalexa. All rights reserved.</p>
        </motion.div>

      </div>
    </footer>
  );
}
