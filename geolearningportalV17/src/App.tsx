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

function getRoute(pathname: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length) || '/'
    : pathname;

  if (normalizedPath === '/modern') {
    return 'modern';
  }

  if (normalizedPath === '/legacy') {
    return 'legacy';
  }

  return 'home';
}

function SelectorPage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Geothermal Merge
        </p>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Two preserved sites, one entry point.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
          Choose which version to open. The modern React site and the original static site are both preserved as separate pages.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href={`${baseUrl}modern`}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/14"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">Page 1</p>
            <h2 className="mt-4 text-3xl font-bold">Modern React Site</h2>
            <p className="mt-4 text-slate-200">
              Opens the current V17 app with its existing sections, animations, and table of contents.
            </p>
          </a>

          <a
            href={`${baseUrl}legacy`}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/14"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Page 2</p>
            <h2 className="mt-4 text-3xl font-bold">Original Static Site</h2>
            <p className="mt-4 text-slate-200">
              Opens the original multi-page MIT RE Clinic site intact, including its HTML pages, styles, and scripts.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}

function LegacySitePage() {
  const legacyUrl = `${import.meta.env.BASE_URL}legacy/index.html`;

  return (
    <main className="h-screen w-full bg-white">
      <iframe title="Original static site" src={legacyUrl} className="h-full w-full border-0" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
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
  const route = getRoute(window.location.pathname);

  if (route === 'modern') {
    return <ModernSitePage />;
  }

  if (route === 'legacy') {
    return <LegacySitePage />;
  }

  return <SelectorPage />;
}
