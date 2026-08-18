import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Plane, Cpu, Gauge, Shield, Zap } from 'lucide-react';

const programs = [
  {
    icon: Rocket,
    title: 'Next-Gen eVTOL Flight Control',
    role: 'Program Lead',
    company: 'Honeywell',
    description: 'Led architecture, integration, and verification of safety-critical flight control software for electric vertical takeoff and landing aircraft programs across cross-functional avionics teams.',
    scope: ['Hardware/Software Integration', 'Lab Automation', 'V&V Campaigns', 'Vendor Coordination'],
    impact: '$1M+ automation savings',
    standard: 'DO-178C Level A',
    category: 'Urban Air Mobility',
  },
  {
    icon: Plane,
    title: 'Boeing 787 Flight Systems Delivery',
    role: 'Technical Program Owner',
    company: 'Honeywell',
    description: 'Managed end-to-end software delivery for the Boeing 787 Dreamliner flight control system, achieving industry-leading 0.001 defect density across multi-vendor integration.',
    scope: ['Multi-vendor Integration', 'Defect Tracking', 'Milestone Delivery', 'Customer Interface'],
    impact: '0.001 defect density',
    standard: 'DO-178C Level A',
    category: 'Commercial Aviation',
  },
  {
    icon: Cpu,
    title: 'FADEC Propulsion Control',
    role: 'Program Lead',
    company: 'Honeywell',
    description: 'Drove full lifecycle delivery of Full Authority Digital Engine Control systems from requirements elicitation through DO-178C Level-A certification for multiple engine programs.',
    scope: ['Requirements Management', 'Design Reviews', 'Certification Pathway', 'Test Strategy'],
    impact: '0.002% defect density',
    standard: 'DO-178C Level A',
    category: 'Propulsion',
  },
  {
    icon: Gauge,
    title: 'HIL Automation Transformation',
    role: 'Initiative Owner',
    company: 'Honeywell',
    description: 'Conceived, scoped, and delivered an enterprise-wide hardware-in-loop test automation initiative using Python, LabVIEW, and C#, transforming manual test processes.',
    scope: ['Business Case', 'Tool Selection', 'Team Enablement', 'ROI Tracking'],
    impact: '$2M+ / 2,000 man-hours saved',
    standard: 'Six Sigma Green Belt',
    category: 'Test Automation',
  },
  {
    icon: Shield,
    title: 'Boeing 787 Wing Ice Protection',
    role: 'Technical Lead',
    company: 'Alten → Boeing',
    description: 'Coordinated safety-critical Wing Ice Protection System delivery across the Boeing/Alten partnership boundary, ensuring DO-178C compliance and integration milestones.',
    scope: ['Cross-company Coordination', 'Safety Analysis', 'Integration Testing', 'Defect Resolution'],
    impact: '0.02% defect density',
    standard: 'DO-178C Level A',
    category: 'Safety Systems',
  },
  {
    icon: Zap,
    title: 'Landing Gear Control Systems',
    role: 'Program Lead',
    company: 'Honeywell',
    description: 'Drove Level-A certification milestone delivery for critical landing gear control systems, managing cross-functional dependencies and risk registers.',
    scope: ['Certification Milestones', 'Risk Management', 'Cross-functional Dependencies', 'Review Gates'],
    impact: 'Level-A certified',
    standard: 'DO-178C Level A',
    category: 'Mechanical Systems',
  },
];

const ProgramCard = ({ program, index }: { program: typeof programs[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = program.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -0.5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="card-whiteboard rounded-xl overflow-hidden group"
    >
      <div className="relative p-6 border-b-2 border-border">
        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-marker-blue/10 border-2 border-marker-blue/30 flex items-center justify-center group-hover:bg-marker-blue/20 transition-colors">
            <Icon className="w-6 h-6 text-marker-blue" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-sketch text-marker-blue uppercase tracking-wider">{program.category}</span>
            <h3 className="text-lg font-handwritten font-bold text-foreground mt-1">{program.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="tag-marker-red text-[10px]">{program.role}</span>
              <span className="text-sm font-sketch text-muted-foreground">{program.company}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{program.description}</p>

        <div className="mb-4">
          <span className="text-xs font-sketch text-marker-blue uppercase tracking-wider mb-2 block">Program Scope</span>
          <div className="flex flex-wrap gap-2">
            {program.scope.map((s, i) => (
              <span key={i} className="tag-marker">{s}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t-2 border-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-marker-green animate-pulse" />
            <span className="text-sm font-sketch text-marker-red font-semibold">{program.impact}</span>
          </div>
          <span className="text-[10px] font-sketch text-muted-foreground uppercase">{program.standard}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="programs" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase mb-4">
            Aerospace Program Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            <span className="text-marker-black">PROGRAMS </span>
            <span className="text-marker-blue marker-underline">I'VE SHIPPED</span>
          </h2>
          <div className="divider-sketch max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Safety-critical aerospace programs delivered across Boeing, Embraer, Gulfstream, and Comac platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
