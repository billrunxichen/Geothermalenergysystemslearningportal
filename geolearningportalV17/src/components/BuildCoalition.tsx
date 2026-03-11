import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Building2, Heart, Briefcase, Home, Factory, School, Hospital } from 'lucide-react';

export function BuildCoalition() {
  const [hoveredStakeholder, setHoveredStakeholder] = useState<string | null>(null);

  const stakeholders = [
    {
      id: 'households',
      icon: Home,
      title: 'Households & Residents',
      color: 'from-blue-400 to-cyan-500',
      interests: [
        'Lower energy bills',
        'Improved air quality',
        'Protection from fuel price volatility',
        'Comfortable indoor climate'
      ]
    },
    {
      id: 'businesses',
      icon: Briefcase,
      title: 'Business Owners',
      color: 'from-emerald-400 to-green-500',
      interests: [
        'Reduced operating costs',
        'Sustainability credentials',
        'Energy cost predictability',
        'Attract environmentally conscious customers'
      ]
    },
    {
      id: 'civic',
      icon: School,
      title: 'Civic Organizations',
      color: 'from-purple-400 to-pink-500',
      interests: [
        'Community resilience',
        'Public health benefits',
        'Educational opportunities',
        'Climate action leadership'
      ]
    },
    {
      id: 'health',
      icon: Hospital,
      title: 'Public Health Groups',
      color: 'from-red-400 to-orange-500',
      interests: [
        'Air pollution reduction',
        'Respiratory health improvement',
        'Indoor air quality',
        'Environmental justice'
      ]
    },
    {
      id: 'government',
      icon: Building2,
      title: 'City Government',
      color: 'from-indigo-400 to-blue-600',
      interests: [
        'Climate goals achievement',
        'Infrastructure modernization',
        'Job creation',
        'Energy independence'
      ]
    },
    {
      id: 'nonprofits',
      icon: Heart,
      title: 'Non-Profit Groups',
      color: 'from-orange-400 to-yellow-500',
      interests: [
        'Access and affordability',
        'Environmental protection',
        'Community empowerment',
        'Social equity'
      ]
    },
    {
      id: 'industry',
      icon: Factory,
      title: 'Industrial Partners',
      color: 'from-teal-400 to-cyan-600',
      interests: [
        'Process heat efficiency',
        'Carbon footprint reduction',
        'Long-term energy security',
        'Innovation opportunities'
      ]
    },
    {
      id: 'boosters',
      icon: Users,
      title: 'Community Boosters',
      color: 'from-pink-400 to-rose-500',
      interests: [
        'Regional economic development',
        'Job opportunities',
        'Community pride',
        'Attract new residents/businesses'
      ]
    }
  ];

  return (
    <section id="build-coalition" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl mb-8">
            <h2 className="text-4xl font-bold mb-4">Building a Coalition & Designing a Process</h2>
            <p className="text-xl text-purple-100">
              Form a coalition of core organizers who will work together to advocate for a transition to geothermal 
              heating and cooling in your community.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">2.1</span>
            <h3 className="text-3xl font-bold text-slate-800">Recall the Benefits: Prepare to Build a Coalition</h3>
          </div>
          <p className="text-lg text-slate-600 italic">
            Key Questions: How do I prepare for the process of advocating for geothermal energy?
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              A shared energy system has <strong>many benefits</strong>—and those benefits might be important to 
              different stakeholders. Review the benefits of geothermal energy systems, which can affect households 
              and businesses, to city government and the regional economy. Consider non-profit groups, community business 
              boosters, and civic organizations. <strong>Who might be interested?</strong> Don't forget about air pollution 
              and public health benefits, impacts on access and affordability, and job opportunities.
            </p>
          </div>
        </motion.div>

        {/* Stakeholder Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Who Might Be Interested in Your Coalition?
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((stakeholder, index) => {
              const Icon = stakeholder.icon;
              const isHovered = hoveredStakeholder === stakeholder.id;

              return (
                <motion.div
                  key={stakeholder.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredStakeholder(stakeholder.id)}
                  onMouseLeave={() => setHoveredStakeholder(null)}
                  whileHover={{ y: -8 }}
                  className="cursor-pointer"
                >
                  <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border-2 ${
                    isHovered ? 'border-blue-500' : 'border-transparent'
                  }`}>
                    {/* Icon Header */}
                    <div className={`h-32 bg-gradient-to-br ${stakeholder.color} flex items-center justify-center relative overflow-hidden`}>
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.2 : 1,
                          rotate: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-16 h-16 text-white" />
                      </motion.div>
                      
                      {/* Decorative circles */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h5 className="font-bold text-lg mb-3 text-slate-800">{stakeholder.title}</h5>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isHovered ? 'auto' : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-3 border-t border-slate-200">
                          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                            Key Interests:
                          </p>
                          {stakeholder.interests.map((interest, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stakeholder.color} mt-1.5 flex-shrink-0`} />
                              <span className="text-sm text-slate-700">{interest}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {!isHovered && (
                        <p className="text-xs text-slate-400 mt-3 italic">Hover to see interests</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
        >
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-3">Build Your Coalition</h4>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Identify which of these stakeholders exist in your community and might be natural allies. 
            Each group brings unique perspectives and resources to strengthen your geothermal advocacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
