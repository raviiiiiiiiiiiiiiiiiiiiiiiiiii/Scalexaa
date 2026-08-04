import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

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
    <section id="services" className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block bg-[#0199e3]/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="text-text-dark">Services That Deliver.</span> <span className="text-gray-400">Results That Pay</span>
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * i }}
              className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col snap-start overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-dark mb-2">{service.title}</h3>
                <p className="text-text-muted mb-6 flex-grow">{service.desc}</p>
                <div>
                  <motion.a 
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    href="https://wa.me/918200306143" target="_blank" rel="noopener noreferrer" 
                    className="w-max bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium inline-block text-center"
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
