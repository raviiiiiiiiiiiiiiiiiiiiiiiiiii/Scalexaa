import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Results() {
  const shopifyImages = [
    "https://i.ibb.co/TBchCyDz/Screenshot-2025-12-11-133038.png",
    "https://i.ibb.co/tRsVRF1/Screenshot-2025-10-01-222454.png",
    "https://i.ibb.co/tw98GYfT/Screenshot-2025-10-01-222833.png",
    "https://i.ibb.co/9kkCtTRH/Screenshot-2025-10-01-222947.png",
    "https://i.ibb.co/vxzQ47ZY/Screenshot-2025-10-01-223234.png",
    "https://i.ibb.co/SDMJw76h/Screenshot-2025-12-11-132156.png",
    "https://i.ibb.co/GfRzjT7L/Screenshot-2025-12-11-132225.png",
    "https://i.ibb.co/FkBdWjng/Screenshot-2025-12-11-132322.png"
  ];

  const metaImages = [
    "https://i.ibb.co/ch0TwMg9/Whats-App-Image-2025-12-11-at-1-27-32-PM-2.jpg",
    "https://i.ibb.co/8ggTmNR5/Whats-App-Image-2025-12-09-at-10-00-05-PM.jpg",
    "https://i.ibb.co/0pHb9ZrX/Whats-App-Image-2025-12-09-at-10-00-06-PM-1.jpg",
    "https://i.ibb.co/RGXfMJ9F/Whats-App-Image-2025-12-09-at-10-00-06-PM.jpg",
    "https://i.ibb.co/NMPmsMd/Whats-App-Image-2025-12-09-at-10-00-10-PM-1.jpg",
    "https://i.ibb.co/8ncCDNTf/Whats-App-Image-2025-12-09-at-10-00-07-PM.jpg",
    "https://i.ibb.co/zhYdBSdh/Whats-App-Image-2025-12-09-at-10-00-09-PM-2.jpg",
    "https://i.ibb.co/V0ZYpGMG/Whats-App-Image-2025-12-09-at-10-00-10-PM.jpg",
    "https://i.ibb.co/3mczTxJS/Whats-App-Image-2025-12-09-at-10-00-09-PM.jpg",
    "https://i.ibb.co/Pvb6TTDH/Whats-App-Image-2025-12-09-at-10-00-09-PM-1.jpg",
    "https://i.ibb.co/9kNMrLDD/Whats-App-Image-2025-12-09-at-10-00-08-PM.jpg",
    "https://i.ibb.co/dsyqsQZt/Whats-App-Image-2025-12-09-at-10-00-08-PM-1.jpg"
  ];
  
  const [currentShopify, setCurrentShopify] = useState(0);
  const [currentMeta, setCurrentMeta] = useState(0);
  const [modalView, setModalView] = useState<'shopify' | 'meta' | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const nextShopify = () => { setCurrentShopify((prev) => (prev + 1) % shopifyImages.length); setZoomLevel(1); };
  const prevShopify = () => { setCurrentShopify((prev) => (prev - 1 + shopifyImages.length) % shopifyImages.length); setZoomLevel(1); };

  const nextMeta = () => { setCurrentMeta((prev) => (prev + 1) % metaImages.length); setZoomLevel(1); };
  const prevMeta = () => { setCurrentMeta((prev) => (prev - 1 + metaImages.length) % metaImages.length); setZoomLevel(1); };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));

  return (
    <section id="results" className="py-20 md:py-24 bg-bg-pale px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
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
            className="text-lg text-text-dark font-medium"
          >
            Short, actionable proof that we deliver ROI — not just impressions.
          </motion.p>
        </div>

        <div className="w-full space-y-12">
          {/* Shopify Dashboard Card */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">Shopify Dashboard Overview</h3>
              <p className="text-sm md:text-base text-text-muted mb-8 max-w-2xl mx-auto">
                These brands grew from zero with our strategy, optimization, and consistent execution.
              </p>
              
              {/* Shopify Results Carousel */}
              <div className="w-full relative bg-gray-50 rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center group">
                <img 
                  src={shopifyImages[currentShopify]} 
                  alt={`Shopify Result ${currentShopify + 1}`}
                  onClick={() => setModalView('shopify')}
                  className="w-full h-full object-contain mix-blend-multiply cursor-zoom-in"
                />
                
                <motion.button 
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); prevShopify(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-text-dark rounded-full flex items-center justify-center shadow-md transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); nextShopify(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-text-dark rounded-full flex items-center justify-center shadow-md transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="flex justify-center gap-2">
                {shopifyImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentShopify(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentShopify === i ? 'bg-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Meta Ads Dashboard Card */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">Meta Ads Dashboard Overview</h3>
              <p className="text-sm md:text-base text-text-muted mb-8 max-w-2xl mx-auto">
                These screenshots show our expertise in creating and optimizing Meta Ads campaigns that deliver measurable ROI.
              </p>
              
              {/* Meta Results Carousel */}
              <div className="w-full relative bg-gray-50 rounded-xl overflow-hidden mb-6 aspect-video flex items-center justify-center group">
                <img 
                  src={metaImages[currentMeta]} 
                  alt={`Meta Result ${currentMeta + 1}`}
                  onClick={() => setModalView('meta')}
                  className="w-full h-full object-contain mix-blend-multiply cursor-zoom-in"
                />
                
                <motion.button 
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); prevMeta(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-text-dark rounded-full flex items-center justify-center shadow-md transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); nextMeta(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-text-dark rounded-full flex items-center justify-center shadow-md transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="flex justify-center gap-2 flex-wrap max-w-xs mx-auto">
                {metaImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentMeta(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentMeta === i ? 'bg-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalView && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 touch-none overflow-hidden"
          >
            <button 
              onClick={() => { setModalView(null); setZoomLevel(1); }}
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
                  src={modalView === 'shopify' ? shopifyImages[currentShopify] : metaImages[currentMeta]} 
                  alt="Enlarged result" 
                  className={`max-w-[95vw] max-h-[95vh] md:max-w-[85vw] md:max-h-[85vh] object-contain origin-center ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
               />
            </div>
            
            {/* Modal Controls */}
            <button 
              onClick={(e) => { e.stopPropagation(); modalView === 'shopify' ? prevShopify() : prevMeta(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-[110] border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); modalView === 'shopify' ? nextShopify() : nextMeta(); }}
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
