import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function UnpaidSection() {
  return (
    <section className="py-16 md:py-24 bg-red-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
          <div className="mx-auto w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment Notice
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-600">
            <p>
              This website was developed as part of a professional agreement. However, we would like to publicly state that <strong>Sadan Mansuri didn't pay his invoice even till this date</strong>.
            </p>
            <p className="font-semibold text-red-600 text-xl py-4">
              Sadan Mansuri please pay the remaining ₹900.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              We continue to request the clearance of this outstanding invoice to resolve this dispute fairly and professionally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
