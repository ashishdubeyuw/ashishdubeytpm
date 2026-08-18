import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  { value: '8+', label: 'Programs Shipped', note: '6 aerospace + 2 AI', color: 'text-marker-blue' },
  { value: '$5M+', label: 'Cost Savings', note: 'Verified ROI', color: 'text-marker-red' },
  { value: '0.001', label: 'Defect Density', note: 'Industry-leading', color: 'text-marker-green' },
  { value: '10+', label: 'Cross-Functional Teams', note: 'Boeing, Embraer, Gulfstream', color: 'text-marker-blue' },
  { value: 'Level-A', label: 'Safety Certification', note: 'DO-178C × 6 programs', color: 'text-marker-red' },
  { value: '3,000', label: 'Fuzz Tests Verified', note: 'NVIDIA GB10 Sentinel', color: 'text-marker-green' },
];

const MetricsDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 relative bg-whiteboard-grid">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-red/30 bg-marker-red/5 text-marker-red font-sketch text-sm tracking-widest uppercase mb-4">
            Delivery Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-3">
            <span className="text-marker-black">TPM </span>
            <span className="text-marker-blue marker-underline">Metrics Dashboard</span>
          </h2>
          <div className="divider-sketch-red max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: (i % 2 === 0 ? -0.5 : 0.5) } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-sketch rounded-xl p-4 text-center"
            >
              <div className={`text-3xl md:text-4xl font-handwritten font-bold ${m.color}`}>
                {m.value}
              </div>
              <div className="text-sm font-sketch text-foreground mt-1">{m.label}</div>
              <div className="text-[10px] font-body text-muted-foreground mt-1 italic">{m.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
