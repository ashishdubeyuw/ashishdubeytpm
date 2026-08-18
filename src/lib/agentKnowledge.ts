export interface KnowledgeChunk {
  id: string;
  category: string;
  keywords: string[];
  response: string;
}

export const STOPWORDS = new Set([
  'a','an','the','is','are','was','were','do','does','did','i','you','he','she',
  'we','they','me','him','her','us','them','my','your','his','it','in','on','at',
  'to','for','of','and','or','but','with','from','by','about','what','which','who',
  'how','when','where','can','could','would','should','will','has','have','had',
  'be','been','being','this','that','these','those','tell','give','show','please',
  'some','any','more','much','very','just','also','its','their','get','know',
]);

export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: 'identity',
    category: 'identity',
    keywords: ['ashish','dubey','who','about','background','intro','profile','overview','summary','tpm','program','manager','leader'],
    response: 'Ashish Dubey is a Technical Program Leader with 15+ years bridging safety-critical aerospace engineering and modern AI/ML. He has shipped 6 aircraft programs (Boeing 787, Embraer ERJ170, Gulfstream G650, Comac 919) at Honeywell, delivered $5M+ in verified ROI, and recently architected the NVIDIA Grace Blackwell GB10 runtime assurance platform at the NVIDIA Spark Hackathon 2026.\n\nHe is pursuing an M.S. in Information Systems at the University of Washington (Foster School of Business) and is actively exploring senior AI TPM and Hardware TPM opportunities.',
  },
  {
    id: 'tpm_methodology',
    category: 'tpm',
    keywords: ['methodology','process','agile','scrum','waterfall','planning','roadmap','execution','framework','approach','style','how','manage'],
    response: "Ashish's TPM methodology:\n\n📋 Program Planning — OKR-driven milestone planning with risk-weighted timelines and gate reviews\n🔄 Agile Execution — Sprint-based delivery with CI/CD integration, adapted for safety-critical DO-178C constraints\n⚠️ Risk Management — RAID log ownership, proactive risk escalation, and dependency tracking across multi-vendor teams\n📊 Stakeholder Alignment — Executive comms, customer interface (Boeing, Embraer, Gulfstream), and cross-functional dependency resolution\n📈 Metrics-Driven — Defect density tracking (0.001), ROI measurement ($5M+), and man-hour savings quantification",
  },
  {
    id: 'sentinel_program',
    category: 'programs',
    keywords: ['sentinel','nvidia','gb10','grace','blackwell','hackathon','spark','runtime','assurance','physical','autonomous'],
    response: "Program: NVIDIA GB10 Runtime Assurance (Project Sentinel)\n\n📋 Program Brief:\n• Event: NVIDIA Spark Hackathon 2026\n• Platform: NVIDIA Grace Blackwell GB10 (128 GB LPDDR5x, 900 GB/s NVLink-C2C)\n• Team: 3-person cross-functional team\n• Duration: 72-hour sprint\n\n🎯 Deliverables:\n• 20 Hz deterministic safety loop (146 µs p99 latency)\n• 4-monitor parallel anomaly detection bank\n• Dual edge LLM benchmarking (Qwen 2.5 7B: 98.5% accuracy, Nemotron 3.5: 82 FPS)\n• SHA-256 cryptographic audit ledger with replay engine\n• 48 passing tests, 3,000 Hypothesis property fuzz validations\n\n💡 TPM Highlights: Coordinated architecture decisions across safety, AI/ML, and systems engineering. Managed scope-time tradeoffs under extreme timeline pressure. Delivered presentation to NVIDIA leadership.",
  },
  {
    id: 'evtol_program',
    category: 'programs',
    keywords: ['evtol','vertical','flight','control','honeywell','recent','latest','current','uam','urban'],
    response: "Program: Next-Gen eVTOL Flight Control (Honeywell, 2022-2025)\n\n📋 Program Brief:\n• Scope: Safety-critical flight control software for electric VTOL aircraft\n• Standards: DO-178C Level A (highest safety)\n• Role: Program Lead\n\n🎯 Deliverables:\n• A429 and RS-422 device driver integration across multi-disciplinary avionics teams\n• $1M+ hardware test lab automation (Python + LabVIEW)\n• Level-A verification and validation campaign ownership\n\n💡 TPM Highlights: Led cross-functional V&V campaigns, owned vendor delivery interfaces, conceived and delivered automation initiatives with measurable ROI.",
  },
  {
    id: 'boeing_program',
    category: 'programs',
    keywords: ['boeing','787','dreamliner','comac','919','flight','systems'],
    response: "Program: Boeing 787 & Comac 919 Flight Systems (Honeywell, 2017-2022)\n\n📋 Program Brief:\n• Scope: Flight control systems for Boeing 787 Dreamliner and Comac 919\n• Defect Density: 0.001 (industry-leading)\n• Role: Technical Program Owner\n\n🎯 Deliverables:\n• Multi-vendor integration management\n• $2M HIL test automation transformation (2,000 man-hours saved)\n• A429 code generation automation (400 man-hours saved)\n• FADEC, Maintenance Systems, Landing Gear program deliveries\n\n💡 TPM Highlights: Managed software delivery across vendor boundaries, drove automation initiatives with $2M+ ROI, maintained near-zero defect rates.",
  },
  {
    id: 'roi_impact',
    category: 'impact',
    keywords: ['roi','savings','cost','impact','value','money','budget','results','metrics','numbers','quantify'],
    response: "Ashish's Verified Program Impact:\n\n💰 Total ROI: $5M+ across programs\n\nBreakdown:\n• $1M+ — eVTOL hardware test lab automation (Python + LabVIEW)\n• $2M — Boeing 787 HIL automation (C#, 2,000 man-hours)\n• $400K — A429 code generation automation (400 man-hours)\n• $1M+ — Boot Loader and Verifier tools (3,000 man-hours)\n\n📊 Quality Metrics:\n• 0.001 defect density on Boeing 787/Comac 919\n• Level-A certification across 6 aircraft programs\n• Six Sigma Green Belt — Global Best Project Award",
  },
  {
    id: 'stakeholders',
    category: 'tpm',
    keywords: ['stakeholder','customer','client','vendor','partner','cross','functional','team','collaborate','coordinate'],
    response: "Ashish's Stakeholder Management Profile:\n\n🤝 Customer Interface:\n• Direct engagement with Boeing, Embraer, Gulfstream, Comac program teams\n• Managed vendor delivery boundaries (Alten → Boeing integration)\n\n👥 Cross-Functional Coordination:\n• Led avionics teams across hardware, software, systems, and test engineering\n• Coordinated multi-vendor integration on DO-178C Level-A programs\n\n📋 Executive Communication:\n• Delivered program status to Honeywell leadership\n• Presented NVIDIA GB10 architecture to hackathon judges\n• Six Sigma project presentations to global Honeywell audience",
  },
  {
    id: 'skills_programming',
    category: 'skills',
    keywords: ['skill','skills','technical','programming','language','code','python','embedded','cuda','tool','platform'],
    response: "Ashish's Technical Depth (rare TPM differentiator):\n\n💻 Programming: Embedded C, Python, PyTorch/CUDA, C#, SQL, MATLAB-Simulink\n🖥️ Platforms: NVIDIA Grace Blackwell GB10, NVLink-C2C (900 GB/s), PPC 750, ARM A53/Neoverse V2\n🔧 Tools: DEOS RTOS, Green Hills RTOS, VxWorks, FastAPI/WebSockets, LabVIEW\n📐 AI/ML: Conformal Prediction, GRU Autoencoders, Mahalanobis/CUSUM, Edge LLM Orchestration\n📜 Standards: DO-178C Level A (×6), ISO 26262 ASIL-D, ISO 21448 SOTIF, Six Sigma Green Belt\n\nThis technical depth is his TPM superpower — he can go deep into architecture reviews and earn engineering team trust.",
  },
  {
    id: 'education',
    category: 'education',
    keywords: ['education','degree','university','washington','uw','foster','master','bachelor','school','study','academic'],
    response: "Ashish's Education:\n\n🎓 M.S. Information Systems — University of Washington, Foster School of Business (2025–2026, Ongoing)\n   Focus: AI/ML, Cloud Computing, Cybersecurity, Generative AI, Business Leadership\n\n🎓 B.E. Information Technology — Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (2004–2008)\n   Focus: Embedded C, Data Structures, AI, Operating Systems, Microcontrollers\n\nCertifications:\n🛡️ Software Security Practitioner - Architect (ISC2)\n⚡ Six Sigma Green Belt — Global Best Project Award (Honeywell)\n💻 Certified Embedded Systems Professional (Cranes Software)",
  },
  {
    id: 'availability',
    category: 'availability',
    keywords: ['available','availability','looking','job','opportunity','hire','open','position','role','seek'],
    response: 'Ashish is actively exploring senior Technical Program Manager opportunities in AI/ML, hardware, and autonomous systems. He brings 15+ years of program delivery experience and is eager for roles bridging AI intelligence with hardware reality.\n\n📧 ashishdubeyuw@gmail.com\n📞 +1 (425) 560-5118\n💼 linkedin.com/in/ashishdubeyuw',
  },
  {
    id: 'contact',
    category: 'contact',
    keywords: ['contact','email','phone','reach','linkedin','connect','message','call','schedule','interview'],
    response: 'Reach Ashish:\n\n📧 Email: ashishdubeyuw@gmail.com\n📞 Phone: +1 (425) 560-5118\n💼 LinkedIn: linkedin.com/in/ashishdubeyuw\n📍 Location: Lynnwood, WA 98036, USA\n\nEmail is fastest — typically responds within 24 hours.',
  },
  {
    id: 'unique_value',
    category: 'value_prop',
    keywords: ['why','hire','unique','value','special','different','stand','best','strength','advantage','superpower'],
    response: "What makes Ashish a standout TPM:\n\n🚀 Rare Intersection — 15+ years DO-178C Level-A aerospace + NVIDIA GB10 Physical AI = almost no TPM has both\n⚡ Technical Depth — He can sit in architecture reviews and earn engineering trust, not just track Jira tickets\n💰 Proven ROI — $5M+ in documented cost savings through automation and program leadership\n🏆 Multi-Domain Winner — NVIDIA Spark Hackathon 2026, Top Flyer (2×), Six Sigma Best Project (Global), #1 GenAI Summit\n🎓 Continuous Growth — Pursuing M.S. at UW Foster while shipping production AI systems\n🔒 Safety-Critical Credibility — 6 aircraft programs through Level-A certification, 3 trade secrets logged\n\nHe's the rare TPM who can drive program execution AND go deep on the engineering.",
  },
  {
    id: 'awards',
    category: 'awards',
    keywords: ['award','awards','recognition','achievement','honor','top','excellence','trade','secret','trophy'],
    response: "Ashish's Recognitions:\n\n🏆 NVIDIA Spark Hackathon 2026 — Project Sentinel on Grace Blackwell GB10\n🏆 Top Flyer Award (2×) — Flight Control debugging & HW test automation\n🏆 Individual Excellence Award — Critical functionality delivery\n🏆 Team Excellence Award — Milestone delivery under scope creep\n🔒 3 Trade Secret Ideas — Logged with Honeywell (2 in eVTOL)\n🌐 Six Sigma Green Belt — Best Project Award (Global, Honeywell)\n🥇 #1 GenAI Summit Award — VortexEye navigation app",
  },
  {
    id: 'location',
    category: 'location',
    keywords: ['location','where','lynnwood','washington','seattle','relocation','remote','hybrid','onsite'],
    response: 'Ashish is based in Lynnwood, WA 98036, USA — greater Seattle metro.\n\n• Open to Seattle / Bellevue / Redmond in-person and hybrid roles\n• Open to relocation for exceptional opportunities\n• Remote and hybrid arrangements welcome\n\n📧 ashishdubeyuw@gmail.com',
  },
];
