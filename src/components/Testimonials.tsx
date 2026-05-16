import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Testimonials() {
  const testimonials = [
    "https://i.ibb.co/0pjz0mjX/IMG-20260515-193339.jpg",
    "https://i.ibb.co/k28qyw2w/IMG-20260515-193355.jpg",
    "https://i.ibb.co/ns88cfqR/IMG-20260515-193417.jpg"
  ];

  return (
    <section className="py-20 md:py-24 bg-white px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Client Love
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2 flex-wrap"
          >
            <span className="text-text-dark">What Our Clients</span> <span className="text-gray-400">Say</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 md:gap-8 snap-x snap-mandatory no-scrollbar md:justify-center">
            {testimonials.map((img, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * i }}
                className="w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0 aspect-[9/16] bg-gray-50 rounded-2xl shadow-sm border border-gray-100 snap-center md:snap-start overflow-hidden hover:shadow-md transition-shadow relative group"
              >
                <img 
                  src={img} 
                  alt={`Client Feedback ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-2 md:hidden">
           <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
             Swipe to see more
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
           </p>
        </div>
      </div>
    </section>
  );
}
