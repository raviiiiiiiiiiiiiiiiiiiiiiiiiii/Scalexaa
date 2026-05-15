import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/casestudies';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-primary hover:underline">Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col pt-20">
      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10">
          <Link to="/case-studies" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          
          <div className="mb-4">
            <span className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              {study.niche}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">{study.brand}</h1>
          
          {study.websiteUrl && (
            <a 
              href={study.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Visit Website <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          )}
        </motion.div>

        {/* Results Bar */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {study.results.map((result, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-primary font-bold text-2xl md:text-3xl leading-none mb-2">{result.value}</p>
              <p className="text-gray-500 text-sm font-medium">{result.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">The Challenge</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{study.challenge}</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">Our Strategy</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{study.strategy}</p>
        </motion.div>

        {/* Images */}
        {study.metaImages.length > 0 && (
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-6">Meta Ads Dashboard</h2>
            <div className="space-y-6">
              {study.metaImages.map((src, i) => (
                <div 
                  key={i} 
                  className="rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setFullscreenImage(src)}
                >
                  <img src={src} alt={`Meta Ads Result ${i + 1}`} className="w-full object-contain" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.shopifyImages.length > 0 && (
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-6">Shopify Dashboard</h2>
            <div className="space-y-6">
              {study.shopifyImages.map((src, i) => (
                <div 
                  key={i} 
                  className="rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setFullscreenImage(src)}
                >
                  <img src={src} alt={`Shopify Result ${i + 1}`} className="w-full object-contain" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
          className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 text-center mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4 drop-shadow-sm">Want results like these?</h2>
          <p className="text-gray-600 font-medium mb-8">Stop wasting ad spend. Let's build a profitable acquisition system.</p>
          <a 
            href="https://wa.me/918200306143" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book a Free Call
          </a>
        </motion.div>
      </div>

      <Footer />

      {/* Fullscreen Image Lightbox */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setFullscreenImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 rounded-full p-2 transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setFullscreenImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={fullscreenImage}
              alt="Fullscreen Result"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
