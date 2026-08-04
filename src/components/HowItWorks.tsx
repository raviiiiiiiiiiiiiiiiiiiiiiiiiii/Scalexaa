import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { ClipboardList, Pointer, Play, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface StepData {
  stepNum: string;
  icon: ReactNode;
  title: string;
  desc: string;
}

const steps: StepData[] = [
  {
    stepNum: "01",
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    title: "Discovery & Brand Alignment",
    desc: "We analyze your brand, growth goals, current Meta ad setup, margins, and target customer personas.",
  },
  {
    stepNum: "02",
    icon: <Pointer className="w-6 h-6 text-primary" />,
    title: "Funnel & Creative Strategy",
    desc: "We build your conversion-focused ad funnel, custom audience segments, and high-converting ad copy.",
  },
  {
    stepNum: "03",
    icon: <Play className="w-6 h-6 text-primary" />,
    title: "Launch & Rapid A/B Testing",
    desc: "Campaigns go live with strict budget controls. We test creatives, placements, and audiences to identify winners.",
  },
  {
    stepNum: "04",
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Scale & Transparent Reporting",
    desc: "We aggressively scale profitable ad sets while delivering weekly live dashboards and actionable ROI reports.",
  }
];

function StepStackCard({
  i,
  total,
  step,
  progress,
}: {
  key?: string | number;
  i: number;
  total: number;
  step: StepData;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - i) * 0.035;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const stickyTop = 100 + i * 20;

  return (
    <div 
      className="sticky flex items-center justify-center mb-6"
      style={{ top: `${stickyTop}px` }}
    >
      <motion.div
        style={{
          scale,
          willChange: 'transform',
        }}
        className="relative w-full max-w-2xl bg-white rounded-[32px] sm:rounded-[40px] border-2 border-primary/20 p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-shadow duration-300 flex flex-col justify-between overflow-hidden group"
      >
        <div>
          <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#0199e3]/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <span 
              className="font-black text-primary/25 group-hover:text-primary/40 leading-none tracking-tighter select-none transition-colors"
              style={{ fontSize: 'clamp(2rem, 4vw, 44px)' }}
            >
              {step.stepNum}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-text-dark tracking-tight mb-3">
            {step.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-text-dark/70 font-medium leading-relaxed">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="how-it-works" 
      className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Simple Process
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="text-text-dark">How It</span> <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg text-text-dark/80 font-medium max-w-xl mx-auto leading-relaxed"
          >
            From initial strategy call to profitable scaling, a simple, transparent 4-step growth roadmap.
          </motion.p>
        </div>

        {/* Stacking Scroll Cards Container */}
        <div ref={container} className="relative w-full min-h-[140vh] pb-8">
          {steps.map((step, i) => (
            <StepStackCard
              key={i}
              i={i}
              total={steps.length}
              step={step}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
