import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { Binoculars, Crown, Check, X as XIcon } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface ComparisonCardData {
  icon: ReactNode;
  iconBg: string;
  title: string;
  cardStyle: string;
  items: string[];
  itemIcon: ReactNode;
  isWinner?: boolean;
}

const comparisonCards: ComparisonCardData[] = [
  {
    icon: <Binoculars className="w-6 h-6" />,
    iconBg: "bg-gray-200/70 text-gray-500",
    title: "Typical Agencies",
    cardStyle: "bg-gray-50/90 border-2 border-gray-200/80 shadow-lg",
    items: [
      "Vanity metrics prioritized over real profit & ROI",
      "Generic, cookie-cutter ad copy & templates",
      "Zero real transparency on ad spend or attribution",
      "Account managers disappear post-onboarding",
      "Outdated targeting & manual campaign hacks"
    ],
    itemIcon: (
      <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
        <XIcon className="w-3.5 h-3.5 stroke-[3]" />
      </div>
    )
  },
  {
    icon: <Crown className="w-6 h-6" />,
    iconBg: "bg-[#0199e3]/10 text-primary",
    title: "Scalexa",
    cardStyle: "bg-white border-2 border-primary/30 shadow-2xl hover:border-primary/50",
    isWinner: true,
    items: [
      "Deep-focused, ROAS & revenue-driven ad strategies",
      "Tailored high-converting creative iterations",
      "Proven track record of scaling campaigns to 10x+ ROAS",
      "Weekly live reporting & transparent dashboard access",
      "Advanced Meta AI optimization & CBO structures",
      "Dedicated growth partner & rapid direct support"
    ],
    itemIcon: (
      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 stroke-[3]" />
      </div>
    )
  }
];

function ComparisonStackCard({
  i,
  total,
  data,
  progress,
}: {
  key?: string | number;
  i: number;
  total: number;
  data: ComparisonCardData;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - i) * 0.04;
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
        className={`relative w-full max-w-2xl rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${data.cardStyle}`}
      >
        {data.isWinner && (
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
        )}

        <div>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${data.iconBg}`}>
              {data.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-text-dark tracking-tight">
              {data.title}
            </h3>
          </div>

          <ul className="space-y-3.5">
            {data.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {data.itemIcon}
                <span className="text-sm sm:text-base text-text-dark font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Comparison() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="why-us" 
      className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Agency Comparison
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="text-text-dark">Why Choose</span> <span className="text-primary">Scalexa?</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg text-text-dark/80 font-medium max-w-xl mx-auto leading-relaxed"
          >
            What sets Scalexa apart from typical digital ad agencies.
          </motion.p>
        </div>

        {/* Stacking Scroll Deck */}
        <div ref={container} className="relative w-full min-h-[130vh] pb-8">
          {comparisonCards.map((card, i) => (
            <ComparisonStackCard
              key={i}
              i={i}
              total={comparisonCards.length}
              data={card}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


