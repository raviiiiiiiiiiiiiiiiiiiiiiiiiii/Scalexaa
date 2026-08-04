import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'motion/react';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface SingleCardData {
  number: string;
  category: string;
  title: string;
  caption: string;
  image: string;
}

export default function Results() {
  const shopifyImages = [
    "https://i.ibb.co/TBchCyDz/Screenshot-2025-12-11-133038.png",
    "https://i.ibb.co/SDMJw76h/Screenshot-2025-12-11-132156.png",
    "https://i.ibb.co/GfRzjT7L/Screenshot-2025-12-11-132225.png",
    "https://i.ibb.co/FkBdWjng/Screenshot-2025-12-11-132322.png"
  ];

  const metaImages = [
    "https://i.ibb.co/m5Zvj00s/Screenshot-2026-06-20-143901.png",
    "https://i.ibb.co/HTqJfjhX/Screenshot-2026-06-20-143732.png",
    "https://i.ibb.co/0jbjFHKS/Screenshot-2026-06-20-143602.png",
    "https://i.ibb.co/4ZqYJZbQ/Screenshot-2026-06-20-143710.png",
    "https://i.ibb.co/fYYJpb38/Screenshot-2026-06-20-134406.png",
    "https://i.ibb.co/4nk6HS1V/Screenshot-2026-06-20-134513.png",
    "https://i.ibb.co/YFstFXPf/Screenshot-2026-06-20-134340.png",
    "https://i.ibb.co/hF4f6Nrd/Screenshot-2025-12-11-131315.png"
  ];

  const cardsData: SingleCardData[] = [
    ...shopifyImages.map((img, idx) => ({
      number: String(idx + 1).padStart(2, '0'),
      category: "Shopify Growth",
      title: `Shopify Revenue Result #${idx + 1}`,
      caption: "Brand grew from zero with our strategy, store optimization, and execution.",
      image: img,
    })),
    ...metaImages.map((img, idx) => ({
      number: String(shopifyImages.length + idx + 1).padStart(2, '0'),
      category: "Meta Ads ROAS",
      title: `Meta Ads Campaign #${idx + 1}`,
      caption: "High-performing Meta campaign delivering scaled volume and outstanding ROAS.",
      image: img,
    }))
  ];

  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const activeCard = modalIndex !== null ? cardsData[modalIndex] : null;

  const handleNextImage = () => {
    if (modalIndex === null) return;
    setModalIndex((prev) => (prev !== null ? (prev + 1) % cardsData.length : 0));
    setZoomLevel(1);
  };

  const handlePrevImage = () => {
    if (modalIndex === null) return;
    setModalIndex((prev) => (prev !== null ? (prev - 1 + cardsData.length) % cardsData.length : 0));
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));

  return (
    <section 
      id="results" 
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pt-20 md:pt-28 bg-bg-pale px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Scalexa Delivers
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-text-dark">Real Results from</span> <span className="text-primary">Real Campaigns</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-text-dark font-medium max-w-2xl mx-auto"
          >
            Short, actionable proof that we deliver ROI — not just impressions.
          </motion.p>
        </div>

        {/* StackSection Stacking Deck */}
        <StackSection
          cards={cardsData}
          onOpenModal={(cardIdx) => {
            setModalIndex(cardIdx);
            setZoomLevel(1);
          }}
        />

      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {modalIndex !== null && activeCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 touch-none overflow-hidden"
          >
            <button 
              onClick={() => { setModalIndex(null); setZoomLevel(1); }}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white z-[110] border border-white/20">
              <button onClick={handleZoomOut} disabled={zoomLevel <= 1} className="p-2 hover:bg-white/20 rounded-full disabled:opacity-50 transition-colors">
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium w-12 text-center" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(zoomLevel * 100)}%
              </span>
              <button onClick={handleZoomIn} disabled={zoomLevel >= 3} className="p-2 hover:bg-white/20 rounded-full disabled:opacity-50 transition-colors">
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-full overflow-hidden flex items-center justify-center p-4">
              <motion.img 
                drag={zoomLevel > 1}
                dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
                dragElastic={0.1}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomLevel, opacity: 1 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                src={activeCard.image} 
                alt="Enlarged result proof" 
                className={`max-w-[95vw] max-h-[95vh] md:max-w-[85vw] md:max-h-[85vh] object-contain origin-center ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              />
            </div>
            
            {/* Modal Controls */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-[110] border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-[110] border border-white/20"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function StackCard({
  i,
  data,
  progress,
  range,
  targetScale,
  onOpenModal,
}: {
  key?: string;
  i: number;
  data: SingleCardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenModal: (cardIdx: number) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${i * 14}px)`,
        }}
        className="relative w-full max-w-2xl mx-auto rounded-[35px] sm:rounded-[45px] md:rounded-[55px] border-2 border-primary/20 bg-white p-4 sm:p-6 md:p-7 shadow-2xl transition-all duration-300"
      >
        {/* Top Header Row */}
        <div className="flex flex-row items-center justify-between gap-3 mb-3 border-b border-gray-100 pb-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <span 
              className="font-black text-primary/25 leading-none tracking-tighter select-none shrink-0" 
              style={{ fontSize: 'clamp(2rem, 5vw, 60px)' }}
            >
              {data.number}
            </span>
            <div>
              <span className="inline-block bg-[#0199e3]/10 text-primary px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-0.5">
                {data.category}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-text-dark tracking-tight leading-tight">
                {data.title}
              </h3>
            </div>
          </div>
          <button
            onClick={() => onOpenModal(i)}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm shrink-0"
          >
            <span>Zoom</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 16:9 Aspect Ratio Image Container */}
        <div 
          onClick={() => onOpenModal(i)}
          style={{ aspectRatio: '16 / 9' }}
          className="w-full aspect-[16/9] mx-auto relative bg-gray-50 rounded-[25px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden border-2 border-gray-100/90 cursor-zoom-in group shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-3"
        >
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md border border-gray-200">
            <ZoomIn className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Caption below image */}
        <p className="text-center text-xs text-text-muted italic font-medium mt-2.5 max-w-sm mx-auto line-clamp-2">
          "{data.caption}"
        </p>
      </motion.div>
    </div>
  );
}

function StackSection({
  cards,
  onOpenModal,
}: {
  cards: SingleCardData[];
  onOpenModal: (cardIdx: number) => void;
}) {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative w-full">
      {cards.map((data, i) => {
        const targetScale = 1 - (cards.length - i) * 0.02;
        return (
          <StackCard
            key={`${data.number}-${i}`}
            i={i}
            data={data}
            progress={scrollYProgress}
            range={[i * (1 / cards.length), 1]}
            targetScale={targetScale}
            onOpenModal={onOpenModal}
          />
        );
      })}
    </main>
  );
}



