import { motion } from 'motion/react';
import { useState } from 'react';
import { Thermometer, ArrowRight, Droplets, Wind, Snowflake } from 'lucide-react';

export function Introduction() {
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);

  const thermalConcepts = [
    {
      id: 'temperature',
      icon: Thermometer,
      title: 'Temperature',
      description: 'Average kinetic energy of atoms or molecules',
      image: 'https://images.unsplash.com/photo-1761061079418-e7b9fde0707c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaGVhdGluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NjkyMTI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 'heat-flow',
      icon: ArrowRight,
      title: 'Heat Flow',
      description: 'Naturally flows from warm to cool substances',
      image: 'https://images.unsplash.com/photo-1756482681036-73b894513086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0JTIwcHVtcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MTUzMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      id: 'gradient',
      icon: Droplets,
      title: 'Temperature Gradient',
      description: 'Difference in temperature between substances',
      image: 'https://images.unsplash.com/photo-1766934697093-ff901db75402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMGVhcnRoJTIwbGF5ZXJzfGVufDF8fHx8MTc2OTIxMjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section id="introduction" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">1.1</span>
            <h2 className="text-4xl font-bold text-slate-800">Introduction</h2>
          </div>
          <p className="text-lg text-slate-600 italic">
            Key Questions: What is thermal energy, and why do we need it? What is geothermal energy?
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Wind className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Depending on where you live, the weather outside might be cool and breezy, hot and humid, or cold and snowy. 
                  To maintain a comfortable and healthy indoor environment, <strong>every home—every building—needs to provide heating and cooling</strong>. 
                  We also use thermal energy to provide hot water for use at home (e.g. for cleaning, cooking, and bathing) and in workplaces 
                  (e.g. for industrial processes).
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Thermal Energy Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Thermometer className="w-7 h-7 text-orange-500" />
              Understanding Thermal Energy
            </h3>

            <div className="prose prose-lg text-slate-700 mb-8">
              <p className="leading-relaxed">
                In everyday language, <strong>thermal energy is energy associated with heat</strong>. When you heat up a substance, 
                its thermal energy increases; if you cool a substance, its thermal energy decreases. We measure how much thermal 
                energy is present by looking at the <strong>temperature</strong> of a substance—the average kinetic energy of the 
                atoms or molecules that make up that substance.
              </p>
              <p className="leading-relaxed">
                Heat naturally flows from high temperature (warmer) substances to low temperature (cooler) substances. This 
                difference in temperature is also called a <strong>temperature gradient</strong>. <strong>Geothermal energy</strong>, 
                or geothermal heat, is a specific type of thermal energy derived from the Earth's interior—heat below the surface.
              </p>
            </div>

            {/* Interactive Concept Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {thermalConcepts.map((concept) => {
                const Icon = concept.icon;
                const isHovered = hoveredConcept === concept.id;

                return (
                  <motion.div
                    key={concept.id}
                    onMouseEnter={() => setHoveredConcept(concept.id)}
                    onMouseLeave={() => setHoveredConcept(null)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative cursor-pointer"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <motion.img
                          animate={{ scale: isHovered ? 1.1 : 1 }}
                          transition={{ duration: 0.3 }}
                          src={concept.image}
                          alt={concept.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${concept.color} opacity-60`} />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${concept.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-bold text-lg text-slate-800">{concept.title}</h4>
                        </div>
                        
                        <motion.p
                          animate={{ 
                            height: isHovered ? 'auto' : '3rem',
                            opacity: isHovered ? 1 : 0.8
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-slate-600 overflow-hidden"
                        >
                          {concept.description}
                        </motion.p>

                        <motion.div
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          className="text-xs text-slate-500 mt-2 font-semibold"
                        >

                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
