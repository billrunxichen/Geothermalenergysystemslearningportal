import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

interface TableOfContentsProps {
  activeSection: string;
}

export function TableOfContents({ activeSection }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    { id: 'introduction', label: '1.1 Introduction', number: '1.1' },
    { id: 'individual-heating', label: '1.2 Individual Home Heating', number: '1.2' },
    { id: 'district-heating', label: '1.3 District Heating', number: '1.3' },
    { id: 'electricity-generation', label: '1.4 Electricity Generation', number: '1.4' },
    { id: 'benefits', label: '1.5 Benefits', number: '1.5' },
    { id: 'costs', label: '1.6 Costs', number: '1.6' },
    { id: 'build-coalition', label: '2.1 Build a Coalition', number: '2.1' },
    { id: 'community-opportunities', label: '2.2 Community Opportunities', number: '2.2' },
    { id: 'design-process', label: '2.3-2.5 Coalition Process', number: '2.3' },
    { id: 'site-selection', label: '3.1 Site Selection', number: '3.1' },
    { id: 'scoping-studies', label: '3.2 Scoping Studies', number: '3.2' },
    { id: 'building-retrofits', label: '3.3 Building Retrofits', number: '3.3' },
    { id: 'community-engagement', label: '3.4 Community Engagement', number: '3.4' },
    { id: 'global-map', label: 'Global Examples', number: '—' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        {isOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: 300, opacity: 0 }}
        animate={{ 
          x: isOpen ? 0 : 300, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 right-6 z-40 w-72 max-h-[calc(100vh-200px)] bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 overflow-y-auto hidden lg:block"
      >
        <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
          Table of Contents
        </h3>

        <nav className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-blue-600'}`}>
                    {section.number}
                  </span>
                  <span className="text-sm flex-1">{section.label.replace(section.number + ' ', '')}</span>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'translate-x-1 text-white' : 'text-slate-400 group-hover:translate-x-1'
                    }`} 
                  />
                </div>
              </motion.button>
            );
          })}
        </nav>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            Click any section to jump there
          </p>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: 300, opacity: 0 }}
        animate={{ 
          x: isOpen ? 0 : 300, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 right-4 left-4 z-40 max-h-[calc(100vh-120px)] bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 overflow-y-auto lg:hidden"
      >
        <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
          Table of Contents
        </h3>

        <nav className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-blue-600'}`}>
                    {section.number}
                  </span>
                  <span className="text-sm flex-1">{section.label.replace(section.number + ' ', '')}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}