import { motion } from 'motion/react';
import { MessageCircle, Mail } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Part A - About Scalexa */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start"
          >
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-dark">About</span> <span className="text-primary">Scalexa</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Scalexa is a performance-driven Meta Ads agency built for D2C, eCommerce, and Dropshipping brands. We don't run ads — we build growth systems. Every campaign is backed by data, built around your margins, and optimized for real profit. We started Scalexa with one belief: every brand deserves agency-level execution without the agency-level fluff.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm font-medium">50+ Brands Scaled</span>
              <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm font-medium">₹10Cr+ Ad Spend Managed</span>
              <span className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm font-medium">Avg 8x ROAS Delivered</span>
            </div>
          </motion.div>

          {/* Part B - Meet The Founder */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-2xl shadow-md p-8 bg-gray-50 w-full max-w-md md:max-w-none mx-auto border border-gray-100">
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meet Founder</h3>
                <div className="bg-white border border-gray-200 text-gray-600 text-xs rounded-full px-3 py-1 mb-3 shadow-sm">
                  Meta Ads Specialist | Founder
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-1">Sadan Mansuri</h3>
                <p className="text-sm text-gray-400 mt-1">20 years old · India</p>
                
                <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                  Sadan founded Scalexa after spending years mastering Meta Ads for D2C brands. At 20, he has managed over ₹10 crore in ad spend, helped 50+ brands scale profitably, and built a reputation for ROI-first execution. No fluff. No vanity metrics. Just results.
                </p>
                
                <div className="flex flex-row gap-3">
                  <a 
                    href="https://wa.me/918200306143" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors bg-white shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a 
                    href="mailto:scalexa07@gmail.com"
                    className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors bg-white shadow-sm"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
