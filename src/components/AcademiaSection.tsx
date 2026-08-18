import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Eye, Brain, Target, Cpu, Globe, Mic, Trophy } from 'lucide-react';

const aiPrograms = [
  {
    icon: ShieldCheck,
    title: 'Project Sentinel',
    subtitle: 'NVIDIA Grace Blackwell GB10 Runtime Assurance',
    description: 'Led a 3-person hackathon team from concept through working prototype in 72 hours. Coordinated architecture decisions across deterministic safety monitors, edge LLM benchmarking, and cryptographic audit systems on NVIDIA GB10 hardware.',
    problem: 'Autonomous AI systems lack mathematically verifiable safety guarantees for regulatory certification.',
    role: 'Program Lead & Architect',
    scope: ['3-person team', 'Architecture decisions', 'Benchmark execution', 'Presentation delivery'],
    tech: ['NVIDIA GB10', 'PyTorch/CUDA', 'Conformal Prediction', 'ISO 26262 ASIL-D', 'FastAPI'],
    stats: [
      { label: 'p99 Latency', value: '146 µs' },
      { label: 'Bandwidth', value: '900 GB/s' },
      { label: 'Spatial Acc.', value: '98.5%' },
      { label: 'Fuzz Tests', value: '3,000' },
    ],
    highlights: [
      'Coordinated 20 Hz out-of-band safety loop architecture achieving 146 µs p99 decision latency on GB10',
      'Directed 4-monitor parallel bank design: Conformal GRU Autoencoder, Mahalanobis CUSUM, EWMA Jitter, GIS Geofence',
      'Led edge LLM benchmarking campaign: Qwen 2.5 7B (98.5% accuracy) + Nemotron 3.5 Lite (82 FPS)',
      'Delivered SHA-256 hash-chained audit system and bit-identical replay for NHTSA compliance',
    ],
    category: 'Physical AI • NVIDIA GB10',
    award: 'NVIDIA Spark Hackathon 2026',
  },
  {
    icon: Eye,
    title: 'VortexEye',
    subtitle: 'AI Navigation PWA for Visually Impaired Users',
    description: 'Led development of a Progressive Web App combining camera-based CV with GPS routing, delivering seamless indoor-outdoor navigation for 285M+ visually impaired users globally.',
    problem: 'GPS fails indoors, creating a last-mile navigation gap for visually impaired users.',
    role: 'Technical Lead',
    scope: ['7-module architecture', 'Multi-sensor integration', 'User testing', 'Summit presentation'],
    tech: ['JavaScript', 'Python', 'COCO-SSD', 'OSRM', 'Web Speech API'],
    stats: [
      { label: 'Lines of Code', value: '3,200+' },
      { label: 'Modules', value: '7' },
      { label: 'Target Users', value: '285M+' },
      { label: 'Languages', value: '4' },
    ],
    highlights: [
      'Architected adaptive GPS/Camera mode switching with accuracy thresholds',
      'Coordinated real-time COCO-SSD object detection pipeline for doors, exits, stairs',
      'Delivered voice interface with NLP intent parsing for hands-free operation',
      'Shipped production-grade ring buffer logging system (1,000 entries)',
    ],
    category: 'Computer Vision • PWA',
    award: '#1 Award • GenAI Summit',
  },
  {
    icon: Brain,
    title: 'AI Agent SensorFusion',
    subtitle: 'Multi-Modal Desktop AI with Emotion Recognition',
    description: 'Coordinated development of a multi-modal AI agent fusing camera, microphone, and screen capture for context-aware assistance with DeepFace emotion detection.',
    problem: 'Traditional AI assistants lack emotional intelligence and situational awareness.',
    role: 'Technical Program Owner',
    scope: ['Multi-LLM orchestration', 'Sensor fusion pipeline', 'GUI threading', 'Privacy architecture'],
    tech: ['Python', 'DeepFace', 'OpenCV', 'Gemini', 'Ollama', 'Pydantic'],
    stats: [
      { label: 'Lines of Code', value: '1,700+' },
      { label: 'Modules', value: '6' },
      { label: 'LLM Providers', value: '3+' },
      { label: 'Sensors', value: 'Multi' },
    ],
    highlights: [
      'Managed multi-LLM orchestration across Gemini, Ollama, and llama.cpp with provider routing',
      'Drove producer-consumer threading pattern for real-time GUI updates',
      'Ensured local-first architecture with GGUF models (Phi-3) for privacy compliance',
    ],
    category: 'AI/ML • Sensor Fusion',
  },
  {
    icon: Target,
    title: 'JobGenieAI',
    subtitle: 'RAG Pipeline with Agentic Workflows',
    description: 'Led full-stack RAG pipeline development for automated job matching, featuring LlamaIndex vector search and LangChain ReAct agent for autonomous cover letter generation.',
    problem: 'Job search is manual and time-consuming — generic applications fail to highlight relevant experience.',
    role: 'Program Owner',
    scope: ['5+ data source integration', '15+ API orchestration', 'End-to-end delivery', 'User feedback loops'],
    tech: ['Python', 'LlamaIndex', 'LangChain', 'Gemini', 'Streamlit'],
    stats: [
      { label: 'Lines of Code', value: '2,600+' },
      { label: 'Modules', value: '10' },
      { label: 'Job Sources', value: '5+' },
      { label: 'APIs', value: '15+' },
    ],
    highlights: [
      'Designed hybrid matching pipeline: 50% semantic + 30% skills + 20% experience',
      'Coordinated APScheduler for recurring searches with email/WhatsApp notifications',
      'Delivered WordPress plugin (197 LOC) with shortcode system for client embedding',
    ],
    category: 'RAG • Agentic AI',
  },
  {
    icon: Cpu,
    title: 'AeroEngine ML Diagnostics',
    subtitle: 'Predictive Maintenance for Turbofan Engines',
    description: 'Drove development of ML architecture for Remaining Useful Life estimation using NASA C-MAPSS telemetry, achieving robust degradation forecasting across multiple fault modes.',
    problem: 'Preventative maintenance schedules are inefficient for mission-critical hardware.',
    role: 'Program Lead',
    scope: ['21-channel sensor data', 'Model selection', 'Visualization pipeline', 'Edge deployment planning'],
    tech: ['Python', 'Scikit-Learn', 'Streamlit', 'Sensor Fusion'],
    stats: [
      { label: 'Sensors', value: '21' },
      { label: 'Dataset', value: 'FD004' },
      { label: 'Deploy', value: 'Cloud Edge' },
      { label: 'Latency', value: '<500ms' },
    ],
    highlights: [
      'Coordinated multivariate time-series processing from 21 continuous sensor channels',
      'Drove RUL regression model selection with sliding window feature extraction',
      'Delivered real-time degradation visualization via Streamlit dashboard',
    ],
    category: 'Predictive Maintenance',
  },
  {
    icon: Mic,
    title: 'MedScribe',
    subtitle: 'Edge Clinical Audio Transcription',
    description: 'Managed development of a real-time medical transcription pipeline for edge clinical environments, capturing patient-doctor interactions and synthesizing structured SOAP notes.',
    problem: 'Manual clinical documentation creates cognitive overload for physicians.',
    role: 'Program Owner',
    scope: ['Audio capture pipeline', 'LLM orchestration', 'UI thread architecture', 'Edge caching strategy'],
    tech: ['React', 'Vite', 'Audio Worklets', 'LLM Orchestration', 'Web Audio API'],
    stats: [
      { label: 'Audio Latency', value: '<100ms' },
      { label: 'Architecture', value: 'Edge-Heavy' },
      { label: 'Output', value: 'SOAP Notes' },
      { label: 'Processing', value: 'Async' },
    ],
    highlights: [
      'Coordinated low-latency audio capture using browser-native Audio Worklets',
      'Drove streaming inference client for clinical domain vocabulary',
      'Managed state synchronization for non-blocking real-time transcription UI',
    ],
    category: 'Healthcare AI',
  },
];

const ProgramCard = ({ project, index }: { project: typeof aiPrograms[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="card-whiteboard rounded-xl overflow-hidden"
    >
      <div className="relative p-6 border-b-2 border-border">
        <div className="relative">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-14 h-14 rounded-xl bg-marker-blue/10 border-2 border-marker-blue/30 flex items-center justify-center">
              <Icon className="w-7 h-7 text-marker-blue" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-sketch text-marker-blue uppercase tracking-wider">{project.category}</span>
              <h3 className="text-xl font-handwritten font-bold text-foreground mt-1">{project.title}</h3>
              <p className="text-sm font-sketch text-muted-foreground">{project.subtitle}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="tag-marker-red text-[10px]">{project.role}</span>
                {project.award && (
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border-2 border-marker-red/40 bg-marker-red/5 text-marker-red text-[10px] font-sketch uppercase tracking-wider">
                    <Trophy className="w-3 h-3" />
                    <span>{project.award}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 border-b-2 border-border">
        {project.stats.map((stat, i) => (
          <div key={i} className="p-3 text-center border-r-2 last:border-r-0 border-border">
            <div className="text-lg font-handwritten font-bold text-marker-blue">{stat.value}</div>
            <div className="text-[10px] font-sketch text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="p-6">
        <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        <div className="mb-4 p-3 rounded-lg bg-muted/50 border-2 border-border">
          <span className="text-xs font-sketch text-marker-red uppercase tracking-wider">Problem</span>
          <p className="text-sm font-body text-muted-foreground mt-1">{project.problem}</p>
        </div>

        <div className="mb-4">
          <span className="text-xs font-sketch text-marker-blue uppercase tracking-wider mb-2 block">Program Scope</span>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.scope.map((s, i) => (
              <span key={i} className="tag-marker">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <span className="text-xs font-sketch text-marker-blue uppercase tracking-wider mb-2 block">Key Deliverables</span>
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-marker-blue mt-1.5 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2 py-1 rounded text-xs font-sketch bg-marker-blue/5 text-marker-blue border border-marker-blue/15">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AcademiaSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="aiml" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase mb-4">
            AI/ML Program Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            <span className="text-marker-black">AI/ML </span>
            <span className="text-marker-blue marker-underline">PROGRAMS</span>
          </h2>
          <div className="divider-sketch max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Production-grade AI/ML programs spanning Physical AI, Computer Vision, RAG, and Multi-Agent Systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {aiPrograms.map((project, index) => (
            <ProgramCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademiaSection;
