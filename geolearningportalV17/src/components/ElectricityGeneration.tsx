import { motion } from 'motion/react';
import { useState } from 'react';
import { Zap, ArrowDown, Droplet, Mountain } from 'lucide-react';

export function ElectricityGeneration() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const components = [
    {
      id: 'traditional',
      position: { top: '15%', left: '20%' },
      icon: Mountain,
      title: 'Traditional Geothermal',
      temp: 'Thousands of feet deep',
      description: 'Underground reservoirs of steam and hot water in select locations with the right geology. Steam feeds into turbines attached to generators to produce electricity.',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'egs',
      position: { top: '15%', right: '20%' },
      icon: Droplet,
      title: 'Enhanced Geothermal (EGS)',
      temp: 'Much deeper drilling',
      description: 'Newer innovations that drill much deeper to reach hot rock, allowing geothermal power plants to be sited in more locations beyond select geological areas.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'heating-cooling',
      position: { bottom: '20%', left: '50%' },
      icon: Zap,
      title: 'Geothermal for Heating/Cooling',
      temp: '40-70°F (4-21°C)',
      description: 'DIFFERENT from electricity generation. Uses stable temperature resource at shallow depth (few hundred feet). Temperature profiles found in many locations for heat pumps.',
      color: 'from-emerald-500 to-green-600',
      isDifferent: true
    }
  ];

  return (
    <section id="electricity-generation" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-400">1.4</span>
            <h2 className="text-4xl font-bold text-white">
              Geothermal Electricity Generation—Not the Same as District Heating/Cooling
            </h2>
          </div>
          <p className="text-lg text-blue-200 italic">
            Key Questions: How do geothermal systems generate electricity? How is this different from using the 
            ambient temperature of the earth for heating and cooling?
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
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <p className="text-lg text-blue-100 leading-relaxed mb-4">
              Geothermal resources can also be used for <strong className="text-white">electricity generation</strong>—which 
              is <strong className="text-yellow-400">different</strong> from drawing on geothermal resources for heating or cooling.
            </p>
          </div>
        </motion.div>

        {/* Interactive Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          {/* Background Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1759934553802-749f348a50b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW90aGVybWFsJTIwcG93ZXIlMjBwbGFudHxlbnwxfHx8fDE3NjkyMTI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Geothermal power plant"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

            {/* Hoverable Components */}
            {components.map((component) => {
              const Icon = component.icon;
              const isHovered = hoveredComponent === component.id;

              return (
                <motion.div
                  key={component.id}
                  className="absolute"
                  style={{
                    top: component.position.top,
                    left: component.position.left,
                    right: component.position.right,
                    bottom: component.position.bottom,
                    transform: component.position.left === '50%' ? 'translateX(-50%)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredComponent(component.id)}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  {/* Marker */}
                  <motion.div
                    animate={{ scale: isHovered ? 1.2 : 1 }}
                    className="relative cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${component.color} rounded-full blur-md`}
                      style={{ width: '48px', height: '48px', left: '-8px', top: '-8px' }}
                    />

                    <div className={`relative w-8 h-8 rounded-full bg-gradient-to-r ${component.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Info Popup */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 10,
                      scale: isHovered ? 1 : 0.9
                    }}
                    transition={{ duration: 0.2 }}
                    className={`absolute ${
                      component.position.bottom ? 'bottom-full mb-4' : 'top-full mt-4'
                    } left-1/2 -translate-x-1/2 w-80 bg-slate-800/95 backdrop-blur border ${
                      component.isDifferent ? 'border-yellow-500' : 'border-white/20'
                    } rounded-xl p-4 shadow-2xl z-10`}
                  >
                    {component.isDifferent && (
                      <div className="mb-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
                        <p className="text-xs text-yellow-300 font-bold text-center">⚠️ DIFFERENT SYSTEM</p>
                      </div>
                    )}
                    <h4 className="font-bold text-lg mb-2 text-white">{component.title}</h4>
                    <p className="text-sm text-blue-300 mb-3 font-semibold">{component.temp}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{component.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-sm mt-4">
            Hover over the markers to learn about different components
          </p>
        </motion.div>

        {/* Detailed Explanations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Electricity Generation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-bold">For Electricity Generation</h3>
            </div>
            <div className="space-y-3 text-slate-200">
              <p className="leading-relaxed">
                <strong className="text-white">Traditional:</strong> Tap into underground reservoirs of steam and hot water, 
                located thousands of feet deep in select locations. Steam feeds into turbines which rotate generators to 
                produce electricity.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Enhanced (EGS):</strong> Newer innovations drill much deeper to reach hot rock, 
                allowing siting in more locations beyond areas with special geology.
              </p>
            </div>
          </motion.div>

          {/* Heating/Cooling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <ArrowDown className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-bold">For Heating & Cooling</h3>
            </div>
            <div className="space-y-3 text-slate-200">
              <p className="leading-relaxed">
                <strong className="text-white">Different approach:</strong> Uses stable temperature resource at 
                <strong className="text-emerald-400"> 40-70°F (4-21°C)</strong>—far lower than what's needed for power plants.
              </p>
              <p className="leading-relaxed">
                These temperature profiles are found in <strong className="text-white">many locations</strong>. Simply dig 
                down to shallow depth (few hundred feet) and use a geothermal heat pump to transfer thermal energy to and 
                from the soil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
