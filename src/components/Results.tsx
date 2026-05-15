import { motion } from 'motion/react';

export default function Results() {
  return (
    <section className="py-20 md:py-24 bg-bg-pale px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Scalexa Delivers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-dark">Real Results from</span> <span className="text-primary">Real Campaigns</span>
          </h2>
          <p className="text-lg text-text-dark font-medium">
            Short, actionable proof that we deliver ROI — not just impressions.
          </p>
        </motion.div>

        <div className="w-full space-y-12">
          {/* Shopify Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm text-center"
          >
            <h3 className="text-3xl font-bold text-text-dark mb-4">Shopify Dashboard Overview</h3>
            <p className="text-text-muted mb-10 max-w-2xl mx-auto">
              These brands grew from zero with our strategy, optimization, and consistent execution.
            </p>
            
            <div className="bg-primary rounded-[2rem] p-4 md:p-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative pt-12 pb-4 px-4 bg-gray-50">
                <div className="absolute top-0 left-0 w-full h-10 bg-gray-100 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Mock Shopify Graph */}
                <div className="w-full h-64 bg-white rounded flex items-center justify-center p-4">
                  <div className="w-full h-full relative">
                    <div className="flex justify-between items-end h-full gap-2 opacity-20">
                      {[10, 20, 15, 30, 40, 25, 50, 60, 45, 70, 80, 60, 90].map((v, i) => (
                        <div key={i} className="w-full bg-primary rounded-t" style={{ height: `${v}%` }}></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-between py-2 border-l border-b border-gray-200"></div>
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,80 Q10,70 20,80 T40,60 T60,50 T80,30 T100,10" fill="none" stroke="#2563EB" strokeWidth="2" />
                      <circle cx="100" cy="10" r="2" fill="#2563EB" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </motion.div>

          {/* Meta Ads Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm text-center"
          >
            <h3 className="text-3xl font-bold text-text-dark mb-4">Meta Ads Dashboard Overview</h3>
            <p className="text-text-muted mb-10 max-w-2xl mx-auto">
              These screenshots show our expertise in creating and optimizing Meta Ads campaigns that deliver measurable ROI.
            </p>
            
            <div className="bg-primary rounded-[2rem] p-4 md:p-8">
               <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                 <div className="border-b border-gray-100 p-4 font-mono text-sm font-bold bg-gray-50 flex items-center gap-4">
                    <span>Performance</span>
                    <span className="text-primary border-b-2 border-primary pb-1">Customize Columns</span>
                 </div>
                 {/* Mock Meta Table */}
                 <div className="w-full overflow-x-auto">
                   <table className="w-full text-left text-xs whitespace-nowrap">
                     <thead className="bg-gray-50 border-b border-gray-100">
                       <tr>
                         <th className="p-3 font-medium">Campaign Name</th>
                         <th className="p-3 font-medium">Results</th>
                         <th className="p-3 font-medium">Reach</th>
                         <th className="p-3 font-medium">Cost per result</th>
                         <th className="p-3 font-medium">Amount spent</th>
                         <th className="p-3 font-medium text-green-600">Purchases ROAS</th>
                       </tr>
                     </thead>
                     <tbody>
                       {[
                         { name: "Conv_D2C_Scaling_Broad", res: "342", reach: "124,500", cpr: "₹142.50", spent: "₹48,735", roas: "12.4x" },
                         { name: "Retargeting_Hot_30D", res: "128", reach: "15,200", cpr: "₹85.20", spent: "₹10,905", roas: "18.2x" },
                         { name: "Adv+_Shopping_Scale", res: "512", reach: "245,100", cpr: "₹165.10", spent: "₹84,531", roas: "9.8x" },
                         { name: "Test_New_Creatives_V3", res: "45", reach: "32,450", cpr: "₹210.00", spent: "₹9,450", roas: "6.5x" },
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-50">
                           <td className="p-3 font-medium">{row.name}</td>
                           <td className="p-3 text-text-muted">{row.res}</td>
                           <td className="p-3 text-text-muted">{row.reach}</td>
                           <td className="p-3 text-text-muted">{row.cpr}</td>
                           <td className="p-3 text-text-muted">{row.spent}</td>
                           <td className="p-3 font-bold text-green-600">{row.roas}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
