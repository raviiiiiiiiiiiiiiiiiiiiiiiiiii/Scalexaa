import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/casestudies';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { renderTextWithHighlights } from '../utils/highlight';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen pt-32 text-center bg-white px-4">
        <h1 className="text-3xl font-bold mb-4 text-text-dark">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-primary hover:underline font-medium inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
        </Link>
      </div>
    );
  }

  const totalProofs = study.metaImages.length + study.shopifyImages.length;

  return (
    <div className="bg-white min-h-screen flex flex-col pt-24">
      <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* Back Button */}
        <Link 
          to="/case-studies" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
        </Link>

        {/* Header Block */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
              {study.niche}
            </span>
            {study.websiteUrl && (
              <span className="inline-block bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
                Active Brand
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark tracking-tight mb-4">
            {study.brand}
          </h1>
          {study.websiteUrl && (
            <a 
              href={study.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary transition-colors hover:underline"
            >
              Visit Website <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          )}
        </div>

        {/* Stats Grid - Unified, Clean, Responsive with no empty columns */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-text-dark mb-4">Campaign Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {study.results.map((res, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4 md:p-6 text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{res.value}</p>
                <p className="text-xs md:text-sm text-gray-500 font-medium">{res.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-text-dark mb-4">The Challenge</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {renderTextWithHighlights(study.challenge)}
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-text-dark mb-4">Our Strategy</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {study.strategy}
            </p>
          </div>
        </div>

        {/* Verified Campaign Screenshots - Centered perfectly if only one proof exists */}
        {totalProofs > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-bold text-text-dark mb-4">Campaign Proof</h2>
            <div className={`grid gap-6 ${
              totalProofs > 1 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1 max-w-2xl mx-auto'
            }`}>
              {study.metaImages.map((img, i) => (
                <div key={`meta-${i}`} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Meta Ads Dashboard Proof</h3>
                  <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-50/50 p-2">
                    <img src={img} alt="Meta Ads Proof" className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-sm" />
                  </div>
                </div>
              ))}
              {study.shopifyImages.map((img, i) => (
                <div key={`shopify-${i}`} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Shopify Dashboard Proof</h3>
                  <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-50/50 p-2">
                    <img src={img} alt="Shopify Proof" className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/10 rounded-2xl p-6 md:p-10 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">Want to scale your brand like {study.brand}?</h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Let us set up and optimize high-converting marketing campaigns for your brand.
          </p>
          <a 
            href="https://wa.me/918200306143" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
