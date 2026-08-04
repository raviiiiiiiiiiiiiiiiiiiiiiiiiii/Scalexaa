import { motion } from 'motion/react';
import { MessageCircle, Mail, Target, Award, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white px-4 sm:px-6 md:px-8 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Who We Are
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-text-dark tracking-tight"
          >
            Built for <span className="text-primary">E-Commerce Growth</span>
          </motion.h2>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1 — About Scalexa */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7 bg-white rounded-[32px] sm:rounded-[40px] border-2 border-primary/20 p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Agency Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-4 tracking-tight">
                About <span className="text-primary">Scalexa</span>
              </h3>

              <p className="text-base sm:text-lg text-text-dark/80 font-medium leading-relaxed mb-6">
                Scalexa is a performance-driven Meta Ads agency built for D2C, eCommerce, and Dropshipping brands. We don't run ads: we build growth systems. Every campaign is backed by data, built around your margins, and optimized for real profit. We started Scalexa with one core belief: every brand deserves agency-level execution without the agency-level fluff.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100 mb-2">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5 text-center">
                  <span className="text-xs text-text-muted font-bold uppercase block mb-0.5">Brands Scaled</span>
                  <span className="text-lg font-black text-primary">50+</span>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5 text-center">
                  <span className="text-xs text-text-muted font-bold uppercase block mb-0.5">Ad Spend Managed</span>
                  <span className="text-lg font-black text-primary">₹10Cr+</span>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5 text-center">
                  <span className="text-xs text-text-muted font-bold uppercase block mb-0.5">Avg ROAS</span>
                  <span className="text-lg font-black text-primary">8x</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Meet The Founder */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 bg-white rounded-[32px] sm:rounded-[40px] border-2 border-primary/20 p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Meet The Founder</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-1 text-text-dark tracking-tight">
                Sadan Mansuri
              </h3>
              <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">
                Meta Ads Specialist · India
              </p>

              <p className="text-base sm:text-lg text-text-dark/80 font-medium leading-relaxed mb-6">
                Sadan founded Scalexa after spending years mastering Meta Ads for D2C brands. Managing over ₹10 crore in ad spend, he has helped 50+ brands scale profitably with ROI-first execution. No fluff. No vanity metrics. Just real profit.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://wa.me/918200306143" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl py-3 px-4 text-sm transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Direct
              </a>
              <a 
                href="mailto:scalexa07@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-2xl py-3 px-4 text-sm border border-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
