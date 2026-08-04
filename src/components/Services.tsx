import { motion } from 'motion/react';

const services = [
  {
    title: "Meta Ads Campaign Strategy",
    desc: "Customized ad strategies tailored for D2C, Ecomm & Dropshipping brands to maximize ROI."
  },
  {
    title: "Full Campaign Setup",
    desc: "End-to-end setup from targeting, creatives, to placements ensuring high-performing campaigns."
  },
  {
    title: "Creative & Audience Testing",
    desc: "Continuous testing of ad creatives, copies, and audiences to identify winning combinations."
  },
  {
    title: "Scaling & Optimization",
    desc: "Data-driven scaling techniques to increase budget while maintaining or improving ROAS."
  },
  {
    title: "Performance Monitoring & Reporting",
    desc: "Real-time tracking and comprehensive reporting of key metrics and campaign performance."
  },
  {
    title: "ROI-Focused Growth Planning",
    desc: "Long-term strategic planning to ensure sustainable and profitable business growth."
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative z-10 bg-white px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-24 md:pb-32 overflow-hidden shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-black uppercase text-text-dark tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          OUR SERVICES
        </motion.h2>

        {/* LIST LAYOUT */}
        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,0,0.15)] last:border-b-0"
              >
                {/* Big Number Left */}
                <div 
                  className="font-black text-text-dark leading-none tracking-tighter shrink-0 select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {num}
                </div>

                {/* Name + Description Stacked Right */}
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 
                    className="font-medium uppercase text-text-dark tracking-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="font-light text-text-dark leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

