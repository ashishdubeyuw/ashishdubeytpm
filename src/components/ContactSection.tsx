import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contacts = [
    { icon: Mail, label: 'Email', value: 'ashishdubeyuw@gmail.com', href: 'mailto:ashishdubeyuw@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (425) 560-5118', href: 'tel:+14255605118' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ashishdubeyuw', href: 'https://linkedin.com/in/ashishdubeyuw' },
    { icon: MapPin, label: 'Location', value: 'Lynnwood, WA 98036, USA', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            <span className="text-marker-black">GET IN </span>
            <span className="text-marker-blue marker-underline">TOUCH</span>
          </h2>
          <div className="divider-sketch max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Open to senior AI TPM, Hardware TPM, and Technical Program Leader opportunities. Email is fastest — typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-whiteboard rounded-xl p-6 text-center hover:border-marker-blue/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-marker-blue/10 border-2 border-marker-blue/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-marker-blue/20 transition-colors">
                  <Icon className="w-5 h-5 text-marker-blue" />
                </div>
                <div className="text-sm font-sketch text-marker-blue uppercase tracking-wider mb-1">{c.label}</div>
                <div className="text-xs font-body text-muted-foreground">{c.value}</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
