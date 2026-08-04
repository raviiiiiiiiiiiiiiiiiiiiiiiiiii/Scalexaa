import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-100 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        
        <motion.h2 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-text-dark mb-6 tracking-tight"
        >
          Book a Free 3-Day Ad Trial
        </motion.h2>

        <motion.p 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-xl text-text-muted mb-10 max-w-xl mx-auto"
        >
          Witness real results before committing. No credit card. No risk.
        </motion.p>
        
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <motion.a 
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" 
            className="bg-primary hover:opacity-90 text-white px-10 py-4 rounded-full text-lg font-medium shadow-md inline-block"
          >
            Start My Free Trial
          </motion.a>
        </motion.div>
        
        <motion.p 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="text-sm font-medium text-text-dark max-w-md mx-auto"
        >
          Trusted by e-commerce brands. Performance-focused campaigns delivering real ROI.
        </motion.p>
        
      </div>
    </section>
  );
}
