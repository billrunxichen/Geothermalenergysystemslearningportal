import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapPin, Zap, Users, TrendingUp, X } from "lucide-react";

interface CityData {
  name: string;
  country: string;
  // ✅ real map coordinates (lon/lat), not percentages
  coordinates: [number, number];
  capacity: string;
  population: string;
  details: string;
  yearEstablished: string;
  growth: string;
  co2Saved: string;
  color: string; // tailwind bg-*
}

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function InteractiveMap() {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const cities: CityData[] = useMemo(
    () => [
      {
        name: "Reykjavik",
        country: "Iceland",
        coordinates: [-21.8174, 64.1265],
        capacity: "2,000 MW thermal",
        population: "230,000 residents",
        details:
          "90% of homes heated by geothermal energy. The world's leader in geothermal district heating with the largest urban geothermal network.",
        yearEstablished: "1930",
        growth: "+5% annually",
        co2Saved: "1.2M tons/year",
        color: "bg-blue-500",
      },
      {
        name: "Paris",
        country: "France",
        coordinates: [2.3522, 48.8566],
        capacity: "180 MW thermal",
        population: "500,000 residents",
        details:
          "Largest geothermal district heating network in Europe, serving over 250,000 equivalent homes across the greater Paris region.",
        yearEstablished: "1969",
        growth: "+8% annually",
        co2Saved: "200K tons/year",
        color: "bg-purple-500",
      },
      {
        name: "Munich",
        country: "Germany",
        coordinates: [11.582, 48.1351],
        capacity: "120 MW thermal",
        population: "350,000 residents",
        details:
          "Expanding network with ambitious plans to heat 60% of the city by 2035. Currently one of Europe's fastest-growing geothermal systems.",
        yearEstablished: "2004",
        growth: "+12% annually",
        co2Saved: "150K tons/year",
        color: "bg-green-500",
      },
      {
        name: "Tokyo",
        country: "Japan",
        coordinates: [139.6917, 35.6895],
        capacity: "500 MW",
        population: "2M residents",
        details:
          "Integrating geothermal with traditional systems. Japan's volcanic activity provides exceptional geothermal potential for urban heating.",
        yearEstablished: "1990",
        growth: "+6% annually",
        co2Saved: "450K tons/year",
        color: "bg-red-500",
      },
      {
        name: "San Francisco",
        country: "USA",
        coordinates: [-122.4194, 37.7749],
        capacity: "85 MW",
        population: "180,000 residents",
        details:
          "The Geysers geothermal complex nearby is the world's largest geothermal power plant, providing clean electricity to Northern California.",
        yearEstablished: "1960",
        growth: "+4% annually",
        co2Saved: "320K tons/year",
        color: "bg-yellow-500",
      },
      {
        name: "Christchurch",
        country: "New Zealand",
        coordinates: [172.6362, -43.5321],
        capacity: "45 MW thermal",
        population: "95,000 residents",
        details:
          "Rebuilding with geothermal focus after earthquakes. New Zealand is harnessing its geothermal resources for sustainable urban development.",
        yearEstablished: "2015",
        growth: "+15% annually",
        co2Saved: "65K tons/year",
        color: "bg-teal-500",
      },
      {
        name: "Istanbul",
        country: "Turkey",
        coordinates: [28.9784, 41.0082],
        capacity: "250 MW thermal",
        population: "800,000 residents",
        details:
          "Rapidly expanding geothermal district heating. Turkey has the 5th largest geothermal potential in the world and is aggressively developing it.",
        yearEstablished: "2001",
        growth: "+10% annually",
        co2Saved: "280K tons/year",
        color: "bg-orange-500",
      },
      {
        name: "Boise",
        country: "USA",
        coordinates: [-116.2023, 43.615],
        capacity: "25 MW thermal",
        population: "60,000 residents",
        details:
          "America's oldest geothermal district heating system, operational since 1892. A pioneer in urban geothermal heating.",
        yearEstablished: "1892",
        growth: "+3% annually",
        co2Saved: "35K tons/year",
        color: "bg-indigo-500",
      },
      {
        name: "Beijing",
        country: "China",
        coordinates: [116.4074, 39.9042],
        capacity: "650 MW thermal",
        population: "1.5M residents",
        details:
          "Massive expansion planned to reduce coal use. China is investing heavily in geothermal to combat air pollution in major cities.",
        yearEstablished: "2008",
        growth: "+18% annually",
        co2Saved: "850K tons/year",
        color: "bg-rose-500",
      },
    ],
    []
  );

  return (
    <section
      id="global-map"
      className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Geothermal Networks Around the World</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore how different cities harness Earth's heat. Click on markers to see detailed information
            about capacity, coverage, and environmental impact.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 mb-8"
        >
          <div className="w-full h-[360px] sm:h-[460px] md:h-[560px] overflow-hidden rounded-xl">
            <ComposableMap
              projection="geoMercator"
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: any) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="rgba(148, 163, 184, 0.25)"
                      stroke="rgba(148, 163, 184, 0.35)"
                      strokeWidth={0.3}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "rgba(59,130,246,0.25)" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {cities.map((city) => {
                const isHovered = hoveredCity === city.name;

                return (
                  <Marker
                    key={city.name}
                    coordinates={city.coordinates}
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                    onClick={() => setSelectedCity(city)}
                  >
                    {/* pulsing ring */}
                    <motion.circle
                      r={isHovered ? 8 : 6}
                      className={city.color}
                      opacity={0.25}
                      animate={{ r: [6, 10, 6], opacity: [0.35, 0.05, 0.35] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* marker dot */}
                    <circle r={3} fill="white" opacity={0.9} />

                    {/* icon pin (optional) */}
                    <foreignObject x={-8} y={-22} width={16} height={16}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <MapPin
                          className={`w-4 h-4 ${city.color.replace("bg-", "text-")}`}
                          fill="currentColor"
                        />
                      </div>
                    </foreignObject>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          {/* Hover tooltip */}
          <AnimatePresence>
            {hoveredCity && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute left-6 bottom-6 bg-slate-900/95 backdrop-blur px-4 py-3 rounded-xl shadow-xl z-20 border border-slate-700"
              >
                {(() => {
                  const c = cities.find((x) => x.name === hoveredCity);
                  if (!c) return null;
                  return (
                    <>
                      <div className="text-sm font-bold">{c.name}</div>
                      <div className="text-xs text-slate-400">{c.country}</div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* City Details Modal */}
        <AnimatePresence>
          {selectedCity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCity(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-700"
              >
                <div className={`bg-gradient-to-r ${selectedCity.color.replace("bg-", "from-")} to-slate-700 p-6`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{selectedCity.name}</h3>
                      <p className="text-lg text-white/90">{selectedCity.country}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCity(null)}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <Zap className="w-5 h-5 text-yellow-400 mb-2" />
                      <div className="text-sm text-slate-400 mb-1">Capacity</div>
                      <div className="font-bold">{selectedCity.capacity}</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <Users className="w-5 h-5 text-blue-400 mb-2" />
                      <div className="text-sm text-slate-400 mb-1">Serves</div>
                      <div className="font-bold">{selectedCity.population}</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                      <div className="text-sm text-slate-400 mb-1">Growth</div>
                      <div className="font-bold">{selectedCity.growth}</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <div className="text-sm text-slate-400 mb-1">Since</div>
                      <div className="font-bold text-2xl">{selectedCity.yearEstablished}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3">Network Details</h4>
                    <p className="text-slate-300 leading-relaxed">{selectedCity.details}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-lg border border-green-700/30">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-green-400">🌍</span>
                      Environmental Impact
                    </h4>
                    <p className="text-slate-300">
                      This geothermal network prevents{" "}
                      <span className="font-bold text-green-400">{selectedCity.co2Saved}</span> of CO₂ emissions
                      annually—equivalent to removing thousands of cars from the road.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-slate-400 text-sm"
        >
          <p className="mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Click on any city marker to view detailed geothermal network information
          </p>
          <p className="text-xs">Data current as of January 2026 • Sources: IEA, GEA, Local Energy Authorities</p>
        </motion.div>
      </div>
    </section>
  );
}
