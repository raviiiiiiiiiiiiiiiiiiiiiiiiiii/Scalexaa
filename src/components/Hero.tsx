import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 md:pt-36 md:pb-16 px-4 bg-white overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-7xl font-bold tracking-tight text-text-dark leading-[1.1] mb-6 md:mb-8"
        >
          Scaling Brands <br />
          with <span className="text-primary">Meta Ads</span>
        </motion.h1>

        <motion.p 
          initial="hidden" animate="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="text-sm md:text-xl text-text-dark mb-10 max-w-2xl font-medium px-4"
        >
          High-Performance Campaigns. Data-Driven Decisions. Profitable Growth.
        </motion.p>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row justify-center gap-3 mb-12 md:mb-14"
        >
          <motion.a 
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" 
            className="bg-primary hover:opacity-90 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-colors shadow-md inline-block"
          >
            Book a Call
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/case-studies')}
            className="bg-gray-50 hover:bg-gray-100 text-text-dark border border-gray-200 px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-colors inline-block"
          >
            See Our Work
          </motion.button>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4"
        >
          <div className="flex gap-1 text-primary">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            ))}
          </div>
          <p className="text-xs md:text-sm font-medium text-text-dark">
             Trusted by 50+ e-commerce brands
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="flex -space-x-2 md:-space-x-3"
        >
           {[...Array(5)].map((_, i) => (
            <img 
              key={i} 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover bg-gray-200"
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`}
              alt="Client avatar"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

