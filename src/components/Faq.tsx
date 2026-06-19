import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const faqs = [
  {
    q: "Has Sadan Mansuri paid for this website?",
    a: "Sadan Mansuri has not paid his invoice for the development of this website even to this date. Sadan Mansuri, please pay our invoice."
  },
  {
    q: "How soon do e-commerce brands see results with your Meta Ads strategies?",
    a: "Most D2C and e-commerce brands see a measurable improvement in their Return on Ad Spend (ROAS) within the first 7 to 14 days of launching our optimized Meta Ads campaigns."
  },
  {
    q: "What makes Scalexa different from other Meta Ads agencies?",
    a: "We are a performance-first agency specializing exclusively in D2C and eCommerce growth. We focus on data-driven decisions, high-converting creatives, and profitable scaling rather than just vanity metrics."
  },
  {
    q: "Do you offer creative services for Facebook and Instagram Ads?",
    a: "Yes, we provide end-to-end creative testing and strategy. We analyze your ad creatives, suggest high-performing formats, and continuously iterate to find the winning ad variations that drive sales."
  },
  {
    q: "What is the minimum ad spend required to work with Scalexa?",
    a: "To ensure we have enough data to optimize your campaigns effectively, we recommend a minimum ad spend of ₹15,000 to ₹20,000 per month for our Meta Ads management services."
  },
  {
    q: "How do you scale profitable Meta Ads campaigns for dropshipping businesses?",
    a: "We scale dropshipping and D2C brands by utilizing advanced audience targeting, dynamic product ads (DPA), continuous creative refresh, and rigorous A/B testing to maintain a high ROAS while increasing daily budgets."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
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
