import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const data = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(data.entries());

    try {
      // Replace YOUR_FORM_ID with Formspree form ID after creating free account at formspree.io
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-white text-gray-500 pt-20 pb-8 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 w-full">
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center mb-8"
          >
            <img src="https://i.ibb.co/PzvNxqqp/IMG-20260515-073359.png" alt="Scalexa Logo" className="h-10 md:h-12 w-auto object-contain opacity-80" />
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 text-center"
          >
             Let's Grow Your Brand Together
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-gray-500 mb-10 max-w-xl mx-auto px-4"
          >
            Fill in your details and we'll get back to you within 24 hours.
          </motion.p>

          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mx-auto mb-16 text-left"
          >
            {status === 'success' ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 text-center">
                <h3 className="text-xl font-bold mb-2">Thanks!</h3>
                <p>We'll reach out within 24 hours.</p>
              </div>
            ) : status === 'error' ? (
              <div className="bg-red-50 text-red-800 p-8 rounded-2xl border border-red-200 text-center">
                <h3 className="text-xl font-bold mb-2">Something went wrong.</h3>
                <p>Please <a href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" className="underline font-bold">WhatsApp us</a> directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                    <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                    <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Brand / Business Name</label>
                    <input required type="text" name="brand" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Monthly Ad Budget</label>
                  <select name="budget" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900">
                    <option value="">Select your budget</option>
                    <option value="Under ₹10k">Under ₹10k</option>
                    <option value="₹10k–₹30k">₹10k–₹30k</option>
                    <option value="₹30k–₹1L">₹30k–₹1L</option>
                    <option value="Above ₹1L">Above ₹1L</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Message (Optional)</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white text-gray-900"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.a 
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" 
              className="bg-accent hover:bg-[#86c02a] text-gray-900 px-10 py-4 rounded-full text-lg font-bold inline-block border-[1px] border-black/10 shadow-[0_0_20px_rgba(163,230,53,0.3)] mb-8"
            >
              Book a Free Call
            </motion.a>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm font-medium text-gray-600">
              <a href="mailto:scalexa07@gmail.com" className="hover:text-blue-600 transition-colors">
                📧 scalexa07@gmail.com
              </a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                📱 +91-8200306143
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-3xl border-t border-gray-100 pt-12 pb-8"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-sm md:text-base">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">How It Works</a>
            <a href="#results" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Results</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Why Us</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">FAQ</a>
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
