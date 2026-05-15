import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function LiveNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Auto dismiss after 6 seconds of being visible
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeUp}
          className="fixed bottom-6 left-6 z-50 bg-white p-4 rounded-xl shadow-xl flex items-start gap-4 max-w-sm border border-gray-100"
        >
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0 overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Arjun&backgroundColor=fce7f3" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-text-dark">
              <span className="font-bold">Arjun</span> just booked a free call
            </p>
            <p className="text-xs text-text-muted mt-1">2 hours ago</p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-300 to-purple-300 w-full rounded-b-xl opacity-50"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
