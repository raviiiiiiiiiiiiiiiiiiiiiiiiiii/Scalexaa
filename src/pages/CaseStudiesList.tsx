import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/casestudies';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CaseStudiesList() {
  return (
    <div className="pt-24 bg-white min-h-screen flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto px-4 w-full pb-20">
        <div className="text-center mb-16 mt-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-text-dark">Case Studies</span> <span className="text-primary cursor-pointer hover:underline decoration-primary">That Speak</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-lg text-gray-600 font-medium"
          >
            Real brands. Real budgets. Real results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-6">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={study.slug}
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="mb-6">
                <span className="inline-block bg-gray-50 text-gray-500 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide mt-1">
                  {study.niche}
                </span>
                <h2 className="text-2xl font-bold text-text-dark">{study.brand}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-primary font-bold text-xl md:text-2xl leading-none mb-1">{result.value}</p>
                    <p className="text-gray-500 text-xs md:text-sm font-medium">{result.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link 
                  to={`/case-studies/${study.slug}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition-colors group"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
