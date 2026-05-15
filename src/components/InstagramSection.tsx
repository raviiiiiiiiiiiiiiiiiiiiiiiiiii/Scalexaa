import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-24 bg-gray-50 border-t border-gray-100 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Instagram className="w-4 h-4" />
              <span>@scalexa.0</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">
              Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
              Get behind-the-scenes insights, marketing tips, and real-time case studies on our Instagram.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          >
            <a 
              href="https://www.instagram.com/scalexa.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-text-dark text-white hover:bg-gray-800 px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
