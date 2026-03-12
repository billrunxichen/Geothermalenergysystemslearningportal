import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { IndividualHomeHeating } from './components/IndividualHomeHeating';
import { DistrictHeating } from './components/DistrictHeating';
import { ElectricityGeneration } from './components/ElectricityGeneration';
import { Benefits } from './components/Benefits';
import { Costs } from './components/Costs';
import { BuildCoalition } from './components/BuildCoalition';
import { CommunityOpportunities } from './components/CommunityOpportunities';
import { DesignProcess } from './components/DesignProcess';
import { SiteSelection } from './components/SiteSelection';
import { ScopingStudies } from './components/ScopingStudies';
import { BuildingRetrofits } from './components/BuildingRetrofits';
import { CommunityEngagement } from './components/CommunityEngagement';
import { HomeownerFAQs } from './components/HomeownerFAQs';
import { InteractiveMap } from './components/InteractiveMap';
import { TableOfContents } from './components/TableOfContents';

function getRoute(hash: string) {
  const normalizedHash = hash.replace(/^#/, '') || '/';

  if (normalizedHash === '/legacy') {
    return 'legacy';
  }

  return 'modern';
}

function TopNav({ route }: { route: 'modern' | 'legacy' }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href={`${baseUrl}#/`} className="text-sm font-bold uppercase tracking-[0.25em] text-slate-800">
          Geothermal Energy Systems Learning Portal
        </a>
        <nav className="flex items-center gap-3">
          <a
            href={`${baseUrl}#/`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              route === 'modern'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Page 1
          </a>
          <a
            href={`${baseUrl}#/legacy`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              route === 'legacy'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Page 2
          </a>
        </nav>
      </div>
    </header>
  );
}

function LegacySitePage() {
  const legacyUrl = `${import.meta.env.BASE_URL}legacy/index.html`;

  return (
    <main className="h-screen w-full bg-white pt-[73px]">
      <iframe title="Original static site" src={legacyUrl} className="h-[calc(100vh-73px)] w-full border-0" />
    </main>
  );
}

function ModernSitePage() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'individual-heating',
        'district-heating',
        'electricity-generation',
        'benefits',
        'costs',
        'build-coalition',
        'community-opportunities',
        'design-process',
        'site-selection',
        'scoping-studies',
        'building-retrofits',
        'community-engagement',
        'homeowner-faqs',
        'global-map'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 pt-[73px]">
      <Hero />
      <TableOfContents activeSection={activeSection} />
      <div className="relative">
        <Introduction />
        <IndividualHomeHeating />
        <DistrictHeating />
        <ElectricityGeneration />
        <Benefits />
        <Costs />
        <BuildCoalition />
        <CommunityOpportunities />
        <DesignProcess />
        <SiteSelection />
        <ScopingStudies />
        <BuildingRetrofits />
        <CommunityEngagement />
        <HomeownerFAQs />
        <InteractiveMap />
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState<'modern' | 'legacy'>(() => getRoute(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === 'legacy') {
    return (
      <>
        <TopNav route={route} />
        <LegacySitePage />
      </>
    );
  }

  if (route === 'modern') {
    return (
      <>
        <TopNav route={route} />
        <ModernSitePage />
      </>
    );
  }
  
  return null;
}
