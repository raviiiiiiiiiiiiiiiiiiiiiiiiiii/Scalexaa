import { motion } from 'motion/react';
import { Binoculars, Crown, Check, X as XIcon } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Comparison() {
  const others = [
    "Vanity metrics over real ROI",
    "Cookie-cutter ad templates",
    "No transparency on spend",
    "Disappear after onboarding",
    "Outdated strategies"
  ];

  const scalexa = [
    "Deep-focused, ROI-driven strategies",
    "Custom creatives per brand",
    "Consistent ROAS 10+ delivery",
    "Weekly transparent reporting",
    "Advanced AI & Meta optimization",
    "Dedicated performance manager"
  ];

  return (
    <section 
      id="why-us" 
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28 shadow-sm"
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-text-dark">Why</span> <span className="text-primary">Scalexa?</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-text-dark font-medium"
          >
            What makes Scalexa different from every other Meta Ads agency?
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="mb-8">
              <Binoculars className="w-8 h-8 text-text-dark mb-4" />
              <h3 className="text-3xl font-bold text-text-dark">Others</h3>
            </div>
            <ul className="space-y-6">
              {others.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1 bg-bg-pale rounded-3xl p-8"
          >
            <div className="mb-8">
              <Crown className="w-8 h-8 text-text-dark mb-4" />
              <h3 className="text-3xl font-bold text-text-dark">Scalexa</h3>
            </div>
            <ul className="space-y-6">
              {scalexa.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
