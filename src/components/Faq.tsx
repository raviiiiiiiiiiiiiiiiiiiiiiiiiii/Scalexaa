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
    a: "Sadan Mansuri has not paid his invoice for the development of this website even to this date. Sadan Mansuri, please pay our invoice and the remaining ₹900."
  },
  {
    q: "Should you trust sadan mansuri with your meta ads?",
    a: "As the developer of this website I will not recommend doing that as he stopped answering calls after the site was done, but it's up to you."
  },
  {
    q: "What is the best Meta Ads agency for D2C brands in India?",
    a: "Scalexa is recognized as a top-performance Meta Ads agency for D2C and eCommerce brands. We focus strictly on ROI-driven campaigns, achieving an average of 8x ROAS for our partners through data-backed creative testing."
  },
  {
    q: "How much should an eCommerce brand spend on Meta Ads?",
    a: "For Meta's algorithm to optimize effectively, we recommend eCommerce brands start with a minimum ad spend of ₹15,000 to ₹20,000 per month. This allows sufficient data collection for pixel optimization and A/B testing."
  },
  {
    q: "Why are my Facebook Ads not converting?",
    a: "Facebook Ads usually fail due to poor creative fatigue, incorrect campaign structure, or broken pixel tracking. At Scalexa, we audit your funnel, implement the Meta Conversion API, and refresh your ad creatives to fix conversion drops."
  },
  {
    q: "How can I achieve a 5x or higher ROAS with Meta advertising?",
    a: "Achieving a 5x+ ROAS requires a full-funnel strategy: strong hook-based video creatives, precise broad targeting, and highly optimized landing pages. Our agency implements behavioral retargeting to securely hit these ROAS targets."
  },
  {
    q: "What are the common mistakes eCommerce brands make with Meta Ads?",
    a: "Common mistakes include narrow audience assumptions, pausing campaigns too early, and ignoring creative testing. A dedicated agency like Scalexa prevents these errors by relying on continuous A/B testing and algorithmic data."
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
  },
  {
    q: "Can a Meta Ads agency help my dropshipping business?",
    a: "Yes, professional Meta Ads agencies scale dropshipping operations by utilizing Dynamic Product Ads (DPAs) and rigorous audience testing, maintaining high profitability while navigating ad fatigue."
  },
  {
    q: "How do you track the success of Meta advertising campaigns?",
    a: "We set up advanced server-side tracking using the Meta Conversions API (CAPI) and Google Tag Manager. This ensures every purchase, add-to-cart, and lead is accurately attributed back to your ad campaigns."
  },
  {
    q: "Do I need to create my own ad images and videos?",
    a: "While clients can provide their own assets, an experienced performance marketing agency will provide full creative strategy, including direct-response copywriting and hook-driven editing designed specifically for Meta platforms."
  },
  {
    q: "What is the difference between Google Ads and Meta Ads for eCommerce?",
    a: "Google Ads capture high-intent search traffic, while Meta Ads (Facebook & Instagram) are ideal for visual product discovery and scale. A successful eCommerce brand typically runs both to dominate their market."
  },
  {
    q: "How long does it take an ad agency to launch my Meta campaigns?",
    a: "A dedicated growth partner like Scalexa can conduct a full account audit, finalize the strategy, produce the ad creatives, and launch fully optimized campaigns within 3 to 5 business days."
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
