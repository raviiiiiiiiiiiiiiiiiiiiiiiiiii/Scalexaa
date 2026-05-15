export default function BrandsMarquee() {
  const brands = [
    "Shopify", "Meta", "Google", "WooCommerce", "Razorpay", "Cashfree", "Adobe", "AiSensy"
  ];
  
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Worked with Amazing Brands</h2>
      </div>
      
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="marquee">
          <div className="marquee-content items-center">
            {brands.map((brand, i) => (
              <div key={`brand-1-${i}`} className="text-2xl font-bold text-gray-400 opacity-60 whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
          <div className="marquee-content items-center" aria-hidden="true">
            {brands.map((brand, i) => (
              <div key={`brand-2-${i}`} className="text-2xl font-bold text-gray-400 opacity-60 whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
