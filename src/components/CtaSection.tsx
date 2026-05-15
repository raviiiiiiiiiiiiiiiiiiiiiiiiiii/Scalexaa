import { motion } from 'motion/react';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-bg-pale px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 tracking-tight">
            Book a Free 3-Day Ad Trial
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl mx-auto">
            Witness real results before committing. No credit card. No risk.
          </p>
          
          <button className="bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-8">
            Start My Free Trial
          </button>
          
          <p className="text-sm font-medium text-text-dark max-w-md mx-auto">
            Trusted by e-commerce brands. Performance-focused campaigns delivering real ROI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
