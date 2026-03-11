import { motion } from 'motion/react';
import { useState } from 'react';
import { Home, Wrench, Thermometer, Droplet, Wind, CheckCircle, Building2, Factory, School } from 'lucide-react';

export function BuildingRetrofits() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const buildingTypes = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Buildings',
      color: 'from-blue-400 to-cyan-500',
      retrofits: [
        'Install heat pump and distribution system inside building',
        'Connect to district network piping at property line',
        'Upgrade insulation if needed for efficiency',
        'Replace or retrofit existing radiators or ductwork',
        'Install smart thermostats for optimal control'
      ],
      considerations: 'Homeowners need to understand interior retrofit requirements and timeline. Costs may be offset by rebates or shared infrastructure.'
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Commercial Buildings',
      color: 'from-emerald-400 to-green-500',
      retrofits: [
        'Size heat pumps for commercial heating/cooling loads',
        'Integrate with existing HVAC infrastructure',
        'Install heat exchangers and pumping equipment',
        'Upgrade building controls and automation',
        'Plan retrofit around business operations'
      ],
      considerations: 'Business owners need minimal disruption. Phased installation can keep operations running during transition.'
    },
    {
      id: 'industrial',
      icon: Factory,
      title: 'Industrial Buildings',
      color: 'from-orange-400 to-red-500',
      retrofits: [
        'Design system for process heat requirements',
        'Install high-capacity heat exchangers',
        'Integrate with industrial processes',
        'Add thermal storage if needed for demand management',
        'Ensure compatibility with existing equipment'
      ],
      considerations: 'Industrial facilities may need custom solutions for specific temperature requirements and continuous operation.'
    },
    {
      id: 'civic',
      icon: School,
      title: 'Civic Buildings',
      color: 'from-purple-400 to-pink-500',
      retrofits: [
        'Plan installations during school breaks or low-use periods',
        'Upgrade aging heating systems simultaneously',
        'Install efficient distribution throughout large buildings',
        'Add monitoring systems for performance tracking',
        'Coordinate with facility management teams'
      ],
      considerations: 'Public buildings can demonstrate leadership while benefiting from long-term operational savings and improved comfort.'
    }
  ];

  const equipmentList = [
    {
      icon: Thermometer,
      name: 'Heat Pump Unit',
      description: 'Transfers heat between building and network'
    },
    {
      icon: Droplet,
      name: 'Heat Exchanger',
      description: 'Interfaces building system with district network'
    },
    {
      icon: Wind,
      name: 'Distribution System',
      description: 'Ductwork or hydronic piping within building'
    },
    {
      icon: Wrench,
      name: 'Controls & Monitoring',
      description: 'Smart thermostats and system management'
    }
  ];

  return (
    <section id="building-retrofits" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">3.3</span>
            <h2 className="text-3xl font-bold text-slate-800">Answer Questions about Building-Scale Retrofits</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            Key Questions: How do heating and cooling systems in a building connect to a community geothermal system? 
            What actions do building owners need to take?
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              While district heating and cooling systems involve large community networks, there will inevitably be 
              <strong> specific retrofits that take place at each building</strong> that connects to the network. What are 
              those changes, what equipment needs to be installed, and how does it all work for a home or business?
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1768321901750-f7b96d774456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMHJldHJvZml0fGVufDF8fHx8MTc3MDAxNTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Home retrofit"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h4 className="text-2xl font-bold mb-2">Building-Level Retrofits</h4>
                <p className="text-slate-200 text-lg">
                  Each building connects to the network with interior equipment and proper integration
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Required Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Required Equipment for Building Connection
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentList.map((equipment, index) => {
              const Icon = equipment.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="font-bold text-lg mb-2 text-slate-800">{equipment.name}</h5>
                  <p className="text-sm text-slate-600">{equipment.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Building Type Retrofits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Retrofit Considerations by Building Type
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {buildingTypes.map((type, index) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;

              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedType(isSelected ? null : type.id)}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                      isSelected ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h5 className="font-bold text-2xl">{type.title}</h5>
                      </div>
                    </div>

                    <div className="p-6">
                      <h6 className="font-semibold text-sm text-slate-600 uppercase tracking-wide mb-3">
                        Typical Retrofits:
                      </h6>
                      <ul className="space-y-2 mb-4">
                        {type.retrofits.map((retrofit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{retrofit}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isSelected ? 'auto' : 0,
                          opacity: isSelected ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-4 border-t border-slate-200 bg-gradient-to-r ${type.color} bg-opacity-10 p-4 rounded-lg`}>
                          <h6 className="font-semibold text-sm text-slate-800 mb-2">Special Considerations:</h6>
                          <p className="text-sm text-slate-700 leading-relaxed">{type.considerations}</p>
                        </div>
                      </motion.div>

                      {!isSelected && (
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                          Click for considerations →
                        </button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <Wrench className="w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-3">Build Your FAQ List</h4>
              <p className="text-orange-100 leading-relaxed">
                Many homeowners are likely to have questions about retrofits. <strong className="text-white">Build a list 
                of frequently asked questions</strong>, and develop a set of answers from the coalition. This will help you 
                communicate clearly with potential network participants and address concerns early.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}