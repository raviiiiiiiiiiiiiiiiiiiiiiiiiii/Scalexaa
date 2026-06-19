import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertTriangle } from 'lucide-react';

export default function UnpaidPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden"
        >
          <div className="bg-red-50 px-4 py-3 border-b border-red-100 flex items-start justify-between">
            <div className="flex items-center gap-2 text-red-600 font-bold">
              <AlertTriangle className="w-5 h-5" />
              <span>Payment Pending</span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-red-400 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-5 text-gray-800">
            <p className="font-medium text-lg mb-2">Notice to Sadan Mansuri</p>
            <p className="text-sm text-gray-600">
              Sadan Mansuri please pay the remaining ₹900. Your invoice for the development of this website has not been paid even till this date.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
