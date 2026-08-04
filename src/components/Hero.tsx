import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section 
      className="pt-40 pb-12 md:pt-56 md:pb-16 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center bottom, #e0f4fd 0%, #ffffff 70%)' }}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative z-10 mb-8 md:mb-0">
        
        {/* Headline */}
        <div className="relative">
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            height: '200px',
            background: 'radial-gradient(ellipse at center, rgba(1,153,227,0.15) 0%, rgba(255,255,255,0) 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-black leading-tight text-center relative z-10"
          >
            <span className="text-black">Scaling Brands</span>{' '}
            <span className="text-primary">with Meta Ads</span>
          </motion.h1>
        </div>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-gray-500 text-center max-w-xs mx-auto mt-3"
        >
          High-Performance Campaigns. Data-Driven Decisions. Profitable Growth.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full sm:w-auto px-4 sm:px-0 mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="https://wa.me/918200306143" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary hover:opacity-90 text-white font-medium py-3 px-8 rounded-full text-base transition-colors text-center shadow-md border border-primary md:px-8"
          >
            Book a Free Call
          </a>
          <Link 
            to="/case-studies"
            className="w-full sm:w-auto bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 font-medium py-3 px-8 rounded-full text-base transition-colors text-center shadow-sm md:px-8"
          >
            View Case Studies
          </Link>
        </motion.div>

        {/* Trust Row */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-3"
        >
          <div className="flex text-primary">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span>Trusted by 50+ e-commerce brands</span>
        </motion.div>
      </div>
    </section>
  );
}
