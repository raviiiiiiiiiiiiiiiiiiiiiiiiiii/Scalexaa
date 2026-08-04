import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/casestudies';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface CaseStudyCardProps {
  key?: string | number;
  i: number;
  total: number;
  study: typeof caseStudies[0];
  progress: MotionValue<number>;
}

function CaseStudyStackCard({ i, total, study, progress }: CaseStudyCardProps) {
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const stickyTop = 100 + i * 20;

  // Extract primary ROAS or key metric
  const roasResult = study.results.find(r => r.label.toLowerCase().includes('roas')) || study.results[0];

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
        className="relative w-full max-w-3xl bg-white rounded-[32px] sm:rounded-[40px] border-2 border-primary/20 p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-shadow duration-300 flex flex-col justify-between overflow-hidden group"
      >
        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-gray-100">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                {study.niche}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
                {study.brand}
              </h3>
            </div>
            
            <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-black text-sm sm:text-base shrink-0">
              <TrendingUp className="w-4 h-4" />
              <span>{roasResult.value}</span>
            </div>
          </div>

          {/* Core Brief & Key Results Grid */}
          <p className="text-sm sm:text-base text-text-dark/80 font-medium leading-relaxed mb-6 line-clamp-2">
            {study.challenge}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-3.5 mb-2 text-center">
            {study.results.slice(0, 4).map((res, idx) => (
              <div key={idx} className={idx > 0 ? "border-l border-gray-200/80 pl-2" : ""}>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-text-muted block truncate">{res.label}</span>
                <span className="text-sm sm:text-base font-black text-primary truncate block">{res.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-text-muted font-semibold">Verified Campaign Results</span>
          <Link
            to={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:translate-x-1 transition-transform"
          >
            <span>Read Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudies() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="case-studies" 
      className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="text-text-dark">Case</span> <span className="text-primary">Studies</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg text-text-dark/80 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Real brands. Real ad spend. Trackable ROAS and revenue growth.
          </motion.p>
        </div>

        {/* Stacking Scroll Deck */}
        <div ref={container} className="relative w-full min-h-[110vh] pb-0">
          {caseStudies.map((study, i) => (
            <CaseStudyStackCard
              key={study.slug}
              i={i}
              total={caseStudies.length}
              study={study}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
