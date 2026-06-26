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
    "https://i.ibb.co/xqWSRKjL/Screenshot-2025-11-09-133245.png",
    "https://i.ibb.co/bggC4Fdd/Screenshot-2025-11-09-131542.png",
    "https://i.ibb.co/k2m5sbcW/Screenshot-2025-11-09-131516.png",
    "https://i.ibb.co/D3YJk1t/Screenshot-2025-11-05-203658.png",
    "https://i.ibb.co/7tzjwBXF/Screenshot-2025-11-04-151024.png",
    "https://i.ibb.co/B5SG9CZ5/Screenshot-2025-11-04-151002.png",
    "https://i.ibb.co/XfVJ1HD1/Screenshot-2025-11-02-223105.png",
    "https://i.ibb.co/qLN511zb/Screenshot-2025-11-01-230549.png",
    "https://i.ibb.co/tP11mBQs/Screenshot-2025-11-01-230518.png",
    "https://i.ibb.co/SD5ggFz1/Screenshot-2025-10-27-124154.png",
    "https://i.ibb.co/vCRybKvr/Screenshot-2025-11-01-230529.png",
    "https://i.ibb.co/hF4f6Nrd/Screenshot-2025-12-11-131315.png",
    "https://i.ibb.co/8gwh3Xp2/Screenshot-2025-12-23-220257.png",
    "https://i.ibb.co/MyXQXLHP/Screenshot-2025-12-23-220206.png",
    "https://i.ibb.co/r2QxVTPp/Screenshot-2026-05-14-133325.png"
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
            className="text-lg text-text-dark font-medium"
          >
            Short, actionable proof that we deliver ROI — not just impressions.
          </motion.p>
        </div>

        <div className="w-full space-y-12">
          {/* Shopify Dashboard Card */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.1 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">Shopify Dashboard Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {shopifyImages.slice(0, 4).map((img, i) => (
                  <div 
                    key={i} 
                    className="w-full relative bg-gray-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-zoom-in border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => { setCurrentShopify(i); setModalView('shopify'); setZoomLevel(1); }}
                  >
                    <img src={img} alt={`Shopify Result ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>
              
              <p className="text-center text-lg md:text-xl text-text-muted italic mb-8 max-w-3xl mx-auto font-medium">
                ☝🏻 "These brands grew from zero with our strategy, optimization, and consistent execution."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {shopifyImages.slice(4, 8).map((img, i) => (
                  <div 
                    key={i + 4} 
                    className="w-full relative bg-gray-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-zoom-in border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => { setCurrentShopify(i + 4); setModalView('shopify'); setZoomLevel(1); }}
                  >
                    <img src={img} alt={`Shopify Result ${i + 5}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>

              <p className="text-center text-lg md:text-xl text-text-muted italic mb-8 max-w-3xl mx-auto font-medium">
                 ☝🏻 "Scaling e-commerce brands efficiently through meticulous tracking and store optimization."
              </p>
            </div>
          </motion.div>

          {/* Meta Ads Dashboard Card */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.1 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">Meta Ads Dashboard Overview</h3>

              {/* Master Meta Ads Manager Performance Card */}
              <div className="max-w-xl mx-auto mb-12 bg-gray-50/50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-400 block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-400 block"></span>
                    </div>
                    <span className="text-xs font-semibold text-text-muted ml-1 tracking-wider uppercase font-mono">Meta Ads Manager</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-[10px] uppercase font-mono tracking-wider font-bold px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live Campaign Running
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-primary/20 transition-all">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-1">ROAS</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">8.4x</span>
                      <span className="text-green-500 text-xs font-semibold">↑ Active</span>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-primary/20 transition-all">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-1">Revenue</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">₹14.2L</span>
                      <span className="text-green-500 text-xs font-semibold">Scaled</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-primary/20 transition-all">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-1">CPR</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">₹220</span>
                      <span className="text-emerald-600 text-xs font-semibold">Optimized</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-primary/20 transition-all">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-1">Orders</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">552</span>
                      <span className="text-green-500 text-xs font-semibold">Shipped</span>
                    </div>
                  </div>
                </div>

                {/* Footnote / Proof description */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed font-medium">
                    This performance summary demonstrates Scalexa's elite funnel architecture: maintaining high conversion rates with optimized CPA/CPR, leading to consistent profitability on scaling budgets.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {metaImages.slice(0, 4).map((img, i) => (
                  <div 
                    key={i} 
                    className="w-full relative bg-gray-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-zoom-in border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => { setCurrentMeta(i); setModalView('meta'); setZoomLevel(1); }}
                  >
                    <img src={img} alt={`Meta Result ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>

              <p className="text-center text-lg md:text-xl text-text-muted italic mb-8 max-w-3xl mx-auto font-medium">
                ☝🏻 "These screenshots show our expertise in creating and optimizing Meta Ads campaigns that deliver measurable ROI for e-commerce brands."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {metaImages.slice(4, 8).map((img, i) => (
                  <div 
                    key={i + 4} 
                    className="w-full relative bg-gray-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-zoom-in border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => { setCurrentMeta(i + 4); setModalView('meta'); setZoomLevel(1); }}
                  >
                    <img src={img} alt={`Meta Result ${i + 5}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>

              <p className="text-center text-lg md:text-xl text-text-muted italic mb-8 max-w-3xl mx-auto font-medium">
                ☝🏻 "Each campaign is backed by in-depth analysis and strategic adjustments to maximize ad performance and minimize wasted spend."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {metaImages.slice(8, 12).map((img, i) => (
                  <div 
                    key={i + 8} 
                    className="w-full relative bg-gray-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-zoom-in border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => { setCurrentMeta(i + 8); setModalView('meta'); setZoomLevel(1); }}
                  >
                    <img src={img} alt={`Meta Result ${i + 9}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>

              <p className="text-center text-lg md:text-xl text-text-muted italic mb-8 max-w-3xl mx-auto font-medium">
                ☝🏻 "Delivering consistent Meta Ads performance with expert audience research, precise optimization, and proven scaling strategies."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {metaImages.slice(12, 15).map((img, i) => (
                  <div 
                    key={i + 12} 
                    className="w-full relative bg-gray-50 rounded-xl overflow-hidden aspect-video flex items-center justify-center group cursor-zoom-in border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => { setCurrentMeta(i + 12); setModalView('meta'); setZoomLevel(1); }}
                  >
                    <img src={img} alt={`Meta Result ${i + 13}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>

              <p className="text-center text-lg md:text-xl text-text-muted italic mb-8 max-w-3xl mx-auto font-medium">
                ☝🏻 "Constant testing of new creatives and audiences ensures our campaigns remain highly profitable at scale."
              </p>
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
