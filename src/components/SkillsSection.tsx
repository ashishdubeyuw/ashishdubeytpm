import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Code, Users, Gauge, Brain, Shield } from 'lucide-react';

const competencies = [
  {
    icon: Target,
    title: 'Program Execution',
    skills: ['Agile / Scrum', 'Milestone Planning', 'Risk Registers & RAID Logs', 'OKR Tracking', 'Gate Reviews'],
    color: 'border-marker-blue',
  },
  {
    icon: Code,
    title: 'Technical Depth',
    skills: ['NVIDIA GB10 / NVLink-C2C', 'Embedded C', 'PyTorch / CUDA', 'DO-178C / ISO 26262', 'FastAPI / WebSockets'],
    color: 'border-marker-blue',
  },
  {
    icon: Users,
    title: 'Cross-Functional Leadership',
    skills: ['Stakeholder Alignment', 'Vendor Management (Boeing, Embraer)', 'Executive Communications', 'Customer Interface', 'Team Mentorship'],
    color: 'border-marker-red',
  },
  {
    icon: Gauge,
    title: 'Delivery & Operations',
    skills: ['CI/CD Pipelines', 'Test Automation ($3M+ ROI)', 'HIL Lab Management', 'V&V Process Ownership', 'Defect Tracking'],
    color: 'border-marker-blue',
  },
  {
    icon: Brain,
    title: 'AI/ML & Edge Compute',
    skills: ['Conformal Prediction', 'GRU Autoencoders', 'Edge LLM Orchestration', 'RAG / LangChain', 'Sensor Fusion'],
    color: 'border-marker-red',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    skills: ['DO-178C Level A (×6)', 'ISO 26262 ASIL-D', 'ISO 21448 SOTIF', 'Six Sigma Green Belt', 'NHTSA SGO'],
    color: 'border-marker-blue',
  },
];

const CompetencyCard = ({ category, index }: { category: typeof competencies[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-whiteboard rounded-xl p-6 group hover:scale-[1.02] transition-transform duration-300 border-l-4 ${category.color}`}
    >
      <div className="w-14 h-14 rounded-xl bg-marker-blue/8 border-2 border-marker-blue/20 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-marker-blue" />
      </div>

      <h3 className="text-xl font-handwritten font-bold text-foreground mb-4">{category.title}</h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, si) => (
          <motion.span
            key={si}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + si * 0.05 }}
            className="tag-marker"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="competencies" className="py-24 relative bg-whiteboard-grid">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase mb-4">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            <span className="text-marker-black">TPM </span>
            <span className="text-marker-blue marker-underline">COMPETENCY MATRIX</span>
          </h2>
          <div className="divider-sketch max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competencies.map((c, i) => (
            <CompetencyCard key={i} category={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
