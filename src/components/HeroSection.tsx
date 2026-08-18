import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profileImg1 from '@/assets/ashish-profile.png';
import profileImg2 from '@/assets/Ashish_pic3.png';

const profileImages = [profileImg1, profileImg2];

const HeroSection = () => {
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setProfileIndex((i) => (i + 1) % profileImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Ashish_Dubey_TPM_Resume.pdf';
    link.download = 'Ashish_Dubey_TPM_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 bg-whiteboard">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="corner-brackets">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-3 border-marker-blue/40 shadow-card">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={profileIndex}
                    src={profileImages[profileIndex]}
                    alt="Ashish Dubey - Technical Program Leader"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 card-whiteboard rounded-full">
              <div className="w-2 h-2 rounded-full bg-marker-green animate-pulse" />
              <span className="text-xs font-sketch text-marker-green uppercase tracking-wider">Available</span>
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center lg:text-left flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full border-2 border-marker-blue/30 bg-marker-blue/5 text-marker-blue font-sketch text-sm tracking-widest uppercase">
                Technical Program Leader | AI × Hardware
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-handwritten font-bold mb-4 leading-tight"
            >
              <span className="text-marker-black">ASHISH</span>
              <br />
              <span className="text-marker-blue">DUBEY</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="divider-sketch max-w-md mx-auto lg:mx-0 mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl font-sketch text-muted-foreground mb-3"
            >
              I ship programs that bridge AI intelligence with hardware reality
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-lg font-body text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              15+ Years Program Leadership • $5M+ ROI Delivered • 6 Aircraft Programs Shipped • NVIDIA GB10 Architect
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button onClick={handleDownload} className="btn-marker">
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download TPM Resume
                </span>
              </button>
              <a href="https://linkedin.com/in/ashishdubeyuw" target="_blank" rel="noopener noreferrer" className="btn-marker-outline">
                <span className="flex items-center gap-2"><Linkedin className="w-5 h-5" /> LinkedIn</span>
              </a>
              <a href="mailto:ashishdubeyuw@gmail.com" className="btn-marker-outline">
                <span className="flex items-center gap-2"><Mail className="w-5 h-5" /> Contact</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: '15+', label: 'Years Leading Programs' },
            { value: '$5M+', label: 'ROI Delivered' },
            { value: '6', label: 'Aircraft Programs' },
            { value: '48', label: 'Safety Tests Passed' },
          ].map((stat, i) => (
            <div key={i} className="card-whiteboard p-4 rounded-xl text-center hover:border-marker-blue/40 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-handwritten font-bold text-marker-blue">{stat.value}</div>
              <div className="text-xs md:text-sm font-sketch text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs font-sketch mb-2">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-marker-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
