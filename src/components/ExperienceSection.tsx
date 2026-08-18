import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Honeywell Aerospace',
    location: 'Phoenix, USA and Bengaluru, IND',
    roles: [
      {
        title: 'Senior Advanced Embedded Engineer',
        period: 'Jul 2022 – Jun 2025',
        highlights: [
          'Led cross-functional V&V campaigns for safety-critical eVTOL flight control programs',
          'Owned vendor delivery interface for A429/RS422 device driver integration on the Vertical eVTOL program',
          'Conceived and delivered $1M+ hardware test lab automation initiative (Python + LabVIEW)',
          'Drove Level-A verification strategy across multi-disciplinary avionics teams',
        ],
      },
      {
        title: 'Advanced Embedded Engineer',
        period: 'May 2017 – Jul 2022',
        highlights: [
          'Managed multi-vendor software delivery for Boeing 787 and Comac 919 achieving 0.001 defect density',
          'Drove $2M HIL test automation transformation saving 2,000 man-hours using C#',
          'Coordinated FADEC, Maintenance Systems, Door Sliding, and Landing Gear program deliveries',
          'Led A429 C code generation automation program saving 400 man-hours',
        ],
      },
      {
        title: 'Senior Software Engineer',
        period: 'May 2013 – May 2017',
        highlights: [
          'Coordinated flight control delivery for Embraer ERJ170, Gulfstream G650, and Comac ARJ21',
          'Drove Boot Loader and Post Software Verifier tool development saving 3,000 man-hours',
          'Managed structural coverage, code coverage, and coupling analysis campaigns',
          'Owned HIL test plan creation and cross-team debugging coordination',
        ],
      },
    ],
  },
  {
    company: 'Alten',
    location: 'Bengaluru, IND',
    roles: [
      {
        title: 'Software Engineer',
        period: 'May 2009 – May 2013',
        highlights: [
          'Coordinated Wing Ice Protection System delivery for Boeing 787 achieving 0.02% defect density',
          'Managed cross-company integration between Alten and Boeing for boot-up code delivery',
          'Led flash memory driver development achieving 0.01% defect density',
          'Drove safety-critical integration and component testing campaigns',
        ],
      },
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-marker-blue via-marker-blue/50 to-transparent -translate-x-1/2 hidden md:block rounded-full" />

      <div className="card-whiteboard rounded-xl p-6 md:p-8 mb-8 ml-8 md:ml-0 relative">
        <div className="absolute -left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-marker-blue shadow-card -translate-x-1/2 hidden md:block border-2 border-white" />
        <div className="absolute -left-10 top-8 w-4 h-4 rounded-full bg-marker-blue shadow-card md:hidden border-2 border-white" />

        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-marker-blue/10 border-2 border-marker-blue/30 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-marker-blue" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-handwritten font-bold text-foreground">{experience.company}</h3>
              <div className="flex items-center gap-1 text-muted-foreground font-sketch text-sm">
                <MapPin className="w-3 h-3" />
                {experience.location}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {experience.roles.map((role, ri) => (
            <div key={ri} className="border-l-3 border-marker-blue/30 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-lg font-handwritten font-bold text-marker-blue">{role.title}</h4>
                <div className="flex items-center gap-1 text-muted-foreground font-sketch text-sm">
                  <Calendar className="w-3 h-3" />
                  {role.period}
                </div>
              </div>
              <ul className="space-y-2">
                {role.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                    <ChevronRight className="w-4 h-4 text-marker-blue mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            <span className="text-marker-black">PROFESSIONAL </span>
            <span className="text-marker-blue marker-underline">EXPERIENCE</span>
          </h2>
          <div className="divider-sketch max-w-xs mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
