import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function BrandsMarquee() {
  const brands = [
    { name: "Brand 1", src: "https://i.ibb.co/gM8vXKj3/1000056915-removebg-preview.png" },
    { name: "Brand 2", src: "https://i.ibb.co/Q3Tc7cjf/1000056913-removebg-preview.png" },
    { name: "Brand 3", src: "https://i.ibb.co/DfynYTh5/1000056912-removebg-preview.png" },
    { name: "Brand 4", src: "https://i.ibb.co/99TT9YvS/1000056911-removebg-preview.png" },
    { name: "Brand 5", src: "https://i.ibb.co/Q7cQX0VC/1000056916-removebg-preview.png" },
    { name: "Brand 6", src: "https://i.ibb.co/TMZvbYLK/1000056910-removebg-preview.png" },
    { name: "Brand 7", src: "https://i.ibb.co/SDHMs8V7/1000056909-removebg-preview.png" }
  ];
  
  return (
    <section className="pt-12 pb-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="text-center mb-8">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
          <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Trusted Partners
          </span>
        </motion.div>
        <motion.h2 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="text-text-dark">Worked with Amazing</span> <span className="text-gray-400">Brands</span>
        </motion.h2>
      </div>
      
      <motion.div 
        initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee Container */}
        <div className="overflow-hidden whitespace-nowrap flex">
          <div 
            className="flex items-center"
            style={{ animation: 'marquee 20s linear infinite' }}
          >
            <div className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 shrink-0">
              {brands.map((brand, i) => (
                <img key={`b1-${i}`} src={brand.src} alt={brand.name} className="h-16 md:h-24 w-auto object-contain" />
              ))}
            </div>
            <div className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 shrink-0">
              {brands.map((brand, i) => (
                <img key={`b2-${i}`} src={brand.src} alt={brand.name} className="h-16 md:h-24 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}} />
      </motion.div>
    </section>
  );
}
