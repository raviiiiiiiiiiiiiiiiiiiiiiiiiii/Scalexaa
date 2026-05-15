import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

const services = [
  {
    title: "Meta Ads Campaign Strategy",
    desc: "Customized ad strategies tailored for D2C, Ecomm & Dropshipping brands to maximize ROI.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Full Campaign Setup",
    desc: "End-to-end setup from targeting, creatives, to placements ensuring high-performing campaigns.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Creative & Audience Testing",
    desc: "Continuous testing of ad creatives, copies, and audiences to identify winning combinations.",
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Scaling & Optimization",
    desc: "Data-driven scaling techniques to increase budget while maintaining or improving ROAS.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Performance Monitoring & Reporting",
    desc: "Real-time tracking and comprehensive reporting of key metrics and campaign performance.",
    img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ROI-Focused Growth Planning",
    desc: "Long-term strategic planning to ensure sustainable and profitable business growth.",
    img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark flex items-center justify-center gap-2">
            Services That Deliver. Results That Pay <Rocket className="w-8 h-8 text-red-500" />
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col snap-start overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-56 w-full relative overflow-hidden bg-gray-50 flex-shrink-0">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-dark mb-2">{service.title}</h3>
                <p className="text-text-muted mb-6 flex-grow">{service.desc}</p>
                <button className="w-max bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
