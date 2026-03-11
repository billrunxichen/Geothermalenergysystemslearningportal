import { motion } from 'motion/react';
import { useState } from 'react';
import { HelpCircle, ChevronDown, DollarSign, Clock, Wrench, Home, TrendingUp, Shield } from 'lucide-react';

export function HomeownerFAQs() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      icon: DollarSign,
      title: 'Costs & Savings',
      color: 'from-green-400 to-emerald-500',
      questions: [
        {
          q: 'How much will it cost me to connect to the geothermal network?',
          a: 'Connection costs vary by building type and existing infrastructure. Typically includes heat pump installation, interior distribution upgrades, and connection to the district network. Many communities offer rebates, financing, or shared infrastructure costs through the network operator.'
        },
        {
          q: 'What are the ongoing operational costs?',
          a: 'Operational costs are generally 30-50% lower than conventional heating systems. You\'ll pay for electricity to run the heat pump and a service fee to the network operator, but avoid fuel costs entirely.'
        },
        {
          q: 'How long until I see a return on investment?',
          a: 'Most residential connections see ROI within 5-10 years through reduced energy bills. Commercial buildings often see faster payback due to higher energy use. The exact timeline depends on your current heating costs and building characteristics.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Timeline & Process',
      color: 'from-blue-400 to-cyan-500',
      questions: [
        {
          q: 'How long does installation take?',
          a: 'Residential installations typically take 1-3 days for the interior equipment and connection. The district network construction happens separately. Most work can be scheduled around your availability with minimal disruption.'
        },
        {
          q: 'When would my building connect to the network?',
          a: 'Connection timing depends on the network buildout schedule. Buildings are typically connected in phases as the district infrastructure reaches each neighborhood. Your coalition will work with the network operator to develop a phased timeline.'
        },
        {
          q: 'Can I keep my existing heating system during the transition?',
          a: 'Yes, many buildings maintain their existing system as a backup during the initial transition period. This provides peace of mind while you become familiar with the new geothermal system.'
        }
      ]
    },
    {
      icon: Wrench,
      title: 'Technical Details',
      color: 'from-orange-400 to-red-500',
      questions: [
        {
          q: 'What changes are needed inside my building?',
          a: 'You\'ll need a heat pump unit installed, connection to the district piping at your property line, and potentially upgrades to your interior distribution system (ductwork or radiators). Smart thermostats are also typically installed for optimal control.'
        },
        {
          q: 'Will the system work in extreme weather?',
          a: 'Yes! Geothermal systems are designed to operate efficiently year-round. The stable underground temperature provides reliable heating in winter and cooling in summer, even in extreme conditions.'
        },
        {
          q: 'What maintenance is required?',
          a: 'Minimal maintenance is needed - typically just annual servicing of the heat pump, similar to HVAC system maintenance. The district network operator handles maintenance of the shared infrastructure.'
        }
      ]
    },
    {
      icon: Home,
      title: 'Property & Building',
      color: 'from-purple-400 to-pink-500',
      questions: [
        {
          q: 'Will this increase my property value?',
          a: 'Studies show that energy-efficient upgrades, especially renewable heating systems, can increase property values by 3-5%. Buyers increasingly value lower operating costs and sustainable features.'
        },
        {
          q: 'What if I\'m renting?',
          a: 'Landlords benefit from reduced operating costs and increased property value. Tenants benefit from lower utility bills and improved comfort. Many programs offer incentives for multi-family building connections.'
        },
        {
          q: 'Do I need a lot of yard space?',
          a: 'No! That\'s the beauty of a district geothermal network - the ground loops are shared infrastructure. You only need space for interior equipment and the connection point at your property line.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Reliability & Safety',
      color: 'from-indigo-400 to-blue-500',
      questions: [
        {
          q: 'Is geothermal heating reliable?',
          a: 'Very reliable! Geothermal systems have fewer moving parts than traditional HVAC, leading to longer lifespans (25+ years) and less breakdown. District networks also benefit from professional operation and maintenance.'
        },
        {
          q: 'Are there any safety concerns?',
          a: 'Geothermal systems are very safe. Unlike gas heating, there\'s no combustion, no carbon monoxide risk, and no fuel storage. The system uses electricity and the earth\'s stable temperature - both very safe energy sources.'
        },
        {
          q: 'What happens if the network needs repairs?',
          a: 'The network operator maintains backup systems and redundancy. If repairs are needed, they\'re handled by professionals with minimal impact to users. Many systems allow buildings to maintain limited operation during network maintenance.'
        }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Benefits & Impact',
      color: 'from-teal-400 to-green-500',
      questions: [
        {
          q: 'How much will this reduce my carbon footprint?',
          a: 'Geothermal heating can reduce your household CO₂ emissions by 80-99% compared to fossil fuel heating. Even compared to electric resistance heating, you\'ll see 50-70% reduction in energy use and associated emissions.'
        },
        {
          q: 'Will I notice a difference in comfort?',
          a: 'Many users report improved comfort with geothermal systems. They provide consistent heating/cooling without the temperature fluctuations of traditional systems. No drafts, no hot/cold spots - just steady, comfortable climate control.'
        },
        {
          q: 'How does this benefit my community?',
          a: 'Beyond your personal savings, you\'re contributing to improved local air quality, community energy independence, local job creation, and collective climate action. Shared infrastructure means shared benefits for everyone.'
        }
      ]
    }
  ];

  return (
    <section id="homeowner-faqs" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">3.5</span>
            <h2 className="text-3xl font-bold text-slate-800">Homeowner FAQs</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            Key Questions: What do potential users want to know about district energy?
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              As you encounter different stakeholders in the community, you will hear their questions and concerns, and 
              understand what makes them excited, worried, or hopeful. <strong>Track all of these questions</strong>, so 
              you can develop a set of "Frequently Asked Questions" for your community.
            </p>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-6 space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const faqId = categoryIndex * 100 + faqIndex;
                      const isExpanded = expandedFAQ === faqId;

                      return (
                        <motion.div
                          key={faqIndex}
                          className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                        >
                          <button
                            onClick={() => setExpandedFAQ(isExpanded ? null : faqId)}
                            className="w-full p-4 flex items-start gap-4 text-left hover:bg-slate-50 transition-colors"
                          >
                            <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isExpanded ? 'text-blue-600' : 'text-slate-400'}`} />
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-800 mb-1">{faq.q}</h4>
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-slate-400" />
                            </motion.div>
                          </button>

                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: isExpanded ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pl-13">
                              <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Build Your Own FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-4">
            <HelpCircle className="w-12 h-12 flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-3">Customize for Your Community</h4>
              <p className="text-blue-100 leading-relaxed mb-4">
                These are common questions, but every community is unique. As you conduct outreach and engagement, 
                <strong className="text-white"> track the specific questions and concerns you hear</strong>.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Build your own FAQ document tailored to your community's needs, concerns, and local context. This becomes 
                a valuable resource for outreach and helps address barriers to participation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
