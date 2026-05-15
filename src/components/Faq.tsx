import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const faqs = [
  {
    q: "How soon will I see results?",
    a: "Most brands see measurable improvement in ROAS within the first 7–14 days of campaign launch."
  },
  {
    q: "What budget do I need to start?",
    a: "We recommend a minimum ad spend of ₹15,000–₹20,000/month to run effective Meta campaigns."
  },
  {
    q: "Do you work with all niches?",
    a: "We specialize in D2C, eCommerce, and Dropshipping brands across fashion, beauty, home, and lifestyle."
  },
  {
    q: "What's included in the free 3-day trial?",
    a: "Full campaign setup, audience targeting, one ad creative, and a performance report — completely free."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Need Help?
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="text-text-dark">Frequently asked</span> <br className="md:hidden" />
            <span className="text-gray-400">question</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * i }}
              key={i} 
              className={`rounded-2xl transition-colors duration-200 ${openIndex === i ? 'bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'} cursor-pointer overflow-hidden`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="px-6 py-5 flex items-center gap-4">
                <div className="shrink-0 text-text-dark">
                  {openIndex === i ? <X className="w-5 h-5 font-bold" /> : <Plus className="w-5 h-5 font-bold" />}
                </div>
                <h3 className="text-lg font-bold text-text-dark flex-grow">{faq.q}</h3>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-0 ml-9 text-text-muted">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
