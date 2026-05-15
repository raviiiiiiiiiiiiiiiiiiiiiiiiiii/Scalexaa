import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      time: "0:39"
    },
    {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      time: "0:41"
    },
    {
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1bfff1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      time: "0:32"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-dark">What our</span> <span className="text-gray-400">clients say</span>
          </h2>
          <p className="text-lg text-text-dark font-medium max-w-2xl mx-auto">
            Real brands. Real results. Here's what they achieved with Scalexa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-gray-100 group cursor-pointer"
            >
              <img 
                src={testi.img} 
                alt="Client testimonial" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-text-dark ml-1 fill-current" />
                </div>
              </div>
              
              {/* Fake Video Player Controls */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between text-white text-xs mb-2 font-medium">
                  <span>0:00 / {testi.time}</span>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                    <div className="flex flex-col gap-1 w-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden flex items-center">
                   <div className="h-full w-1/4 bg-white rounded-full"></div>
                   <div className="w-2 h-2 bg-white rounded-full -ml-1"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
