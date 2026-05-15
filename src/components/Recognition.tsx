import { motion } from 'motion/react';

export default function Recognition() {
  const images = [
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary uppercase tracking-tight mb-4">
            RESULTS THAT SPEAK
          </h2>
          <p className="text-lg text-text-dark font-medium max-w-2xl mx-auto">
            Delivering consistent Meta Ads performance with expert audience research, precise optimization, and proven scaling strategies.
          </p>
        </motion.div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
           <motion.img 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
             src={images[0]} className="w-full h-48 md:h-64 object-cover rounded-2xl" 
           />
           <motion.img 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
             src={images[1]} className="w-full h-48 md:h-64 object-cover rounded-2xl col-span-2 md:col-span-1" 
           />
           <motion.img 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
             src={images[2]} className="w-full h-48 md:h-64 object-cover rounded-2xl col-span-2 md:col-span-1" 
           />
           
           <motion.img 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
             src={images[3]} className="w-full h-48 md:h-64 object-cover rounded-2xl col-span-2 md:col-span-1" 
           />
           <motion.img 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
             src={images[4]} className="w-full h-48 md:h-64 object-cover rounded-2xl hidden md:block" 
           />
           <motion.img 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
             src={images[5]} className="w-full h-48 md:h-64 object-cover rounded-2xl col-span-2 md:col-span-1" 
           />
        </div>
      </div>
    </section>
  );
}
