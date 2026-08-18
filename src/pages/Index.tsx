import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MetricsDashboard from '@/components/MetricsDashboard';
import ProjectsSection from '@/components/ProjectsSection';
import AcademiaSection from '@/components/AcademiaSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SpaceScene from '@/components/three/SpaceScene';
import PortfolioAgent from '@/components/PortfolioAgent';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-whiteboard">
      {/* Canvas Marker Background Animation */}
      <SpaceScene />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <MetricsDashboard />
        <ProjectsSection />
        <AcademiaSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Program Brief Bot */}
      <PortfolioAgent />
    </div>
  );
};

export default Index;
