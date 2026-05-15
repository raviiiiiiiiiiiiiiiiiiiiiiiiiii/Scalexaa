import { motion } from 'motion/react';
import { ClipboardList, Pointer, Play, Star } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-teal-700" />,
    title: "Discovery Call",
    desc: "We learn about your brand, goals, current ad setup, and target audience.",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    align: "md:ml-0",
  },
  {
    icon: <Pointer className="w-6 h-6 text-purple-700" />,
    title: "Strategy & Creative Setup",
    desc: "We build your funnel, audiences, ad creatives, and full campaign structure.",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-200",
    align: "md:ml-24",
  },
  {
    icon: <Play className="w-6 h-6 text-white" />,
    title: "Launch & Optimize",
    desc: "Campaigns go live. We monitor, A/B test, and scale what's working.",
    bgColor: "bg-blue-500",
    iconBg: "bg-blue-400 bg-opacity-30",
    textColor: "text-white",
    descColor: "text-blue-100",
    align: "md:ml-48",
  },
  {
    icon: <Star className="w-6 h-6 text-indigo-100" />,
    title: "Reports & Scaling",
    desc: "Weekly transparent reports with ROAS, sales, and a clear scaling roadmap.",
    bgColor: "bg-indigo-900",
    iconBg: "bg-indigo-800",
    textColor: "text-white",
    descColor: "text-indigo-200",
    align: "md:ml-72",
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-white px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text-dark">How it</span> <span className="text-gray-400">works</span>
          </h2>
          <p className="text-lg text-text-dark font-medium">
            From first call to profitable scaling — we make it seamless.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-6 rounded-2xl w-full md:w-3/4 flex gap-4 ${step.bgColor} ${step.align}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${step.iconBg}`}>
                {step.icon}
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${step.textColor || 'text-text-dark'}`}>
                  {step.title}
                </h3>
                <p className={`text-base ${step.descColor || 'text-text-muted'}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
