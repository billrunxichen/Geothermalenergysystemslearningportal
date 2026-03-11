import { motion } from 'motion/react';
import { useState } from 'react';
import { School, Home, Building2, MapPin, CheckCircle } from 'lucide-react';

export function CommunityOpportunities() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<number | null>(null);

  const opportunities = [
    {
      icon: School,
      title: 'Schools & Public Buildings',
      color: 'from-blue-400 to-cyan-500',
      description: 'Municipal buildings with high heating/cooling needs',
      examples: [
        'Public schools and universities',
        'Town halls and government offices',
        'Libraries and community centers',
        'Recreation facilities'
      ],
      whyGood: 'High energy use, public ownership, community visibility'
    },
    {
      icon: Home,
      title: 'New Developments',
      color: 'from-emerald-400 to-green-500',
      description: 'Upcoming construction projects in your area',
      examples: [
        'New housing developments',
        'Mixed-use residential/commercial',
        'Affordable housing projects',
        'Transit-oriented developments'
      ],
      whyGood: 'Easier to integrate during construction, lower retrofit costs'
    },
    {
      icon: Building2,
      title: 'Commercial Districts',
      color: 'from-orange-400 to-red-500',
      description: 'Business areas with clustered buildings',
      examples: [
        'Downtown shopping districts',
        'Office parks and business centers',
        'Hotels and hospitality',
        'Shopping centers and malls'
      ],
      whyGood: 'High density, shared infrastructure benefits, business interest'
    },
    {
      icon: MapPin,
      title: 'Existing Infrastructure',
      color: 'from-purple-400 to-pink-500',
      description: 'Places with relevant infrastructure already in place',
      examples: [
        'Areas with aging heating systems',
        'Buildings scheduled for renovation',
        'Sites near existing utility corridors',
        'Communities replacing gas infrastructure'
      ],
      whyGood: 'Timing alignment, cost savings, momentum for change'
    }
  ];

  return (
    <section id="community-opportunities" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">2.2</span>
            <h2 className="text-3xl font-bold text-slate-800">Envision Community Opportunities</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            Key Questions: What are some existing places in your community that could benefit from the adoption of 
            geothermal networks?
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-slate-700 leading-relaxed">
              You don't have to "start from zero" when you think about geothermal energy. Look at the neighborhood, 
              community buildings, and existing infrastructure: there are <strong>real opportunities around you</strong> to 
              kickstart interest in geothermal energy, which can grow into excitement and buy-in from key decisionmakers, 
              which results in action to design and build a system.
            </p>
          </div>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            const isSelected = selectedOpportunity === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedOpportunity(isSelected ? null : index)}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                    isSelected ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${opportunity.color} p-6 text-white`}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl mb-2">{opportunity.title}</h3>
                        <p className="text-white/90">{opportunity.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-slate-600 uppercase tracking-wide mb-3">
                        Examples in Your Community:
                      </h4>
                      <ul className="space-y-2">
                        {opportunity.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isSelected ? 'auto' : 0,
                        opacity: isSelected ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 pt-4 border-t border-slate-200 bg-gradient-to-r ${opportunity.color} bg-opacity-10 p-4 rounded-lg`}>
                        <h4 className="font-semibold text-sm text-slate-800 mb-2">Why This is a Good Target:</h4>
                        <p className="text-sm text-slate-700">{opportunity.whyGood}</p>
                      </div>
                    </motion.div>

                    {!isSelected && (
                      <div className="mt-4 text-center">
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                          Click to see why this is a good target →
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Steps Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h4 className="text-xl font-bold mb-3">Starting Your Journey</h4>
          <p className="text-blue-100 leading-relaxed">
            At this point, you can just <strong className="text-white">jot down a few potential ideas</strong> that will 
            help you excite a coalition. You will revisit each idea in more detail as you work with coalition partners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
