import { ClipboardList } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 border-t-2 border-border bg-background">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <ClipboardList className="w-4 h-4 text-marker-blue" />
          <span className="font-sketch text-sm">Ashish Dubey — Technical Program Leader | AI × Hardware</span>
        </div>
        <div className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Built with React + TypeScript
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
