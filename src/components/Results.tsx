import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

export default function Results() {
  const shopifyImages = [
    "https://i.ibb.co/PsSvs5wH/IMG-20260515-081024.jpg",
    "https://i.ibb.co/x8JJYtbx/IMG-20260515-081044.jpg",
    "https://i.ibb.co/dsfMtZsj/IMG-20260515-081101.jpg",
    "https://i.ibb.co/nq1nMkfn/IMG-20260515-081116.jpg"
  ];
  
  const [currentShopify, setCurrentShopify] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const nextShopify = () => { setCurrentShopify((prev) => (prev + 1) % shopifyImages.length); setZoomLevel(1); };
  const prevShopify = () => { setCurrentShopify((prev) => (prev - 1 + shopifyImages.length) % shopifyImages.length); setZoomLevel(1); };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));

  return (
    <section className="py-20 md:py-24 bg-bg-pale px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Scalexa Delivers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-dark">Real Results from</span> <span className="text-primary">Real Campaigns</span>
          </h2>
          <p className="text-lg text-text-dark font-medium">
            Short, actionable proof that we deliver ROI — not just impressions.
          </p>
        </motion.div>

        <div className="w-full space-y-12">
          {/* Shopify Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-full object-contain mix-blend-multiply cursor-zoom-in"
                />
                
                <button 
                  onClick={(e) => { e.stopPropagation(); prevShopify(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-text-dark rounded-full flex items-center justify-center shadow-md transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); nextShopify(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white text-text-dark rounded-full flex items-center justify-center shadow-md transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">Meta Ads Dashboard Overview</h3>
              <p className="text-sm md:text-base text-text-muted mb-8 max-w-2xl mx-auto">
                These screenshots show our expertise in creating and optimizing Meta Ads campaigns that deliver measurable ROI.
              </p>
              
              {/* Mock Meta Table */}
              <div className="w-full overflow-x-auto mb-6 bg-white border border-gray-100 rounded-xl">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="p-4 text-sm font-semibold text-gray-500">Campaign Name</th>
                      <th className="p-4 text-sm font-semibold text-gray-500">Results</th>
                      <th className="p-4 text-sm font-semibold text-gray-500">Reach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Conv_D2C_Scaling_Broad", res: "342", reach: "124,500" },
                      { name: "Retargeting_Hot_30D", res: "128", reach: "15,200" },
                      { name: "Adv+_Shopping_Scale", res: "512", reach: "245,100" },
                      { name: "Test_New_Creatives_V3", res: "45", reach: "32,450" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 font-medium text-text-dark">{row.name}</td>
                        <td className="p-4 text-text-muted">{row.res}</td>
                        <td className="p-4 text-text-muted">{row.reach}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 touch-none overflow-hidden"
          >
            <button 
              onClick={() => { setIsModalOpen(false); setZoomLevel(1); }}
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
                  src={shopifyImages[currentShopify]} 
                  alt="Enlarged result" 
                  className={`max-w-[95vw] max-h-[95vh] md:max-w-[85vw] md:max-h-[85vh] object-contain origin-center ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
               />
            </div>
            
            {/* Modal Controls */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevShopify(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-[110] border border-white/20"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextShopify(); }}
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
