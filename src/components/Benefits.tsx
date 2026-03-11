import { motion } from 'motion/react';
import { useState } from 'react';
import { Home, Users, Flag, Globe } from 'lucide-react';

export function Benefits() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const benefits = [
    {
      id: 'household',
      icon: Home,
      title: 'Your Household',
      summary: 'Comfort, efficiency, and health benefits',
      color: 'from-blue-400 to-cyan-500',
      details: [
        'Creates comfortable environments in an energy efficient way',
        'Reduces energy use overall and cuts energy bills',
        'Heat pumps run on electricity rather than burning heating oil, wood, or natural gas',
        'Reduces household exposure to air pollutants',
        'New England EPA recommends heat pumps as the healthy choice for home heating',
        'Insulates households from volatility of natural gas and delivered fuel prices'
      ],
      image: 'https://images.unsplash.com/photo-1761061079418-e7b9fde0707c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaGVhdGluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NjkyMTI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'community',
      icon: Users,
      title: 'Community & Local Environment',
      summary: 'Shared benefits and improved air quality',
      color: 'from-emerald-400 to-green-500',
      details: [
        'Affordability and access is shared by many households',
        'District energy systems can create jobs and build sense of community around shared resource',
        'Uses much less electricity compared to less-efficient electric boilers and baseboard heaters',
        'Helps reduce strain on electricity grid',
        'Reduces need for new electricity transmission infrastructure',
        'Enhances air quality for whole community by reducing pollution from burning wood, heating oil, or natural gas'
      ],
      image: 'https://images.unsplash.com/photo-1702435262272-c49b2d0eee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBuZWlnaGJvcmhvb2R8ZW58MXx8fHwxNzY5MjEyNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'country',
      icon: Flag,
      title: 'Your Country',
      summary: 'Energy independence and infrastructure efficiency',
      color: 'from-orange-400 to-red-500',
      details: [
        'Reduces dependence on imported fossil fuels',
        'Provides energy security through domestic resources',
        'Efficient electricity-based systems reduce overall energy demand',
        'Decreases need for natural gas infrastructure expansion',
        'Creates local jobs in installation and maintenance',
        'Supports transition to renewable energy economy'
      ],
      image: 'https://images.unsplash.com/photo-1767789082653-e30a047584fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmljdCUyMGhlYXRpbmclMjBwaXBlc3xlbnwxfHx8fDE3NjkyMTI1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'planet',
      icon: Globe,
      title: 'The Planet',
      summary: 'Climate benefits and emissions reduction',
      color: 'from-purple-400 to-pink-500',
      details: [
        'Reduction in greenhouse gas emissions is an important global benefit',
        'Efficient electricity-based geothermal systems use less energy than natural gas combustion',
        'Reduces CO₂ emissions significantly',
        'By avoiding natural gas, reduces methane leaks from nation\'s gas transport network',
        'Contributes to global climate goals',
        'Helps transition away from fossil fuel dependency'
      ],
      image: 'https://images.unsplash.com/photo-1766934697093-ff901db75402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMGVhcnRoJTIwbGF5ZXJzfGVufDF8fHx8MTc2OTIxMjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-emerald-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">1.5</span>
            <h2 className="text-4xl font-bold text-slate-800">
              Benefits of Geothermal Systems for Heating and Cooling Networks
            </h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            Key Questions: Why would we want geothermal energy for heating and cooling? How does it benefit me and my 
            family, my community, or the environment?
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-slate-700 leading-relaxed">
              When considering geothermal systems you might think about its beneficial impacts on <strong>your household</strong>, 
              <strong> your community and the local environment</strong>, <strong> the country</strong>, and <strong> the planet</strong>.
            </p>
          </div>
        </motion.div>

        {/* Benefit Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isExpanded = expandedCard === benefit.id;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setExpandedCard(isExpanded ? null : benefit.id)}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      animate={{ scale: isExpanded ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${benefit.color} opacity-70`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-14 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-slate-800" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`h-1 w-16 bg-gradient-to-r ${benefit.color} rounded-full mb-4`} />
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 mb-4 font-semibold">{benefit.summary}</p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-200">
                        <ul className="space-y-3">
                          {benefit.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${benefit.color} mt-2 flex-shrink-0`} />
                              <span className="text-sm text-slate-700 leading-relaxed">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Toggle Indicator */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <button className={`text-sm font-semibold transition-colors ${
                        isExpanded ? 'text-slate-800' : 'text-blue-600'
                      }`}>
                        {isExpanded ? '↑ Click to collapse' : '↓ Click for details'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
