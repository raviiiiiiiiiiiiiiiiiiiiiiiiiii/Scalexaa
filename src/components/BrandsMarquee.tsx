import { motion } from 'motion/react';

export default function BrandsMarquee() {
  const brands = [
    { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Shopify", src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "WooCommerce", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" },
    { name: "Razorpay", src: "https://razorpay.com/assets/razorpay-glyph.svg" },
    { name: "Cashfree", src: "https://upload.wikimedia.org/wikipedia/commons/archive/8/80/20230811165011%21Cashfree_Logo.svg" },
    { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" }
  ];
  
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Worked with Amazing Brands</h2>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
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
            <div className="flex items-center gap-12 pr-12 shrink-0">
              {brands.map((brand, i) => (
                <img key={`b1-${i}`} src={brand.src} alt={brand.name} className="h-8 w-auto grayscale opacity-70 object-contain" />
              ))}
            </div>
            <div className="flex items-center gap-12 pr-12 shrink-0">
              {brands.map((brand, i) => (
                <img key={`b2-${i}`} src={brand.src} alt={brand.name} className="h-8 w-auto grayscale opacity-70 object-contain" />
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
