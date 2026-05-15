import { motion } from 'motion/react';

export default function Founder() {
  return (
    <section className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block bg-cyan-100 text-cyan-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
            <span className="text-text-dark">Meet The</span> <span className="text-primary">FOUNDER</span>
          </h2>
          <p className="text-lg text-text-dark font-medium">
            Here's what our founder has to say:
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-lg bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 duration-300"
        >
          <div className="w-full aspect-[4/3] bg-blue-500 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Sadan Mansuri - Founder" 
              className="w-full h-full object-cover object-top mix-blend-multiply opacity-90"
            />
          </div>
          <div className="p-8 pb-10">
            <span className="inline-block bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Meta Ads Specialist | Founder
            </span>
            <h3 className="text-2xl font-bold text-text-dark mb-4">Sadan Mansuri</h3>
            <p className="text-text-muted leading-relaxed">
              Sadan is a 20-year-old Meta Ads specialist and founder of Scalexa. With deep hands-on experience scaling D2C, eCommerce, and Dropshipping brands, he focuses on ROI-first execution, data-backed strategy, and fast implementation. His mission: scale brands with smart strategy, optimized funnels, and high-performing ads.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
