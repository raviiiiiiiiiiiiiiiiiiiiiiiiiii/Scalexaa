import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-bg-pale px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Official Partners
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="text-text-dark">Trusted by the World's</span> <span className="text-primary">Biggest Platforms</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            We are official certified partners of Meta and Shopify — giving our clients access to priority support, beta features, and verified expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 - Meta Business Partner */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
          >
            <div className="mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                alt="Meta Logo" 
                className="h-10" 
              />
            </div>
            <div className="inline-block bg-gray-900 text-white text-xs rounded-full px-3 py-1 mb-2 font-medium">
              Official Business Partner
            </div>
            <h3 className="text-xl font-bold text-text-dark mt-2 mb-4">Meta Business Partner</h3>
            <ul className="space-y-3">
              {[
                "Certified Meta Ads expertise",
                "Access to advanced campaign tools",
                "Priority account support",
                "Beta feature early access"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 - Shopify Partner */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
          >
            <div className="mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" 
                alt="Shopify Logo" 
                className="h-10" 
              />
            </div>
            <div className="inline-block bg-gray-900 text-white text-xs rounded-full px-3 py-1 mb-2 font-medium">
              Official Shopify Partner
            </div>
            <h3 className="text-xl font-bold text-text-dark mt-2 mb-4">Shopify Partner</h3>
            <ul className="space-y-3">
              {[
                "Certified Shopify store expertise",
                "Full store setup & optimization",
                "Shopify Payments & Ads integration",
                "Trusted by Shopify ecosystem"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400">🔒 Verified credentials available on request</p>
        </motion.div>

      </div>
    </section>
  );
}
