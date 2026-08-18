import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'M.S. Information Systems',
    school: 'University of Washington, Foster School of Business',
    period: 'Jun 2025 – 2026 (Ongoing)',
    focus: ['AI/ML', 'Cloud Computing', 'Cybersecurity', 'Generative AI', 'Business Leadership'],
    icon: GraduationCap,
  },
  {
    degree: 'B.E. Information Technology',
    school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, India',
    period: '2004 – 2008',
    focus: ['Embedded C', 'Data Structures', 'AI', 'Operating Systems', 'Microcontrollers'],
    icon: BookOpen,
  },
];

const certs = [
  { name: 'Software Security Practitioner - Architect', org: 'ISC2', icon: '🛡️' },
  { name: 'Six Sigma Green Belt — Best Project Award (Global)', org: 'Honeywell', icon: '⚡' },
  { name: 'Certified Embedded Systems Professional', org: 'Cranes Software', icon: '💻' },
];

const EducationSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="education" className="py-24 relative bg-whiteboard">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            <span className="text-marker-black">EDUCATION & </span>
            <span className="text-marker-blue marker-underline">CERTIFICATIONS</span>
          </h2>
          <div className="divider-sketch max-w-xs mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="card-whiteboard rounded-xl p-6 border-l-4 border-marker-blue"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-marker-blue/10 border-2 border-marker-blue/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-marker-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-handwritten font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-sm font-sketch text-muted-foreground">{edu.school}</p>
                    <p className="text-xs font-sketch text-marker-blue mt-1">{edu.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((f, fi) => (
                    <span key={fi} className="tag-marker">{f}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-handwritten font-bold text-center text-marker-blue mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-sketch rounded-lg p-4 text-center"
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-sm font-sketch font-semibold text-foreground">{c.name}</div>
                <div className="text-xs font-body text-muted-foreground mt-1">{c.org}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
