import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 px-4 bg-white overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-text-dark leading-[1.1] mb-6"
        >
          Scaling Brands with <br className="hidden md:block" />
          <span className="text-primary">Meta Ads</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-dark mb-10 max-w-2xl font-medium"
        >
          High-Performance Campaigns. Data-Driven Decisions. Profitable Growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
            Book a Free Call
          </button>
          <button className="bg-gray-50 hover:bg-gray-100 text-text-dark border border-gray-200 px-8 py-4 rounded-full text-base font-medium transition-all w-full sm:w-auto">
            See Our Work
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-1 mb-3 text-primary">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-sm font-medium mb-4 text-text-dark">
             Trusted by 50+ e-commerce brands — and counting
          </p>
          <div className="flex -space-x-3 mb-16">
             {[...Array(5)].map((_, i) => (
              <img 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-200"
                src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`}
                alt="Client avatar"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.5 }}
           className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Team placeholder" 
            className="w-full h-auto object-cover opacity-90 grayscale-[20%]"
          />
        </motion.div>

      </div>
    </section>
  );
}
