import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface PartnerCardData {
  logo: string;
  title: string;
  items: string[];
}

const partnerCards: PartnerCardData[] = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    title: "Meta Business Partner",
    items: [
      "Certified Meta Ads campaign expertise",
      "Access to advanced campaign scaling tools",
      "Direct priority account support team",
      "Early access to new Meta beta features"
    ],
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    title: "Shopify Partner",
    items: [
      "Certified Shopify store growth expertise",
      "Full storefront setup & conversion optimization",
      "Seamless Shopify Payments & Meta Pixel integration",
      "Trusted across top-tier Shopify D2C ecosystem"
    ],
  }
];

function PartnerStackCard({
  i,
  total,
  data,
  progress,
}: {
  key?: string | number;
  i: number;
  total: number;
  data: PartnerCardData;
  progress: MotionValue<number>;
}) {

  const start = i / total;
  const end = Math.min(1, (i + 1) / total);
  const targetScale = Math.max(0.92, 1 - (total - 1 - i) * 0.04);
  const scale = useTransform(progress, [start, end], [1, targetScale]);
  const topOffset = i * 16;

  return (
    <div className="h-[48vh] sm:h-[42vh] sticky top-28 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `${topOffset}px`,
          willChange: 'transform',
        }}
        className="relative w-full max-w-2xl bg-white rounded-[32px] sm:rounded-[40px] border-2 border-primary/20 p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
      >
        <div>
          <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
            <div className="h-10 sm:h-12 flex items-center">
              <img 
                src={data.logo} 
                alt={data.title} 
                className="h-8 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-text-dark tracking-tight mb-4">
            {data.title}
          </h3>

          <ul className="space-y-3.5">
            {data.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-text-dark font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Partners() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      id="partners" 
      className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              Official Partners
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="text-text-dark">Trusted by the World's</span> <span className="text-primary">Biggest Platforms</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg text-text-dark/80 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            We are official certified partners of Meta and Shopify, giving our clients access to priority support, beta features, and verified expertise.
          </motion.p>
        </div>

        {/* Stacking Scroll Deck */}
        <div ref={container} className="relative w-full min-h-[100vh] pb-8">
          {partnerCards.map((card, i) => (
            <PartnerStackCard
              key={i}
              i={i}
              total={partnerCards.length}
              data={card}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

