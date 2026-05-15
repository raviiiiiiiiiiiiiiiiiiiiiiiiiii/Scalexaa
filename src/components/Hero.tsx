import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-24 px-4 bg-white overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-7xl font-bold tracking-tight text-text-dark leading-[1.1] mb-4 md:mb-6"
        >
          Scaling Brands <br />
          with <span className="text-primary">Meta Ads</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-xl text-text-dark mb-8 md:mb-10 max-w-2xl font-medium px-4"
        >
          High-Performance Campaigns. Data-Driven Decisions. Profitable Growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row justify-center gap-3 mb-10 md:mb-12"
        >
          <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all shadow-md hover:shadow-lg">
            Book a Call
          </button>
          <button className="bg-gray-50 hover:bg-gray-100 text-text-dark border border-gray-200 px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all">
            See Our Work
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4 md:mb-3">
            <div className="flex gap-1 text-primary">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs md:text-sm font-medium text-text-dark">
               Trusted by 50+ e-commerce brands
            </p>
          </div>
          <div className="flex -space-x-2 md:-space-x-3 mb-12 md:mb-16">
             {[...Array(5)].map((_, i) => (
              <img 
                key={i} 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover bg-gray-200"
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
           className="w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl bg-gray-50 border border-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Team placeholder" 
            className="w-full h-auto max-h-64 md:max-h-none object-cover opacity-90 grayscale-[20%]"
          />
        </motion.div>

      </div>
    </section>
  );
}
