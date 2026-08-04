import { motion } from 'motion/react';
import { ClipboardList, Pointer, Play, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-teal-700" />,
    title: "Discovery Call",
    desc: "We learn about your brand, goals, current ad setup, and target audience.",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    align: "md:ml-0",
  },
  {
    icon: <Pointer className="w-6 h-6 text-purple-700" />,
    title: "Strategy & Creative Setup",
    desc: "We build your funnel, audiences, ad creatives, and full campaign structure.",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-200",
    align: "md:ml-24",
  },
  {
    icon: <Play className="w-6 h-6 text-white" />,
    title: "Launch & Optimize",
    desc: "Campaigns go live. We monitor, A/B test, and scale what's working.",
    bgColor: "bg-primary",
    iconBg: "bg-primary/30",
    textColor: "text-white",
    descColor: "text-white/80",
    align: "md:ml-48",
  },
  {
    icon: <Star className="w-6 h-6 text-indigo-100" />,
    title: "Reports & Scaling",
    desc: "Weekly transparent reports with ROAS, sales, and a clear scaling roadmap.",
    bgColor: "bg-indigo-900",
    iconBg: "bg-indigo-800",
    textColor: "text-white",
    descColor: "text-indigo-200",
    align: "md:ml-72",
  }
];

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-bg-pale rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Simple Process
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-text-dark">How it</span> <span className="text-gray-400">works</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-text-dark font-medium"
          >
            From first call to profitable scaling — we make it seamless.
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * i }}
              className={`p-6 rounded-2xl w-full md:w-3/4 flex gap-4 ${step.bgColor} ${step.align}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${step.iconBg}`}>
                {step.icon}
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${step.textColor || 'text-text-dark'}`}>
                  {step.title}
                </h3>
                <p className={`text-base ${step.descColor || 'text-text-muted'}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
